import React from "react";
import { TypeAnimation } from "react-type-animation";
import man from "../../../public/animated portfolio using react/man.png";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
function Home() {
  useGSAP(() => {
    let t1 = gsap.timeline();

    t1.from(" div #line1", {
      y: 50,
      duration: 0.5,
    });
    t1.from(" div #line2", {
      y: 50,
      duration: 0.5,
    });
    t1.from(" div #line3", {
      y: 50,
      duration: 0.5,
    });
  });
  return (
    <div
      id="home"
      className="w-full h-[100%] overflow-hidden flex text-white bg-black"
    >
      <div className=" w-[50%] min-h-[100vh] flex items-start px-30 my-20 justify-center gap-3 mb-3  flex-col max-h-[400px]  h-screen ">
        <div id="line1" className="text-lg font-san ">
          I'M
        </div>
        <div
          id="line2"
          className="text-[60px] flex  bg-linear-to-r from-blue-600 to-white bg-clip-text text-transparent font-medium"
        >
          <h1>Sayyed Asif</h1>{" "}
        </div>
        <div id="line3" className="text-3xl flex text-white ">
          <TypeAnimation
            sequence={[
              "SOFTWARE ENGINEER",
              1000,
              "WEB DEVOLOPER",
              1000,
              "SYSTEM DESIGN",
              1000,
            ]}
            speed={10}
            style={{ fontSize: "30px", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <button
          id="btn"
          className=" hove mt-2 py-2 px-4 bg-light-5  bg-[#00ffff] rounded-[20px] border-2 border-[#00ffff]  cursor-pointer text-black hover:bg-transparent duration-300  transition-all"
        >
          Here Me
        </button>
      </div>
      <div className="flex justify-center items-center w-[50%]">
        <img src={man} className="w-[400px] shadow" alt="" />
      </div>
    </div>
  );
}

export default Home;
