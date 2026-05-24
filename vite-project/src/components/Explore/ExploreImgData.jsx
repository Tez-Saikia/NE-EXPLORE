import React from "react";
import Nav from "../Header/Nav";
import NeImgs from "./Imgs";
import Logo from "../../assets/Logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function ExploreImgData() {
  return (
    <div>
      <Nav />

      <img className="absolute w-32 h-auto pt-8 pl-4 z-30" src={Logo} />

      <div>
        <Carousel>
          <CarouselContent>
            {NeImgs.map((img, index) => (
              <CarouselItem key={index}>
                <img src={img} alt="" className="w-full h-[44rem] object-cover" />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-opacity ${
              NeImgs.length === 1
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          />
          <CarouselNext
            className={`absolute top-1/2 right-4 transform -translate-y-1/2 transition-opacity ${
              NeImgs.length === 1
                ? "opacity-0 pointer-events-none"
                : "opacity-100"
            }`}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default ExploreImgData;
