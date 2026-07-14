import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu"

function Icons() {
  return (
<div className="mt-[34rem] absolute ml-14 cursor-pointer">
    <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-white rounded-full absolute" />
        <FaFacebookF className="text-2xl text-white z-10" />
    </div>
    <div className="relative flex items-center justify-center mt-14">
        <div className="w-12 h-12  border-2 border-white rounded-full absolute" />
        <LuInstagram className="text-2xl text-white z-10" />
    </div>
</div>


  )
}

export default Icons

