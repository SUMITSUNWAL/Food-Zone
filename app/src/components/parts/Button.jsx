import { useContext } from "react";
import { contextApi } from "../../App";

const Button = ( {name}) => {
  const {setButtonData} = useContext(contextApi);

  function changes(){
    setButtonData(name);
  }
  return (
    <div>
      <button className="bg-red-500 text-[18px] py-0.5 px-3 rounded-md hover:bg-red-600"
      onClick={changes}>{name}</button>
    </div>
  )
}

export default Button