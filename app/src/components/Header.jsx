import Button from "./parts/Button"

const Header = () => {
  return (
    <div className="h-[160px] flex flex-col items-center justify-center">
      <div className="flex justify-between w-[1200px]">
       <h1 className="text-white font-bold text-[32px]">
         F<span className="text-red-600">oo</span>dy Z<span className="text-red-600">o</span>ne
         </h1>
         <input placeholder="Search Food..." type="text" className="border border-red-600 h-10 w-[250px] rounded-md pl-5 bg-black-100 focus:border-red-800 focus:outline-none"/>
      </div>
      <div className="flex gap-4 mt-10">
        <Button name={"All"}/>
        <Button name={"BreakFast"}/>
        <Button name={"Lunch"}/>
        <Button name={"Dinner"}/>
      </div>
    </div>
  )
}

export default Header