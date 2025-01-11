import React from 'react'
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
} from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { EcoState } from "../../Context/EcoProvider";
import { useWindowSize } from "@react-hook/window-size";
import { BsMinecart } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";


function Navbar() {
  return (
    <div className=' bg-gray-800  h-20 w-full text-white flex items-center'>
      <div
        className="  flex items-center justify-between gap-1  
         w-full"
      >
        <div className=" flex  items-center gap-1 justify-between ">
          <div className=" flex items-center md:hidden  ">
            {
              <AiOutlineMenu
                size={20}
              
              />
            }
          </div>
          <a
            href="/"
            className=" text-xl italic font-bold  px-3 flex uppercase "
          >
            Shop Onlay
          </a>
        </div>
      
        <div className=" flex px-1 sm:px-5 items-center gap-2 ">
          <div className=" hidden md:flex items-center  ">
            {/* <a
              href="#home"
              onClick={() => onLinkTo("home")}
              className=" mx-5   rounded-lg hover:underline
                hover:hover:underline-offset-4   p-1  text-center"
            >
              Home
            </a>
            <a
              href="#about"
              className="  mx-5  rounded-lg hover:underline
                hover:underline-offset-4   p-1  text-center"
            >
              About
            </a>
            <a
              href="#shop"
              className=" mx-5  rounded-lg hover:underline
               hover:underline-offset-4   p-1  text-center"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="   rounded-lg hover:underline
               hover:underline-offset-4   p-1  text-center"
            >
              Contact
            </a> */}
          </div>

          <a href="/login" className="">
            <IoMdPeople size={25} className="m" />
          </a>
        </div>

     
      </div>
    </div>
  )
}

export default Navbar
