import H1 from "../Components/heading";
import Image from "next/image";
import clone1 from "../../../public/clone1.png";
import clone2 from "../../../public/clone2.png";
import clone3 from "../../../public/clone3.png";
import portfolio1 from "../../../public/portfolio1.png";
import portfolio2 from "../../../public/portfolio2.png";
import resume from "../../../public/resume.png";
import meal from "../../../public/meal.png";
import tic from "../../../public/tic.png";
import Link from "next/link";
export default function Projects() {
  return (
    <div>
      <H1 name="Projects" />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-1 cursor-pointer grid-cols-1">
        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-black sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10  sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={portfolio1}
            alt=""
          />
           <Link href={'https://portfolio-brown-xi-48.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>

        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-black sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10 ml-5 w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 "
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10  sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={portfolio2}
            alt=""
          />
          <Link href={'https://assignment3-nextjs-portfolio-tailwindcss.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>

        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-black sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10 ml-5 w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 "
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10 sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={meal}
            alt=""
            />
            <Link href={'https://ecommerce-food-web-fawn.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>
      </div>

      <br />
      <br />
      <br />

      <H1 name="Resume Builder And Game" />

      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 2xl:ml-48 cursor-pointer grid-cols-1">
        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-[#f5f5f5] sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10 sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={resume}
            alt=""
          />
          <Link href={'https://cv-generator-five-liart.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>

        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-[#548687] sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10  sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={tic}
            alt=""
          />
         <Link href={'https://tic-tac-toe-six-khaki.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      <H1 name="Clones (Not-responsive)" />

      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  cursor-pointer grid-cols-1">
        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-[#f5f5f5] sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10  sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={clone1}
            alt=""
          />
           <Link href={'https://facebook-clone-nine-rose.vercel.app/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>

        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-black sm:h-52 hover:text-[#deab7f]  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10 sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={clone2}
            alt=""
          />
            <Link href={'https://www.linkedin.com/feed/update/urn:li:activity:7256401023844446208/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>

        <div
          className="animate__animated animate__bounceInLeft animate__delay-0.5s border-2 shadow-2xl  rounded-3xl bg-[#f5f5f5] sm:h-52 hover:text-white  hover:border-[#deab7f] hover:border-2
          lg:border-[#41228e] mt-10  w-[300px] h-64 md:h-60 lg:w-80 lg:ml-16 ml-5"
        >
          <Image
            className="md:w-80 ml-12 w-96 h-64 sm:w-52 hover:lg:-ml-10 sm:h-44   md:h-52 rounded-xl md:mt-8   md:ml-12 lg:ml-12"
            src={clone3}
            alt=""
          />
           <Link href={'https://www.linkedin.com/in/laiba-noman-158663290/recent-activity/all/'}> <button className="text-[#41228e] hover:text-[#deab7f] mt-3 sm:mt-8  text-center text-2xl font-mono ml-5">
            Live Preview
          </button></Link>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}
