import React from 'react'
import { useRef } from "react";
import VDOS from "../../vdos/index";
import Logo from "@/assets/logo.png"
import PkgImg from "../../images";
import PkgFooter from "../../PkgFooter";
import "./Tripura.css"
import TripuraData from './TripuraData';

function Tripura() {
    const scrollContainerRef = useRef(null);
  return (
    <div className="relative w-full h-screen">
    <video
      className="fixed inset-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
    >
      <source src={VDOS[7]} type="video/mp4" />
    </video>
    <img
      className="absolute w-32 h-auto pt-8 pl-4 z-30"
      src={Logo}
      alt="Logo"
    />

    <div className="z-40 relative  top-[10rem]  text-[2rem]">
      <h1 className="text-white absolute font-semibold ml-[36rem]">
        Get Up To <span className="text-yellow-500">40% Off </span> on
      </h1>
      <h1 className="text-white absolute  font-sans text-[3rem] font-extrabold ml-[28rem] mt-[3rem]">
        <span className="text-yellow-500">Tripura</span> Tour Packages!
      </h1>
      <div className="absolute mt-[8rem] ml-[10rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient"></div>
      <h2 className="text-white absolute  font-sans text-[1.4rem] font-light ml-[36rem] mt-[9rem]">
        Starting at <strong className="font-extrabold">INR 8,250</strong>{" "}
        <span className="line-through">INR 16,500</span>
      </h2>
      <button className="text-white absolute  font-sans text-[1.2rem] font-thin ml-[41rem] mt-[14rem] bg-orange-500 px-4 py-2 rounded-[3rem] hover:bg-orange-600">
        Click For Details
      </button>
    </div>

    <div
      ref={scrollContainerRef}
      className="relative w-full h-full z-10 pt-[100vh]"
    >
      <div className="relative">
        <img
          className="w-full h-[47rem]"
          src={PkgImg.WhiteBg}
          alt="Nagaland"
        />
        <div className="relative">
          <div className="absolute top-[-44rem] left-[13rem] w-[68rem] bg-blue-100 p-4 rounded-[1rem]">
            <h1 className="text-[1.5rem] font-bold font-[math] text-[#555555]">
            Tripura Tour Packages | Upto 40% Off
            </h1>
            <h1 className="text-[1rem] font-sans text-[#555555] mt-2">
            Tripura Holiday Packages - Embark on a beautiful journey filled with nature, history and tranquillity to Tripura with Tour My India. This state in North East India is indeed a travellers' heaven with numerous paradisiacal attractions in its fold.
            </h1>
          </div>
        </div>
      </div>

      <div className="relative w-full h-screen">
        <img
          className="w-full h-[127rem]"
          src={PkgImg.WhiteBg}
          alt="Nagaland"
        />

        <div className="relative">
          <div className="absolute mt-[-159rem] ml-[10rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>
          <img
            className="absolute mt-[-156rem] w-[65rem] ml-[15rem] h-[15rem] rounded-[1rem]"
            src={PkgImg.Banner}
            alt="Nagaland Image"
          />

          <h1 className="z-[99] absolute mt-[-152rem] ml-[18rem] text-[2.4rem] font-sans font-extrabold text-white">
            Get special offers up to 50% Off!
          </h1>

          <h2 className="z-[99] absolute mt-[-148rem] ml-[18rem] text-[1rem] font-sans font-semibold text-white">
            We create unforgettable adventures, customised for your group.
          </h2>

          <div className="z-[99] w-[8rem] h-[3rem] absolute mt-[-146rem] ml-[27rem] border-[1px] bg-white pt-[0.5rem] rounded-[0.3rem] cursor-pointer">
            <h1 className="text-[#d38800] font-medium text-[1.3rem] text-nowrap text-center">
              Book Now
            </h1>
          </div>

          <div className="absolute mt-[-138rem] ml-[10rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>
        </div>
      </div>
    </div>
    <h1 className="absolute z-[999] mt-[42rem] ml-[13rem] text-[1.5rem] font-sans font-bold text-gray-900">
    Tripura Package
    </h1>
    <h1 className="absolute z-[999] mt-[45rem] ml-[13rem] text-[1rem] font-sans text-gray-600">
      Let's Explore Tripura
    </h1>

    <TripuraData />

    <div className="absolute mt-[-3rem] z-[99] ml-[13rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>

    <div className="absolute mt-[1rem] z-[99] ml-[45rem] ">
      <h1 className="font-sans font-bold ml-[-3rem] text-[1.5rem] text-gray-600">
        Our Partners
      </h1>
      <div className="flex gap-16 ml-[-18rem] mt-8">
        <img className="mt-[0.8rem] h-12" src={PkgImg.hotel1} alt="" />
        <img className=" mt-[0.8rem] h-12" src={PkgImg.hotel2} alt="" />
        <img className=" mt-[0.8rem] h-12" src={PkgImg.hotel3} alt="" />
        <img className="h-20" src={PkgImg.hotel4} alt="" />
        <img className="h-20" src={PkgImg.hotel5} alt="" />
        <img className=" mt-[0.8rem] h-12" src={PkgImg.hotel6} alt="" />
      </div>
    </div>

    <div className="absolute mt-[13rem] z-[99] ml-[13rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>

    <div className="z-[999] absolute top-[156rem] left-[7rem]">
      <h1 className="-mt-16 absolute ml-6 font-sans font-bold text-xl text-[#434242]">
        Popular Tripura Attractions:
      </h1>
      <img className="w-[37rem] h-[24rem] rounded-[29px]" src={PkgImg.tripura} alt="" />
      <h1 className="mt-[-10.75rem] absolute ml-[2.75rem] font-sans font-bold text-xl text-white">
      Neermahal Water Palace
      </h1>
      <span className="border-[1px] border-orange-600 mt-[-14.4rem] absolute ml-[9rem] z-[999] h-[13rem] rotate-[90deg]"></span>
      <h1 className="mt-[-7rem] absolute ml-[2.75rem] font-sans text-[1rem] text-white">
        {" "}
        Neermahal literally means Water Palace. The place is a picturesque fairytale Royal mansion located in the middle of the Rudrasagar Lake which is 53 km South of Agartala. 
      </h1>

      <img
        className="absolute h-[11rem] w-[18rem] ml-[63rem] mt-[-22rem] rounded-[1.5rem] z-[99]"
        src={PkgImg.tripura1}
        alt=""
      />
      <img
        className="absolute h-[11rem] w-[18rem] ml-[63rem] mt-[-10rem] rounded-[1.5rem] z-[99]"
        src={PkgImg.tripura2}
        alt=""
      />
    </div>
    <div className="absolute mt-[48rem] z-[99] ml-[13rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>

    {/* footer */}
    <PkgFooter />
  </div>
  )
}

export default Tripura