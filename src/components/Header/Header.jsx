import React from 'react'
import Nav from "./Nav";
import Logo from "@/assets/logo.png"
import Icons from "./Icons";

function Header() {
  return (
<div className="relative z-10 min-h-screen">
  <Nav />
  {/* BorderLine */}
  <div className="border border-white absolute h-[315rem] left-36"></div>
  {/* Logo Image */}
  <img
    className="absolute w-32 h-auto pt-8 pl-4 z-30"
    src={Logo}
    />
  <Icons />
</div>

  )
}

export default Header
