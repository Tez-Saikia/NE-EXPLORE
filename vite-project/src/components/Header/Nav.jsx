import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import "../Font.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";

function Nav() {
  const { user, isSignedIn } = useUser();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasLoggedInBefore, setHasLoggedInBefore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 50));

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const loggedInBefore = localStorage.getItem("hasLoggedInBefore");

    if (loggedInBefore) {
      setHasLoggedInBefore(true);
    }
  }, []);

  useEffect(() => {
    if (isSignedIn && user) {
      localStorage.setItem("hasLoggedInBefore", "true");
      setHasLoggedInBefore(true);

      saveUser();
    }
  }, [isSignedIn, user]);

  const saveUser = async () => {
    try {
      await setDoc(
        doc(db, "users", user.id),
        {
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          image: user.imageUrl,
        },
        { merge: true },
      );

      console.log("User Saved");
    } catch (error) {
      console.log(error);
    }
  };

  const navItem =
    "relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:transition-all after:duration-300";

  return (
    <nav
      className={`fixed top-6 sm:top-12 right-6 sm:right-12 z-[10000] text-white text-base sm:text-xl kanit-thin p-4 transition-all duration-300 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 backdrop-blur-md bg-opacity-50 bg-white/10 p-4 rounded-lg">
        <NavLink to="/" end>
          {({ isActive }) => (
            <li
              className={`${navItem} ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              HOME
            </li>
          )}
        </NavLink>

        <NavLink to="/Explore">
          {({ isActive }) => (
            <li
              className={`${navItem} ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              EXPLORE
            </li>
          )}
        </NavLink>

        <NavLink to="/Contact">
          {({ isActive }) => (
            <li
              className={`${navItem} ${
                isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              CONTACT
            </li>
          )}
        </NavLink>

        <SignedOut>
          <SignInButton>
            <span className={`${navItem} after:w-0 hover:after:w-full`}>
              {hasLoggedInBefore ? "LOGIN" : "SIGN IN"}
            </span>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>
    </nav>
  );
}

export default Nav;
