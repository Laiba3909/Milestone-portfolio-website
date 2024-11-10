'use client'
import "animate.css";
import Button from "./buttons/button";
import laiba from "../../public/laiba.png";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const button = document.getElementById("button");
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = laiba.src;
      link.download = "laiba.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    button?.addEventListener("click", handleDownload);
    return () => {
      button?.removeEventListener("click", handleDownload);
    };
  }, []);

  return (
    <div >
    <main >
      <div className="bg-[#41228e] xl:h-[500px] 2xl:h-[250px] w-auto h-[190px] md:h-[380px] lg:h-[250px] overflow-hidden">
        <h1 className="text-white font-mono md:mt-12 md:-ml-9 md:text-6xl lg:mt-3 md:w-[600px] lg:text-6xl lg:w-[600px] text-center  w-80 text-4xl animate__animated animate__lightSpeedInRight ">
          Hi! I am Laiba <br />
          <span className="text-[#FFDAB9]">Web Developer</span>
        </h1>
        <Button
          id="button"
          name="Download Cv"
          style="bg-white w-36 h-8 rounded text-[#41228e] font-mono  text-xl ml-5 lg:ml-24 mt-5 font-bold animate__animated animate__fadeInDownBig md:ml-24 "
        />
        <Link href={'https://www.linkedin.com/in/laiba-noman-158663290/'}><Button
          name="Hire me"
          style="bg-[#FFDAB9] font-mono font-bold  w-32 h-8 rounded text-[#41228e] text-xl
           md:ml-12 ml-6 lg:ml-12 md:mt-8 mt-5 animate__animated animate__fadeInDownBig"
        /></Link>
      </div>

     
  
    </main>

    
    <h1  className="mt-2 text-center md:mt-10 xl:text-6xl 2xl:text-3xl lg:mt-3 md:text-5xl lg:text-3xl text-3xl font-mono font-bold text-[#41228e] animate__animated animate__fadeInUpBig">Who I AM? 🤔</h1>
        <p className=" md:font-mono md:text-4xl md:mt-5 xl:text-4xl 2xl:text-2xl lg:text-2xl  text-center text-2xl lg:font-mono"><span className="font-bold font-mono"></span><span>Hi!</span> I am Laiba, a dedicated web developer with a passion for creating innovative, visually engaging, and user-friendly websites. I specialize in frontend technologies and enjoy bringing ideas to life using <span className="text-[#dfa16a] font-mono">Next.js, Tailwind, and TypeScript</span>.. I am constantly learning and challenging myself to stay up-to-date with the latest trends in web development. My goal is to expand my skills and dive into full-stack development, creating solutions that combine both frontend aesthetics and backend functionality. Let,s build something remarkable together!


</p>
    </div>
  );
}
