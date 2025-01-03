import Button from "./parts/Button"

const Header = ({data,setFilterData,setButtonData}) => {

  function searchFood(e){
    const searchItem = e.target.value;
    console.log(searchItem);

    // if(searchItem === ""){
    //   setFilterData(null);  for safe search but use it or not same thing
    // }

    const filtered = data?.filter((food)=>{
      return food.name.toLowerCase().includes(searchItem.toLowerCase());
    })
    console.log(filtered)
    setFilterData(filtered);
  }

  return (
    <div className="h-[160px] flex flex-col items-center justify-center">
      <div className="flex justify-between w-[1200px]">
       <h1 className="text-white font-bold text-[32px]">
         F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne
         </h1>
         <input placeholder="Search Food..." type="text" className="border border-red-600 h-10 w-[250px] rounded-md pl-5 bg-black-100 focus:border-red-800 focus:outline-none"
         onChange={searchFood}/>
      </div>
      <div className="flex gap-4 mt-10">
        <Button name={"All"} setButtonData={setButtonData}/>
        <Button name={"BreakFast"} setButtonData={setButtonData}/>
        <Button name={"Lunch"} setButtonData={setButtonData}/>
        <Button name={"Dinner"} setButtonData={setButtonData}/>
      </div>
    </div>
  )
}

export default Header