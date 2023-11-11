import Banner from "./banner";
import Slider from "./slider";

const Welcome = () => {
  return (
    <>
      <div className="w-full flex justify-center items-start xl:flex-col">
        <Banner />
        <Slider />
      </div>
    </>
  );
};
export default Welcome;
