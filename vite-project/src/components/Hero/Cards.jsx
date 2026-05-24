import React, { useEffect, useRef, useState } from "react";
import Images from "@/CardsImages";
import "./Cards.css";
import Circle from "../../assets/Circle.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";

function Cards() {
  const lineRef = useRef(null); // Reference for the vertical line
  const spanRefNagaland = useRef(null);
  const spanRefSikkim = useRef(null);
  const spanRefMeghalaya = useRef(null);
  const spanRefManipur = useRef(null);
  const spanRefMizoram = useRef(null);
  const spanrefArunachal = useRef(null);
  const spanRefAssam = useRef(null);
  const spanRefTripura = useRef(null);
  const lastScrollY = useRef(0); 
  const [isDrawn, setIsDrawn] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const maxHeight = 258 * 16; 
  const maxWidth = "100%";

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 0 && !hasAnimated) {
        setHasAnimated(true);
      }

      if (scrollPosition > lastScrollY.current && !isDrawn) {
        if (lineRef.current) {
          lineRef.current.style.height = `${maxHeight}px`;
        }

        if (spanRefNagaland.current) {
          spanRefNagaland.current.style.width = maxWidth;
        }

        if (spanRefSikkim.current) {
          spanRefSikkim.current.style.width = maxWidth;
        }

        if (spanRefMeghalaya.current) {
          spanRefMeghalaya.current.style.width = maxWidth;
        }

        if (spanRefManipur.current) {
          spanRefManipur.current.style.width = maxWidth;
        }

        if (spanRefMizoram.current) {
          spanRefMizoram.current.style.width = maxWidth;
        }

        if (spanrefArunachal.current) {
          spanrefArunachal.current.style.width = maxWidth;
        }

        if (spanRefAssam.current) {
          spanRefAssam.current.style.width = maxWidth;
        }

        if (spanRefTripura.current) {
          spanRefTripura.current.style.width = maxWidth;
        }

        setIsDrawn(true);
        setHasAnimated(true);
        Aos.refresh();
      }

      lastScrollY.current = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDrawn, hasAnimated]);

  return (
    <div className="relative mt-[26rem] ]">
      <div
        data-aos="fade-up"
        className="absolute top-[-70.7rem] left-[45.9rem] cursor-default fade-in-element"
      >
        <img className="h-36" src={Circle} alt="" />
      </div>

      <div
        ref={lineRef}
        className="fade-in-border border z-[50] border-white absolute top-[-65rem] left-[49rem] cursor-default"
        style={{
          width: "0px",
          height: "0px",
          transition: "height 6s 1s ease-out",
        }} 
      ></div>

      <Link to={"/Packages/Nagaland"} target="_blank">
        <div className="absolute left-[16rem] bottom-[31rem] cursor-pointer">
          <span
            ref={spanRefNagaland}
            className=" top-52 absolute right-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%", 
              transition: "width 3s ease-out",
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white z-[50] top-[10rem] absolute left-[4rem] text-[2.5rem] font-mono font-extrabold"
            >
              Nagaland
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white z-[50] top-[14rem] absolute left-[4.7rem] text-base underline font-mono"
            >
              Land Of Festivals
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[19rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Ngl}
              alt="Nagaland"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Sikkim"} target="_blank">
        <div className="absolute left-[63rem] bottom-[2rem] cursor-pointer">
          <span
            ref={spanRefSikkim}
            className="top-52 absolute left-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%", 
              transition: "width 4s ease-out", 
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[5rem] text-[2.5rem] font-mono font-extrabold z-[50]"
            >
              Sikkim
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[5.4rem] text-base underline font-mono z-[50]"
            >
              Valley of Rice
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[19rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Skm}
              alt="Sikkim"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Meghalaya"} target="_blank">
        <div className="absolute left-[16rem] bottom-[-28rem] cursor-pointer">
          <span
            ref={spanRefMeghalaya} 
            className="top-52 absolute right-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%",
              transition: "width 5.5s ease-out", 
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[3rem] text-[2.5rem] font-mono font-extrabold z-[50]"
            >
              Meghalaya
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[4rem] text-base underline font-mono z-[50]"
            >
              Scotland of the East
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[19rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Mgl}
              alt="Meghalaya"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Manipur"} target="_blank">
        <div className="absolute left-[63rem] top-[34rem] cursor-pointer">
          <span
            ref={spanRefManipur}
            n
            className="top-52 absolute left-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%",
              transition: "width 6.8s ease-out",
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[5rem] text-[2.5rem] font-mono font-extrabold z-[50]"
            >
              Manipur
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[5rem] text-base underline font-mono z-[50]"
            >
              The Jewel of India
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[19rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Mnpr}
              alt="Manipur"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Mizoram"} target="_blank">
        <div className="absolute left-[16rem] top-[65rem] cursor-pointer">
          <span
            ref={spanRefMizoram}
            className="top-52 absolute right-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%", // Start with a width of 0
              transition: "width 7.9s ease-out", // Transition duration for width
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[5rem] text-[2.5rem] font-mono font-extrabold z-[50]"
            >
              Mizoram
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[6rem] text-base underline font-mono z-[50]"
            >
              Land of Hills
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[19rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Mizr}
              alt="Mizoram"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Arunachal"} target="_blank">
        <div className="absolute left-[63rem] top-[96rem] cursor-pointer">
          <span
            ref={spanrefArunachal}
            n
            className="top-52 absolute left-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%",
              transition: "width 9s ease-out",
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[0.7rem] text-[2rem] text-nowrap font-mono font-extrabold z-[50]"
            >
              Arunachal Pradesh
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[1.7rem] text-base underline text-nowrap font-mono z-[50]"
            >
              Land of the Dawn-lit-Mountains
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[20rem] h-[26rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Ap}
              alt="Arunachal Pradesh"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Assam"} target="_blank">
        <div className="absolute left-[15rem] top-[130rem] cursor-pointer">
          <span
            ref={spanRefAssam}
            className="top-52 absolute right-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%", // Start with a width of 0
              transition: "width 11s ease-out", // Transition duration for width
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[5.8rem] text-[3rem] text-nowrap font-mono font-extrabold z-[50]"
            >
              Assam
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[1.3rem] text-base underline text-nowrap font-mono z-[50]"
            >
              Land of Blue Hills and Red River
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[20rem] h-[26rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Asm}
              alt="Assam"
            />
          </div>
        </div>
      </Link>

      <Link to={"/Packages/Tripura"} target="_blank">
        <div className="absolute left-[63rem] top-[161rem] cursor-pointer">
          <span
            ref={spanRefTripura}
            n
            className="top-52 absolute left-[-14rem] border border-white fade-in-section cursor-default"
            style={{
              width: "0%",
              transition: "width 12s ease-out",
            }}
          ></span>

          <div className="group transition-transform duration-300 ease-in-out transform">
            <h1
              data-aos="zoom-in"
              className="text-white top-[10rem] absolute left-[4.4rem] text-[3rem] text-nowrap font-mono font-extrabold z-[50]"
            >
              Tripura
            </h1>
            <h2
              data-aos="zoom-in"
              className="text-white top-[14rem] absolute left-[6.8rem] text-base underline text-nowrap font-mono z-[50]"
            >
              Hill Tippera
            </h2>
            <img
              data-aos="zoom-in"
              className="w-[20rem] h-[26rem] rounded-[2rem] transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              src={Images.Trip}
              alt="Tripura"
            />
          </div>
        </div>
      </Link>

      <span
        data-aos="zoom-in"
        className="absolute top-[192.6rem] left-[48.1rem] text-[1.4rem] cursor-default"
      >
        🔵
      </span>
    </div>
  );
}

export default Cards;
