import React, { useState, useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "../Font.css";
import { Link } from "react-router-dom";

function ContactNav() {
  const { user,isSignedIn } = useUser();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Hide navbar when scrolling down
        setIsVisible(false);
      } else {
        // Show navbar when scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-12 right-12 z-20 text-white text-xl kanit-thin p-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Navigation items and User button with blur background */}
      <ul className="flex items-center gap-8 backdrop-blur-md backdrop-filter bg-opacity-50 bg-white/10 p-2 rounded-lg">
        <Link to={"/"}>
          <li className="menu-item relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-width after:duration-300 hover:after:w-full">
            HOME
          </li>
        </Link>

        <Link to={"/Explore"}>
          <li className="menu-item relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-width after:duration-300 hover:after:w-full">
            EXPLORE
          </li>
        </Link>

        <Link to={"/Contact"}>
          <li className="menu-item relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-width after:duration-300 hover:after:w-full">
            CONTACT
          </li>
        </Link>

        {/* SignIn/SignOut Button */}
        <li className="flex items-center menu-item relative cursor-pointer">
          <div>
            <SignedOut>
              <SignInButton>
                <span>SIGN IN</span>
              </SignInButton>
            </SignedOut>
            <SignedIn>{isSignedIn && <UserButton />}</SignedIn>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactNav;
