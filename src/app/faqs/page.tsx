'use client'
import { useState } from "react";

export default function Faqs(){
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    const handleToggle = () => setIsVisible(!isVisible);
    const handleToggle2 = () => setIsVisible2(!isVisible2);
    const handleToggle3 = () => setIsVisible3(!isVisible3);
    const handleToggle4 = () => setIsVisible4(!isVisible4);
    const handleToggle5 = () => setIsVisible5(!isVisible5);

    return (
        <div className="p-4">
            <h1 className="text-[#deab7f] text-2xl md:text-3xl lg:text-4xl font-semibold text-center my-8">
                Frequently Asked Questions
            </h1>

            <button
                onClick={handleToggle}
                className="bg-[#41228e] animate__animated animate__backInDown w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex justify-between items-center p-4 mt-3 rounded-lg"
            >
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">
                    Who is Laiba Noman?
                </h1>
                <p className="text-white text-2xl">
                    {isVisible ? "x" : "+"}
                </p>
            </button>
            <div
                className={`bg-[#41228e] w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto p-4 mt-1 rounded-lg ${isVisible ? "block" : "hidden"}`}
            >
                <h1 className="text-white text-base md:text-lg">
                    I am Laiba Noman, a dedicated frontend web developer with expertise in HTML, CSS, JavaScript, TypeScript, Next.js, and Tailwind CSS. While pursuing my education in the medical field, I am passionate about creating responsive and engaging web applications.
                </h1>
            </div>

            <button
                onClick={handleToggle2}
                className="bg-[#41228e] animate__animated animate__backInDown animate__delay-0.5s an w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex justify-between items-center p-4 mt-3 rounded-lg"
            >
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">
                 What are your key projects?
                </h1>
                <p className="text-white text-2xl">
                    {isVisible2 ? "x" : "+"}
                </p>
            </button>
            <div
                className={`bg-[#41228e] w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto p-4 mt-1 rounded-lg ${isVisible2 ? "block" : "hidden"}`}
            >
                <h1 className="text-[#deab7f] text-base md:text-lg">
                I,ve developed projects like a CV Generator, a Netflix Clone, and a Tic-Tac-Toe Game, demonstrating my skills in frontend technologies and interactive design. Each project highlights my ability to create functional and visually appealing websites.
                </h1>
            </div>

            <button
                onClick={handleToggle3}
                className="bg-[#41228e] animate__animated animate__backInDown animate__delay-1.3s w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex justify-between items-center p-4 mt-3 rounded-lg"
            >
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">
                What is your approach to web development?
                </h1>
                <p className="text-white text-2xl">
                    {isVisible3 ? "x" : "+"}
                </p>
            </button>
            <div
                className={`bg-[#41228e] w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto p-4 mt-1 rounded-lg ${isVisible3 ? "block" : "hidden"}`}
            >
                <h1 className="text-white text-base md:text-lg">
                I focus on creating clean, user-friendly, and responsive websites. My approach combines strong technical skills with a keen eye for design, ensuring that every project I work on is both functional and aesthetically pleasing.
                </h1>
            </div>

            <button
                onClick={handleToggle4}
                className="bg-[#41228e] animate__animated animate__backInDown animate__delay-1.5s w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex justify-between items-center p-4 mt-3 rounded-lg"
            >
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">
                Why did you choose to pursue web development?
                </h1>
                <p className="text-white text-2xl">
                    {isVisible4 ? "x" : "+"}
                </p>
            </button>
            <div
                className={`bg-[#41228e] w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto p-4 mt-1 rounded-lg ${isVisible4 ? "block" : "hidden"}`}
            >
                <h1 className="text-white text-base md:text-lg">
                Web development allows me to blend creativity with technology. I am drawn to the challenge of building dynamic and interactive web experiences, and it offers a perfect balance with my interest in problem-solving and design.
                </h1>
            </div>

            <button
                onClick={handleToggle5}
                className="bg-[#41228e] animate__animated animate__backInDown animate__delay-1.7s w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto flex justify-between items-center p-4 mt-3 rounded-lg"
            >
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">
                What are your future goals?
                </h1>
                <p className="text-white text-2xl">
                    {isVisible5 ? "x" : "+"}
                </p>
            </button>
            <div
                className={`bg-[#41228e] w-full md:w-[700px] lg:w-[800px] xl:w-[900px] mx-auto p-4 mt-1 rounded-lg ${isVisible5 ? "block" : "hidden"}`}
            >
                <h1 className="text-white text-base md:text-lg">
                I aim to continue refining my skills, particularly in full-stack development, while building a portfolio of diverse and impactful web applications. I also plan to collaborate with clients to create custom solutions that help bring their visions to life.
                </h1>
            </div>
        </div>
    )
}
