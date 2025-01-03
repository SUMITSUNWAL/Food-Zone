import FoodTemplate from "./parts/FoodTemplate";

const Hero = ({ data, filterData }) => {
  // Determine the data to display: prioritize filtered data if it exists
  const displayData = filterData && filterData.length > 0 ? filterData : data;

  return (
    <div className="h-[calc(100vh-160px)] relative before:content-[''] before:absolute before:bg-[url('/images/bg-image.png')] before:top-0 before:bottom-0 before:right-0 before:left-0 before:opacity-50">
      <div className="relative flex gap-4 flex-wrap justify-center pt-10">
        {displayData && displayData.length > 0 ? (
          displayData.map((d, index) => <FoodTemplate key={index} data={d} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
