import Image from "next/image";
import ProductSlider from "./components/ProductSlider";

export default function Home() {
  return (
    <div className="grid md:grid-cols-2">
      <div>
        <Image
          className="absolute object-cover w-fit h-fit md:w-full md:h-full md:relative lg:w-fit lg:h-full lg:relative"
          src="/../public/images/hero.png"
          width={720}
          height={864}
          alt="digifist"
        />
      </div>
      <div className="absolute mt-64 ml-6 md:mt-10 md:ml-10 lg:mt-24 lg:ml-32 md:relative">
        <h4 className="w-72 h-20 font-bold leading-7 text-2xl text-white md:text-black lg:text-3xl lg:w-96 lg:font-black">
          Everyday items, we have something to suit every occasion.
        </h4>
        <p className="hidden md:block mt-10 w-96 h-14 font-normal leading-6 font-avenir md:text-black  text-digifist">
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
          tincidunt semper eu proin leo gravida cursus.
        </p>
        <button className="w-48 h-6 mt-4 font-avenir font-normal text-left text-sm text-white capitalize leading-3 md:text-black lg:font-semibold">
          Shop all everyday items
        </button>
        <hr className="mt-1 h-1 w-36 md:text-black" />
        <ProductSlider />
      </div>
    </div>
  );
}
