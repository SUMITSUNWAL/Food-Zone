import { useState } from "react";
import FoodTemplate from "./parts/FoodTemplate";
import { useEffect } from "react";

const Hero = () => {
  const[data,setData] = useState([]);

  async function fetchingData(){
    const store =await  fetch('http://localhost:5000/sumitdata');
    const store2 = await store.json();
    setData(store2);
  }
  useEffect(() => {
    fetchingData();
  },[]);

  return (
    <div  className="h-[calc(100vh-160px)]  relative before:content-[''] before:absolute before:bg-[url('/images/bg-image.png')] before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-50">
      <div className="relative flex gap-4 flex-wrap justify-center pt-10">
      {data && data.length > 0 ? (
        data.map((d, index) => (
        <FoodTemplate key={index} data={d} />
          ))
        ) : (
        <p>Loading...</p>
      )}

      </div>
      </div>
  );
};

export default Hero;

