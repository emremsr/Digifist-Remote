import Image from "next/image";
import React from "react";
import { data } from "../../data/data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function ProductSlider() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <div className=" absolute flex items-center w-fit h-fit">
      <MdChevronLeft
          onClick={slideLeft}
          className="hidden lg:block relative font-thin border"
          size={25}
        />
        <div
          id="slider"
          className="w-[350px] lg:w-[550px] lg:h-[480px] flex overflow-y-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <div className="w-fit h-fit mt-8 gap-14 lg:mt-16" key={item.id}>
              <Image
                className="w-36 h-48 inline-block p-2 cursor-pointer lg:w-56 lg:h-80 object-cover pl-0"
                src={item.img}
                width={50}
                height={50}
                alt="digifist-img"
              />
              <p className="mb-5 w-36 font-normal text-xs text-left leading-5 lg:mb-0 lg:w-56 lg:mt-3 lg:text-sm lg:font-avenir">
                {item.desc}
              </p>
              <div className="lg:flex justify-between items-start lg:mt-1 lg:pr-3">
                <p className="font-medium text-xs leading-5 mb-2 lg:mt-0">
                  €33.95
                </p>
                <div className="flex gap-2 items-center">
                  <div className="bg-radio1 rounded-full w-4 h-4">
                    <input
                      type="radio"
                      name="radio1"
                      className="hidden"
                      id="color1"
                    />
                    <label
                      htmlFor="color1"
                      className="border border-gray-200 rounded-sm w-4 h-4 cursor-pointer shadow-sm block"
                    ></label>
                  </div>
                  <div className="bg-radio2 rounded-full w-4 h-4">
                    <input
                      type="radio"
                      name="radio1"
                      className="hidden"
                      id="color1"
                    />
                    <label
                      htmlFor="color1"
                      className="border border-gray-200 rounded-sm w-4 h-4 cursor-pointer shadow-sm block"
                    ></label>
                  </div>
                  <div className="bg-radio3 rounded-full w-4 h-4">
                    <input
                      type="radio"
                      name="radio1"
                      className="hidden"
                      id="color1"
                    />
                    <label
                      htmlFor="color1"
                      className="border border-gray-200 rounded-sm w-4 h-4 cursor-pointer shadow-sm block"
                    ></label>
                  </div>
                  <div className="bg-radio4 rounded-full w-4 h-4">
                    <input
                      type="radio"
                      name="radio1"
                      className="hidden"
                      id="color1"
                    />
                    <label
                      htmlFor="color1"
                      className="border border-gray-200 rounded-sm w-4 h-4 cursor-pointer shadow-sm block"
                    ></label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="hidden lg:block relative font-thin border"
          size={25}
        />
      </div>
    </div>
  );
}
