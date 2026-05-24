import React from "react";
import { useRef } from "react";
import VDOS from "../../vdos/index";
import Logo from "../../../../assets/Logo.png";
import "./Nagaland.css";
import PkgImg from "../../images/index";
import NglData from "./NglData";
import PkgFooter from "../../PkgFooter"


function Nagaland() {
  const scrollContainerRef = useRef(null);
  return (
    <div className="relative w-full h-screen">
      <video
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={VDOS[0]} type="video/mp4" /> 
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
        <h1 className="text-white absolute  font-sans text-[3rem] font-extrabold ml-[27rem] mt-[3rem]">
          <span className="text-yellow-500">Nagaland</span> Tour Packages!
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
          <img className="w-full h-[50rem]" src={PkgImg.WhiteBg} alt="Nagaland" />
          <div className="relative">
            <div className="absolute top-[-44rem] left-[13rem] w-[68rem] bg-blue-100 p-4 rounded-[1rem]">
              <h1 className="text-[1.5rem] font-bold font-[math] text-[#555555]">
                Nagaland Tour Packages | Upto 40% Off
              </h1>
              <h1 className="text-[1rem] font-sans text-[#555555] mt-2">
                Nagaland Holiday Packages - Browse through a wide range of
                Nagaland packages. Book customized Nagaland tour packages with
                exciting deals & offers. Discover the enchanting beauty of
                Nagaland, this place is a gem in the Seven Sister States which
                is renowned for its vibrant tribal culture, lush landscapes,
                distinct culinary scene, and unique traditions.
              </h1>
            </div>
          </div>
        </div>

        <div className="relative w-full h-screen">
          <img className="w-full h-[140rem]" src={PkgImg.WhiteBg} alt="Nagaland" />

          <div className="relative">
            <div className="absolute mt-[-172rem] ml-[10rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>
            <img
              className="absolute mt-[-169rem] w-[65rem] ml-[15rem] h-[15rem] rounded-[1rem]"
              src={PkgImg.Banner}
              alt="Nagaland Image"
            />

            <h1 className="z-[99] absolute mt-[-166rem] ml-[18rem] text-[2.4rem] font-sans font-extrabold text-white">Get special offers up to 50% Off!</h1>

            <h2 className="z-[99] absolute mt-[-162rem] ml-[18rem] text-[1rem] font-sans font-semibold text-white">We create unforgettable adventures, customised for your group.</h2>

            <div className="z-[99] w-[8rem] h-[3rem] absolute mt-[-159rem] ml-[27rem] border-[1px] bg-white pt-[0.5rem] rounded-[0.3rem] cursor-pointer">
              <h1 className="text-[#d38800] font-medium text-[1.3rem] text-nowrap text-center">Book Now</h1>
            </div>

            <div className="absolute mt-[-151rem] ml-[10rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>
          </div>
        </div>
      </div>
      <h1 className="absolute z-[999] mt-[42rem] ml-[13rem] text-[1.5rem] font-sans font-bold text-gray-900">
        Nagaland Package
      </h1>
      <h1 className="absolute z-[999] mt-[45rem] ml-[13rem] text-[1rem] font-sans text-gray-600">
        Let's Explore Nagaland
      </h1>

      <NglData />

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

      <div className="z-[999] absolute top-[192rem] left-[7rem]">
        <h1 className="-mt-16 absolute ml-6 font-sans font-bold text-xl text-[#434242]">
          Popular Nagaland Attractions:
        </h1>
        <img className="w-[36rem] rounded-[29px]" src={PkgImg.Ngl} alt="" />
        <h1 className="mt-[-9.75rem] absolute ml-[2.75rem] font-sans font-bold text-xl text-white">Dzükou Valley</h1>
        <span className="border-[1px] border-orange-600 mt-[-13.4rem] absolute ml-[9rem] z-[999] h-[13rem] rotate-[90deg]"></span>
        <h1 className="mt-[-6rem] absolute ml-[2.75rem] font-sans text-[1rem] text-white"> Dzukou Valley is most famous for its multicolored carpets of flowers that bloom in summer, most notably the Dzukou lily which is found only in this Valley.</h1>

        <img className="absolute h-[11rem] w-[18rem] ml-[63rem] mt-[-22rem] rounded-[1.5rem] z-[99]" src={PkgImg.Ngl1} alt="" />
        <img className="absolute h-[12rem] w-[18rem] ml-[63rem] mt-[-10rem] rounded-[1.5rem] z-[99]" src={PkgImg.Ngl2} alt="" />

      </div>
      <div className="absolute mt-[48rem] z-[99] ml-[13rem] flex items-center my-4 min-h-[1px] min-w-[1080px] custom-gradient2"></div>

      {/* footer */}
     <PkgFooter/>

    </div>
  );
}

export default Nagaland;
