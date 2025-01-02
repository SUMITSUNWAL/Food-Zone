
const FoodTemplate = ( {data}) => {
  return (
    <div className="flex w-[360px] min-h-[150px] gap-3 border border-blue-400 rounded-md py-1 px-2 relative before:Content-[''] before:bg-black-100 before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:blur">
      <div className="w-[140px] flex-shrink-0 z-10">
        <img src={`${data.image}`} className="flex-shrink-0"></img>
      </div>
      <div className="flex flex-col break-words z-10">
        <h1 className="font-bold text-[20px]">{data.name}</h1>
        <p className="text-[12px]"> {data.text} </p>
        <div className="relative flex justify-end">
          <button className="bg-red-500 text-white rounded-md text-[14px] px-1 absolute top-[20px]    right-[12px]">${data.price}</button>
        </div>
      </div>
    </div>
  )
}

export default FoodTemplate