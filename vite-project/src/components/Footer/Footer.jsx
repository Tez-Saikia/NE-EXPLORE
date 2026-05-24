import React, { useEffect } from "react";
import FImg from "./FooterImg";
import "./Footer.css";
import "aos/dist/aos.css";
import Aos from "aos";
import FooterMain from "./FooterMain";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <img
        className="absolute mt-[202rem] w-full"
        src={FImg.FooterImg}
        alt=""
      />
      <img
        className="absolute h-[25rem] left-28 mt-[217rem] shadow-[1px_3px_18px_black]"
        src={FImg.Tribe}
        alt=""
      />
      <img
        className="absolute h-[16rem] left-[25rem] mt-[234rem] "
        src={FImg.Map}
        alt=""
      />

      <div className="relative z-[999] top-[217.6rem] left-[61.5rem] w-[30rem] p-4 border border-none shadow-lg bg-blue-600 ">
        <h1 className="text-[3.25rem] font-extrabold text-white font-sans text-center underline">
          North East
        </h1>{" "}
        <br />
        <h2 className="text-lg font-light text-white font-sans text-center">
          The eight states of North East India are blessed with scenic natural
          beauty, salubrious weather, rich biodiversity, rare wild life,
          historical sites, distinct cultural and ethnic heritage and warm and
          welcoming people. North-Eastern India consists of Arunachal Pradesh,
          Assam, Manipur, Meghalaya, Mizoram, Nagaland, Tripura - often called
          “The Seven Sisters”, and Sikkim - referred to as the “Brother” to the
          seven states.
        </h2>
      </div>

      <img
        className="absolute w-full h-[113rem] t-[100rem] mt-[237rem]"
        src={FImg.FooterImg2}
        alt=""
      />

      <h1
        className="absolute left-[34rem] mt-[248rem] text-[2rem] font-sans text-nowrap
   text-black font-semibold"
      >
        About <strong className="text-orange-500">North East Tourism</strong>
      </h1>

      <div className="mt-[24rem] ml-[-28rem]">
        <div className="relative z-[999] top-[228.9rem] w-[10rem] left-[63.5rem] flex-1 border-t border-black"></div>
        <img
          className="absolute left-[45rem] mt-[228rem]"
          src={FImg.FooterAbout}
          alt=""
        />
        <div className="relative z-[999] top-[228.8rem] w-[10rem] left-[76.6rem] flex-1 border-t border-black"></div>
      </div>
      <h1 className="relative z-[999] top-[232.6rem] w-[48rem] text-center left-[22.5rem] text-black text-lg">
        North East India ,Seven sister states ,Unexplored Slice of Paradise and
        we have many more name for this tourism Destination. North east india is
        destinations who loves wildlife tours , adventure tours ,who want to see
        Snowy Mountains,Want to Explore the best falls . North east tourism has
        many more thing to explore.north east india is also Sharing borders with
        Myanmar Bhutan, Tibet, and Bangladesh as well, the North east seven
        sister are Known for natural beauty, and for tribal cultures, climates,
        landscapes and peoples & North East Tourism is only place for you who
        can show you the Real north east. if you want a little rest and
        relaxation while your honeymoon your suggested destination north east
        seven sisters.& road tours is a suggested way for north east tour
        packages.
      </h1>

      {/* Footer Horizontal line */}
      <div className="w-full border-t border-[#e1e1e1] relative top-[247rem]"></div>

      <h1 className="relative z-[999] top-[250rem] text-[4.4rem] text-center text-blue-800 ubuntu-bold">
        Our Latest Articles
      </h1>

      {/* Article Imgs */}
      <div
        data-aos="fade-up"
        className="absolute z-[999] border border-transparent bg-[#c2dfff] w-[28rem] left-[4rem] h-[35rem] shadow-lg rounded-md top-[396rem]"
      >
        <img
          className="absolute left-[3.5rem] w-[21rem] h-[20rem] top-8 rounded-3xl"
          src={FImg.Article1}
          alt=""
        />
        <h1 className="text-center pt-[25rem] text-[1.1rem] font-sans font-semibold text-[dimgrey]">
          The culture of north-eastern states is characterized by the diverse
          ethnic groups settled in the region. Each tribe has its own distinct
          custom, cuisine, attire and dialect.
        </h1>
      </div>

      <div
        data-aos="fade-up"
        className="absolute z-[999] border border-transparent bg-[#f5fcd5] w-[28rem] left-[34rem] h-[35rem] shadow-lg rounded-md top-[396rem]"
      >
        <img
          className="absolute left-[3.5rem] w-[21rem] h-[20rem] top-8 rounded-3xl"
          src={FImg.Article2}
          alt=""
        />
        <h1 className="text-center pt-[25rem] text-[1.1rem] font-sans font-semibold text-orange-500">
          North East Indian food is known for its meat dishes, which are made
          with a variety of proteins and local ingredients. Each state has its
          own unique flavors and preparations.
        </h1>
      </div>

      <div
        data-aos="fade-up"
        className="absolute z-[999] border border-transparent bg-[#e8d5fc] w-[28rem] left-[64rem] h-[35rem] shadow-lg rounded-md top-[396rem]"
      >
        <img
          className="absolute left-[3.5rem] w-[21rem] h-[20rem] top-8 rounded-3xl"
          src={FImg.Article3}
          alt=""
        />
        <h1 className="text-center pt-[25rem] text-[1.1rem] font-sans font-semibold text-[#191919]">
          The festivals of North-East India highlight the rich cultural heritage
          of the region. These celebrations are deeply rooted in agriculture,
          Buddhism, and the marking of the New Year.{" "}
        </h1>
      </div>

      {/* Footer Main */}
      <FooterMain/>  
    </div>
  );
}

export default Footer;
