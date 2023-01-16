import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <div>
      <div className="mt-8 flex gap-3 lg:mt-16 lg:gap-8">
        <div>
          <Image
            className="w-36 h-48 lg:w-56 lg:h-80 object-cover"
            src="/../public/bg-1.png"
            width={50}
            height={50}
            alt="digifist-img"
          />
          <p className="mb-5 w-32 font-normal text-xs leading-5 lg:mb-0 lg:w-56 lg:mt-3 lg:text-sm lg:font-avenir">
            365 Signature Hoodie
          </p>
          <div className="lg:flex justify-between lg:mt-1">
            <p className="font-medium text-xs leading-5 mb-2 lg:mt-0">€33.95</p>
            <div className="flex gap-2">
              <div className="bg-radio1 rounded-full w-4 h-4">
                <input
                  type="radio"
                  name="radio1"
                  className="hidden"
                  id="color1"
                />
                <label
                  for="color1"
                  className="border border-gray-200 rounded-sm w-4 h-4 cursor-pointer shadow-sm block"
                ></label>
              </div>
              <div className="bg-radio2 rounded-full w-4 h-4"></div>
              <div className="bg-radio3 rounded-full w-4 h-4"></div>
              <div className="bg-radio4 rounded-full w-4 h-4"></div>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="w-36 h-48 lg:w-56 lg:h-80 object-cover"
            src="/../public/bg-2.png"
            width={50}
            height={50}
            alt="digifist-img"
          />
          <p className="lg:font-avenir w-32 font-normal text-xs leading-5 lg:w-56 lg:mt-3 lg:text-sm">
            Organic Skinny High Waist Jeans
          </p>
          <div className="lg:flex justify-between lg:mt-1">
            <p className="font-medium text-xs leading-5 mb-2 lg:mt-0">€33.95</p>
            <div className="flex gap-2">
              <div className="bg-radio1 rounded-full w-4 h-4"></div>
              <div className="bg-radio2 rounded-full w-4 h-4"></div>
              <div className="bg-radio3 rounded-full w-4 h-4"></div>
              <div className="bg-radio4 rounded-full w-4 h-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
