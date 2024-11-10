"use client";
import "animate.css";
import Image from "next/image";
import logo2 from '../../../public/logo2.png'
import { useState } from "react";
import Link from "next/link";

export default function Header() {

  const [isMobileMenu, setMobileMenu] = useState(false);
  

  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (


  <header className="flex justify-between items-center p-4  bg-[#41228e] text-white" >

<div>
    <Image
    className="w-44 -mt-12 -ml-9 md:w-52 md:h-44  h-40 animate__animated animate__fadeInDown"
    src={logo2}
    alt="..loading"
    />
</div>

      <nav className="hidden lg:flex">
        <ul className="flex text-3xl font-mono m-0 gap-x-8 animate__animated animate__backInDown">
          <li className="text-[#FFDAB9]">
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/faqs">FAQS</Link>
          </li>
        </ul>
      </nav>

      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-3xl focus:outline-none -mt-10 animate__animated animate__fadeInDown"
        >
          ☰
        </button>
      </div>
      {isMobileMenu && (
        <div className="absolute top-16 right-0 bg-[#41228e] w-full text-white shadow-lg z-10  
animate__animated animate__backInDown lg:hidden flex">
          <ul className="flex flex-col text-xl p-4 ">
            <li className="py-2 hover:bg-gray-700">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link href="/about">About</Link>
            </li>
            <li className="py-2 hover:bg-gray-700">
              <Link href="/skills">Skills</Link>
            </li>
            
            <li className="py-2 hover:bg-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
         
          </ul>
        </div>
        
      )}
      
    </header>
  );
}
