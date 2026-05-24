import React, { useState, useEffect } from "react";
import sixthPkgImg from "./sixthPkgImg";
import Pkgimg from "../../imgs";
import Nav from "@/components/Header/Nav";
import Logo from "../../../../../assets/Logo.png";
import PkgDetailFooter from "../../../PackagesDetail/PkgDetailFooter";
import { FaHandHoldingUsd } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function WinterPackage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // Cycle through the first 3 images
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full h-[300vh] bg-blue-200 relative">
      {/* Nav with a high z-index */}
      <div className="relative z-50">
        <Nav />
      </div>

      {/* Logo */}
      <img
        className="absolute w-32 h-auto pt-8 pl-4 ml-[2rem] z-40"
        src={Logo}
        alt="Logo"
      />

      <div className="ml-[3rem] relative z-30">
        {/* Title Section */}
        <div className="absolute left-[7.8rem] top-[18rem] flex justify-start items-end gap-3 z-20">
          <div className="w-2 h-10 bg-[#fa6868]" />
          <h1 className="text-[#212020] text-5xl font-semibold font-['Inter']">
            Nagaland Winter Package
          </h1>
        </div>

        {/* Main Image */}
        <div className="absolute w-[43.7rem] h-[32rem] left-[7.1rem] top-[22.8rem] z-20">
          <img
            className="w-full h-full absolute rounded-[2rem]"
            src={sixthPkgImg[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>

        {/* Booking Section */}
        <div className="absolute w-[27.8rem]  left-[53.9rem] top-[26.2rem] z-20">
          <div className="bg-[#f8f7e4] h-[17.6rem] rounded-[0.6rem] border border-[#dedddd] shadow-lg relative p-4">
            <h2 className="left-[2.7rem] top-[2.8rem] absolute text-[#f45d22] text-base font-normal font-['Inter']">
              Starting from
            </h2>
            <div className="left-[8.6rem] top-[2.8rem] absolute text-[#383838] text-base font-normal font-['Inter'] line-through">
              INR 66,999
            </div>
            <div className="left-[2.7rem] top-[4.7rem] absolute text-[#2e2e2e] text-5xl font-black font-sans">
              INR 45,999
            </div>
            <div className="left-[19rem] top-[6rem] absolute text-[#f45d22] text-base font-semibold font-['Inter']">
              per person
            </div>

            <div className="absolute left-[2.7rem] top-[9.3rem] bg-[#ffecca] w-[9rem] h-[2.6rem]">
              <h2 className="absolute pl-[2.3rem] pt-[0.5rem] text-[#fea500] text-[1.1rem] font-bold font-['Inter'] text-nowrap">
                26% Off
              </h2>
            </div>

            <div className="absolute left-[13rem] top-[9.3rem] bg-[#ffecca] w-[9rem] h-[2.6rem]">
            <FaHandHoldingUsd className="ml-[0.6rem] mt-[0.6rem] absolute text-[1.6rem] text-[#06b606]"/>
            <h1 className="ml-[2.6rem] mt-[0.6rem] text-[#fea500]  absolute font-bold">No Cost EMI</h1>
            </div>

            <button
              className="w-full h-12 bg-[#f87943] rounded-[0.6rem] flex items-center justify-center mt-[12rem]"
              onClick={() => navigate("/Packages/Nagaland/Nagaland Winter Package")}
            >
              <h1 className="text-white text-2xl font-black font-['Inter']">
                Book Now
              </h1>
            </button>
          </div>
        </div>

        {/* Day & Location */}
        <div className="w-[27.8rem] h-[7.0rem] left-[53.9rem] top-[45.4rem] absolute">
          <div className="w-[27.8rem] h-[7.0rem] left-0 top-0 absolute bg-[#f9f9f9] rounded-[0.6rem] border border-[#c6bebe]" />
          <h1 className="left-[3.3rem] top-[1rem] absolute text-black text-2xl font-bold font-['Inter']">
            Duration:
          </h1>
          <h1 className="left-[10rem] top-[1.0rem] absolute text-[#ff4c00] text-2xl font-medium font-['Inter']">
            9 days & 8 nights
          </h1>
          <h1 className="left-[3.3rem] top-[3.7rem] absolute text-black text-2xl font-bold font-['Inter']">
            Destination:
          </h1>
          <h1 className="left-[11.5rem] top-[3.8rem] absolute text-[#ff4c00] text-2xl font-medium font-['Inter']">
            Nagaland
          </h1>
          <img
            className="w-8 h-8 left-[1.0rem] top-[3.5rem] absolute"
            src={Pkgimg[1]}
          />
          <h1 className="left-[1rem] top-[1rem] absolute text-black text-[1.5rem] font-normal font-['Inter']">
            🕐
          </h1>
        </div>

        {/* About Section */}
        <div className="w-[74.6rem] h-[17.6rem] left-[7.6rem] top-[64.3rem] absolute">
          <div className="w-[74.6rem] h-[17.6rem] left-0 top-0 absolute bg-[#f2f1f1] rounded-[1.2rem] border border-[#c2c2c2]" />
          <h1 className=" left-[2.5rem] top-[7.375rem] absolute text-black text-2xl font-light font-['Inter'] leading-[2.1rem] tracking-wide">
            Explore North-East vacation packages are the best option if you want
            a memorable North East trip. Over 48 tour packages to the North East
            are available, all with unbeatable discounts and deals. Discover the
            top North East tourist attractions with the assortment of
            experiential tours and activities offered by Explore North-East tour
            packages. Book now!
          </h1>
          <div className="p-2.5 left-[1.9rem] top-[1.6rem] absolute justify-center items-center gap-2.5 inline-flex">
            <h1 className="text-black text-5xl font-bold font-['Inter']">
              About Our Site
            </h1>
          </div>
          <div className="w-[0.9rem] h-[4.6rem] left-0 top-[1.7rem] absolute bg-[#f45d22]" />
        </div>

        <div className="w-[74.6rem] h-[37rem] left-[7.6rem] top-[85.0rem] absolute">
          <div className="w-[74.6rem] h-[37rem] left-0 top-0 absolute bg-[#f2f1f1] rounded-[1.2rem] border border-[#c2c2c2]" />
          <div className="mt-4 left-[1.9rem] top-[1.6rem] absolute justify-center items-center gap-[2.5rem] inline-flex">
            <h1 className="text-black text-5xl font-bold font-['Inter']">
              Nagaland Winter Package
            </h1>
          </div>
          <div className="w-[0.9rem] h-[4.6rem] left-0 top-[1.7rem] absolute bg-[#f45d22]" />
          <img
            className="w-[4.5rem] h-[4.4rem] left-[1.2rem] top-[8rem] absolute"
            src={Pkgimg[0]}
          />
          <img
            className="w-[4.5rem] h-[4.4rem] left-[1.2rem] top-[15.0rem] absolute"
            src={Pkgimg[0]}
          />
          <img
            className="w-[4.5rem] h-[4.4rem] left-[1.2rem] top-[22.1rem] absolute"
            src={Pkgimg[0]}
          />
          <img
            className="w-[4.5rem] h-[4.4rem] left-[1.2rem] top-[28.6rem] absolute"
            src={Pkgimg[0]}
          />
          <h1 className=" left-[5.8rem] top-[8.9rem] absolute text-black text-2xl font-normal font-['Inter'] leading-[2.3rem] tracking-wide">
            Dzukou valley is best visited during Monsoon and Winter.
          </h1>
          <h1 className="left-[5.8rem] top-[16rem] absolute text-black text-2xl font-normal font-['Inter'] leading-[2.3rem] tracking-wide">
            Visit Pfutsero the coldest place in Nagaland during the winter.
          </h1>
          <h1 className=" left-[5.8rem] top-[23rem] absolute text-black text-2xl font-normal font-['Inter'] leading-[2.3rem] tracking-wide">
            This cultural festival is held in the first week of December and
            showcases the traditions and culture of the various tribes of
            Nagaland.
          </h1>
          <h1 className=" left-[5.8rem] top-[29.7rem] absolute text-black text-2xl font-normal font-['Inter'] leading-[2.3rem] tracking-wide">
            The winter season is a good time to explore the region and
            experience its cultural richness.
          </h1>
        </div>
      </div>
      {/* Footer */}
      <div className="relative z-10">
        <PkgDetailFooter />
      </div>
    </div>
  );
}

export default WinterPackage;
