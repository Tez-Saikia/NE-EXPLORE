import React, { useState } from "react";
import DataTable from "react-data-table-component";
import travelPackages from "../Packages/Nagaland/NglData/NglDataArr";
import SikkimPackages from "../Packages/Sikkim/SikkimData/SikkimDataArr";
import MeghalayaPackages from "../Packages/Meghalaya/MglData/MglDataArr";
import ManipurPackages from "../Packages/Manipur/MnpData/MnpDataArr";
import MizoramPackages from "../Packages/Mizoram/MizData/MizDataArr";
import ApPackages from "../Packages/Arunachal/ApData/ApDataArr";
import AssamPackages from "../Packages/Assam/AssamData/AssamDataArr";
import TripuraPackages from "../Packages/Tripura/TripuraData/TripuraDataArr";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

function ExportTable() {
  const [selectedLocation, setSelectedLocation] = useState("All Packages");

  const columns = [
    {
      name: "Location",
      selector: (row) => row.location,
      cell: (row) => {
        const totalPackages = getTotalPackages(row.location);
        const isActive = selectedLocation === row.location;

        return (
          <button
            className={`text-lg ${
              isActive
                ? "text-blue-500 underline font-bold"
                : "text-blue-500 hover:underline"
            }`}
            onClick={() => setSelectedLocation(row.location)}
          >
            {row.location} ({totalPackages})
          </button>
        );
      },
    },
  ];

  const data = [
    { location: "All Packages" },
    { location: "Nagaland" },
    { location: "Sikkim" },
    { location: "Meghalaya" },
    { location: "Manipur" },
    { location: "Mizoram" },
    { location: "Arunachal Pradesh" },
    { location: "Assam" },
    { location: "Tripura" },
  ];

  const allPackages = [
    ...travelPackages,
    ...SikkimPackages,
    ...MeghalayaPackages,
    ...ManipurPackages,
    ...MizoramPackages,
    ...ApPackages,
    ...AssamPackages,
    ...TripuraPackages,
  ];

  const locationPackages = {
    "All Packages": allPackages,
    Nagaland: travelPackages || [],
    Sikkim: SikkimPackages || [],
    Meghalaya: MeghalayaPackages || [],
    Manipur: ManipurPackages || [],
    Mizoram: MizoramPackages || [],
    "Arunachal Pradesh": ApPackages || [],
    Assam: AssamPackages || [],
    Tripura: TripuraPackages || [],
  };

  const renderPackages = (location) => {
    const packagesToDisplay = locationPackages[location] || [];
    return packagesToDisplay.map((pkg) => (
      <div
        key={pkg.id}
        className="mb-6 border rounded-lg shadow-md p-4 relative"
      >
        <div className="group">
          <Carousel>
            <CarouselContent>
              {pkg.image.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <img
                    src={imgSrc}
                    alt={`${pkg.name} - Image ${index + 1}`}
                    className="w-full h-[18rem] object-cover rounded-t-lg"
                    onClick={() =>
                      console.log(
                        `Clicked on image ${index + 1} of ${pkg.name}`
                      )
                    }
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

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
            <span className="font-bold text-2xl">{pkg.price.original}</span>
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
    ));
  };

  const getTotalPackages = (location) => {
    const packages = locationPackages[location] || [];
    return packages.length;
  };

  return (
    <div className="flex">
      {/* Fixed Location Table */}
      <div className="w-1/4 p-4 ">
        <DataTable columns={columns} data={data} />
      </div>

      {/* Scrollable Packages Section */}
      <div className="w-3/4 p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 h-[90vh] flex flex-col">
          <h2 className="text-2xl font-bold mb-4">
            {selectedLocation} Packages
          </h2>

          <ScrollArea className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderPackages(selectedLocation)}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default ExportTable;
