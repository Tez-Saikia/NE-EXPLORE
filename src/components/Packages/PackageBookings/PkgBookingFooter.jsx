import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Logo from "@/assets/logo.png"
import { Link } from "react-router-dom";

function PkgBookingFooter() {
    return (
        <div className="absolute mt-[97rem] w-full py-16 px-8  h-[30rem] z-[999] bg-custom-gradient">
          {/* Logo and Heading Section  */}
          <img className="w-24 ml-16" src={Logo} alt="" />
          <h1 className="text-nowrap mt-[-4rem] ml-[12.5rem] text-[1.8rem] italic font-bold nunito text-white">
            <strong>Unexplore The Incredible North East</strong>
          </h1>
          {/* Email Input Section */}
          <div className="relative mt-[4rem] w-[31rem] h-[4rem] ml-[12rem]">
            <input
              className="w-full h-full pl-[2rem] pr-[3rem] rounded-[2rem] mt-[-1rem] outline-none placeholder-blue-600"
              type="email"
              placeholder="Your e-mail address..."
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-[3.2rem] h-[3.2rem] mt-[-1rem] bg-orange-600 rounded-full flex items-center justify-center cursor-pointer">
              <span className="text-[2.1rem] pb-[0.3rem] text-white">→</span>
            </div>
          </div>
    
          {/* Contact Information Section */}
          <div className="mt-[1rem] ml-[12.5rem]">
            <h1 className=" text-[1.8rem] italic font-semibold nunito text-white">
              {" "}
              <strong>Get In Touch:</strong>
            </h1>
            <h2 className="text-[1rem] pt-[1rem] italic font-light nunito text-white">
              {" "}
              PHONE NO - 01204168800,7701904095{" "}
            </h2>
            <h2 className="text-[1rem] pt-[1rem] italic font-light nunito text-white">
              {" "}
              Email - info@northeasttourism.in{" "}
            </h2>
            <h2 className="text-[1rem] pt-[1rem] italic font-light nunito text-white">
              {" "}
              Address - Oakland Road, near Cbi Office, Shillong, Meghalaya 793001{" "}
            </h2>
          </div>
    
          {/* Footer Bottom Section (Socials and Legal Notice)  */}
          <h1 className="ml-[59rem] mt-[-22rem] text-[1.6rem] italic font-bold font-sans text-white">
              Land of the Seven Sisters and One Brother
            </h1>
    
          {/* Social Media Icons  */}
          <div className=" mt-[4rem] flex items-center justify-center ml-[52rem] gap-20 cursor-pointer">
              <div className="p-2 border border-white rounded-full ">
                <FaFacebookF className="text-white text-3xl" />
              </div>
              <div className="p-2 border border-white rounded-full">
                <FaInstagram className="text-white text-3xl" />
              </div>
              <div className="p-2 border border-white rounded-full">
                <FaTwitter className="text-white text-3xl" />
              </div>
            </div>
    
          {/* Legal Notices Section */}
          <span className="border-[1px] border-white h-[16rem] absolute ml-[72rem] mt-[-9rem] rotate-[90deg]"></span>
        <Link to={"/Terms & Conditions"} target='_blank'>
          <h1 className="text-[1.3rem] text-white italic font-light font-sans ml-[67rem] mt-[4rem]">
            Terms & Conditions
          </h1>
          </Link>  
          <span className="border-[1px] border-white h-[16rem] absolute ml-[72rem] mt-[-6rem] rotate-[90deg]"></span>
          <Link to={"/Privacy & Policy"} target='_blank'>
          <h1 className="text-[1.3rem] text-white italic font-light font-sans ml-[68.4rem] mt-[3rem]">
            Privacy policy
          </h1>
          </Link>
          <span className="border-[1px] border-white h-[16rem] absolute ml-[72rem] mt-[-6rem] rotate-[90deg]"></span>
      </div>
      );
}

export default PkgBookingFooter