import React from "react";
import AssamPackages from "./AssamDataArr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

function AssamData() {
  return (
    <div className="relative z-[999]">
      <div className="grid grid-cols-1 gap-6 p-[7rem] md:grid-cols-2 lg:grid-cols-3 mt-[43rem]">
        {AssamPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="border w-[27rem] rounded-lg shadow-md p-4 relative z-[1000]"
          >
            {/* Carousel for images */}
            <div className="relative group">
              <Carousel>
                <CarouselContent>
                  {pkg.image.map((imgSrc, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={imgSrc}
                        alt={`${pkg.name} - Image ${index + 1}`}
                        className="w-full h-[18rem] object-cover rounded-t-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Arrow buttons, hide when on first or last slide */}
                <CarouselPrevious
                  className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-opacity ${
                    pkg.image.length === 1
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                />
                <CarouselNext
                  className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-opacity ${
                    pkg.image.length === 1
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100"
                  }`}
                />
              </Carousel>
            </div>

            <div className="p-4">
              <h3 className="text-xl font-bold">{pkg.name}</h3>
              <p className="mt-2 text-gray-600">{pkg.days}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {Array(Math.floor(pkg.rating)).fill("⭐")}
                </span>
                <span className="ml-2 text-green-400">({pkg.rating}/5)</span>
              </div>
              <p className="mt-4 text-lg font-semibold">
                <span className="font-bold text-2xl">
                  {pkg.price.original}{" "}
                </span>
                <span className="line-through">{pkg.price.discounted}</span>
              </p>

              {/* Button */}
              <div className="flex justify-center mt-4 ml-[-11rem]">
                {pkg.route ? ( // Check if a custom route is defined
                  <Link to={pkg.route} target="_blank">
                    <button className="w-full bg-[#ff8600] hover:bg-orange-400 text-white py-2 px-4 rounded-md font-bold">
                      Click For More Details
                    </button>
                  </Link>
                ) : (
                  <Link to={`/Packages/Details/${pkg.id}`}>
                    <button className="w-full bg-[#ff8600] hover:bg-orange-400 text-white py-2 px-4 rounded-md font-bold">
                      Click For More Details
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssamData;
