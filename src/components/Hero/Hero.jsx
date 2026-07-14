import Header from "../Header/Header";
import video from "../../assets/Northeast-vdo.mp4";
import { useRef } from "react";
import "../Font.css";
import Cards from "./Cards";
import Footer from "../Footer/Footer";

const Hero = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative w-full h-screen">
      {/* Fixed video container */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <Header />

      <div>
        <h2 className="absolute top-52 left-[28rem] text-4xl font-bold text-white unlock-regular italic">
          Explore, the
        </h2>
        <h1 className="nunito-sans absolute top-64 left-[16rem] font-extrabold text-white text-9xl">
          {" "}
          INCREDIBLE
        </h1>
        <div className=" w-[10rem] border-[0.5rem] border-white absolute bottom-[22.6rem] left-[77rem] skew-y-12 rotate-[-12deg]"></div>
        <div className="nunito-sans absolute top-[25rem] ml-[31rem] font-extrabold text-white text-9xl">
          NORTHEAST
        </div>
      </div>

      {/* Scrollable content container */}
      <div
        ref={scrollContainerRef}
        className="relative w-full h-full  pt-[100vh]"
      >
        {/* Card Section */}
        <Cards />
        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
