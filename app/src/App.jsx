import { useEffect, useState } from "react";
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
   const[data,setData] = useState([]);
   const [filterData, setFilterData] = useState(null);
   const [buttonData,setButtonData] = useState("All");
   const [btData,setBtData] = useState([]);
  
    async function fetchingData(){
      const store =await  fetch('http://localhost:5000/sumitdata');
      const store2 = await store.json();
      setData(store2);
    }
    useEffect(() => {
      fetchingData();
    },[]);

    useEffect(()=>{
      if(buttonData === "All"){
        setBtData(data);
      }
      else{
        const store = data.filter((food)=>{
          return food.type.includes(buttonData.toLowerCase());
        })
        setBtData(store);
      }
    },[buttonData,data]);

  return <div>
    <Header data={data} setFilterData={setFilterData} setButtonData={setButtonData}/>
    <Hero  data={btData} filterData={filterData}/>
  </div>  
}

export default App
