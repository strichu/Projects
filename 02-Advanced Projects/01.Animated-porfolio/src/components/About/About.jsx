import React from "react";
import mern from "../../../public/animated portfolio using react/mern.png";
import dsa from "../../../public/animated portfolio using react/dsa.png";
import java from "../../../public/animated portfolio using react/java.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);
function About() {
  useGSAP(() => {

    let t1 = gsap.timeline();
    t1.from(".cirlcle", {
      x: -100,
      duration: 2,
      opacity:0,
       stagger:1,
      scrollTrigger: {
        trigger: ".cirlcle",
        scroller: "body",
        scrub: 2,
        start:"top 50%",
        end:"top 20%",
      opacity:1,

      },
    });
  
     t1.from("#lines", {
      x: -100,
      duration: 2,
      opacity:0,
      stagger:1,
      scrollTrigger: {
        trigger: ".cirlcle",
        scroller: "body",
        scrub: 2,
        start:"top 50%",
        end:"top 20%",
      opacity:1,

      },
    });
  
  });

// useGSAP(() => {
//     // 1. Move ScrollTrigger to the main timeline
//     let t1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".cirlcle", 
//         scrub: 2,
//         markers: true,
//         start: "top 50%",
//         end: "top 20%",
//       }
//     });
  
//     // 2. Chain your animations clean of ScrollTrigger logic
//     t1.from(".cirlcle", {
//       x: -100,
//       opacity: 0,
//       duration: 1,
//       stagger: 1, 
//     })
//     // 3. Chain the lines animation immediately after using the NEW class name
//     .from("#lines", {
//       x: -100,
//       opacity: 0,
//       duration: 1,
//       stagger: '1',
//     }, "<0.5"); // The "<0.5" makes the lines start animating slightly before the circles finish for a smoother flow

//   });
  return (
    <div id="about" className="w-full h-[100vh] flex  text-white bg-black ">
      <div className="w-[50%]  flex items-center justify-center h-[100vh] ">
        <div className="  flex justify-center items-center flex-col">
          <div className="w-[60px] h-[60px] cirlcle  rounded-full bg-cyan-300 drop-shadow"></div>
          <div id="lines" className="w-[2px] h-[120px]   bg-cyan-500"></div>

          <div className="w-[60px] h-[60px] cirlcle rounded-full bg-cyan-300 drop-shadow "></div>
          <div id="lines" className="w-[2px] h-[120px]  bg-cyan-500"></div>

          <div className="w-[60px] h-[60px] cirlcle rounded-full bg-cyan-300 drop-shadow"></div>
          {/* <div className="w-1 h-[120px] bg-cyan-500"></div> */}
        </div>
        <div className="flex flex-col gap-4 ml-10">
          <h1 className="bg-linear-to-r from-pink-800  to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
            Personal Info
          </h1>
          <ul className="flex flex-col">
            <li>
              <span className="text-teal-500">NAME: </span>SAYYED ASIF
            </li>
            <li>
              <span className="text-teal-500">AGE: </span>16 YEARS
            </li>
            <li>
              <span className="text-teal-500">GENDER: </span>MALE
            </li>
            <li>
              <span className="text-teal-500">LANGUAGE KNOWN: </span>
              ENGLISH,URDU
            </li>
          </ul>

          <div>
            <h1 className="bg-linear-to-r from-pink-800  to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
              Education
            </h1>
            <ul className="flex flex-col">
              <li>
                <span className="text-teal-500">DEGREE: </span>BSCS
              </li>
              <li>
                <span className="text-teal-500">BRANCH: </span>COMPUTER SCIENCE
                & ENGINEERING
              </li>
              <li>
                <span className="text-teal-500">CGPA: </span>3.6/4.0
              </li>
            </ul>
          </div>
          <div>
            <h1 className="bg-linear-to-r from-pink-800  to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
              Skills
            </h1>
            <ul className="flex  flex-col">
              <li>MEARN STACK Development</li>
              <li>Basic DSA</li>
              <li>System Design</li>
              <li>CS core</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[100vh] flex justify-center items-center ">
        <div className="flex justify-center items-center h-full p-10 flex-col gap-5 ">
          <div className=" p-2 w-[360px] h-[200px] overflow-hidden  bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter">
            <h1 className="flex justify-center items-center text-center w-full h-full tex-2xl bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
              MEARN STACK WEB DEVOLOPER
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[30%] img
                
                 "
                src={mern}
                alt=""
              />
            </div>
          </div>
          <div className=" p-2 w-[360px] h-[200px] overflow-hidden  bg-[#151010]   cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
              DSA
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[30%] 
                img2
                 "
                src={dsa}
                alt=""
              />
            </div>
          </div>
          <div className=" p-2 w-[360px] h-[200px] overflow-hidden  bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
              JAVA
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[30%] img2
                
                 "
                src={java}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// import React from "react";
// import mern from "../../../public/animated portfolio using react/mern.png";
// import dsa from "../../../public/animated portfolio using react/dsa.png";
// import java from "../../../public/animated portfolio using react/java.png";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import { gsap } from "gsap";

// gsap.registerPlugin(ScrollTrigger);

// function About() {
//   useGSAP(() => {
//     // 1. ScrollTrigger ko main timeline ke andar daala
//     let t1 = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".cirlcle", // Trigger element
//         scroller: "body", // 'scroll' nahi, 'scroller' hota hai (ya isko hata bhi sakte hain)
//         scrub: 2,
//         markers: true,
//         start: "top 50%",
//         end: "top 20%",
//       }
//     });

//     // 2. Sirf animations ko chain kiya, scrollTrigger yahan se hata diya
//     t1.from(".cirlcle", {
//       x: -100,
//       duration: 1,
//       opacity: 0,
//       stagger: 1, // Ab ye perfectly kaam karega
//     })
//     // 3. '#lines' ki jagah '.lines' class ko target kiya
//     .from(".lines", {
//       x: -100,
//       duration: 1,
//       opacity: 0,
//       stagger: 1,
//     }, "<0.5"); // '<0.5' ka matlab hai ye pichle animation ke thoda pehle start ho jayega, smooth effect ke liye

//   });

//   return (
//     <div id="about" className="w-full h-[100vh] flex text-white bg-black ">
//       <div className="w-[50%] flex items-center justify-center h-[100vh] ">
//         <div className=" flex justify-center items-center flex-col">
//           {/* YAHAN CHANGES KIYE HAIN: id="lines" hata kar className="lines" add kiya hai */}
//           <div className="w-[60px] h-[60px] cirlcle rounded-full bg-cyan-300 drop-shadow"></div>
//           <div className="lines w-[2px] h-[120px] bg-cyan-500"></div>

//           <div className="w-[60px] h-[60px] cirlcle rounded-full bg-cyan-300 drop-shadow "></div>
//           <div className="lines w-[2px] h-[120px] bg-cyan-500"></div>

//           <div className="w-[60px] h-[60px] cirlcle rounded-full bg-cyan-300 drop-shadow"></div>
//         </div>
        
//         <div className="flex flex-col gap-4 ml-10">
//           <h1 className="bg-linear-to-r from-pink-800 to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
//             Personal Info
//           </h1>
//           <ul className="flex flex-col">
//             <li>
//               <span className="text-teal-500">NAME: </span>SAYYED ASIF
//             </li>
//             <li>
//               <span className="text-teal-500">AGE: </span>21 YEARS
//             </li>
//             <li>
//               <span className="text-teal-500">GENDER: </span>MALE
//             </li>
//             <li>
//               <span className="text-teal-500">LANGUAGE KNOWN: </span>
//               HINDI,ENGLISH
//             </li>
//           </ul>

//           <div>
//             <h1 className="bg-linear-to-r from-pink-800 to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
//               Education
//             </h1>
//             <ul className="flex flex-col">
//               <li>
//                 <span className="text-teal-500">DEGREE: </span>BTECH {/* BITCH typo fixed */}
//               </li>
//               <li>
//                 <span className="text-teal-500">BRANCH: </span>COMPUTER SCIENCE
//                 & ENGINEERING
//               </li>
//               <li>
//                 <span className="text-teal-500">CGPA: </span>8.5
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="bg-linear-to-r from-pink-800 to-teal-100 bg-clip-text text-transparent text-4xl font-semibold">
//               Skills
//             </h1>
//             <ul className="flex flex-col">
//               <li>MERN STACK WEB DEVOLOPER</li>
//               <li>DSA</li>
//               <li>JAVA</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="w-[50%] h-[100vh] flex justify-center items-center ">
//         <div className="flex justify-center items-center h-full p-10 flex-col gap-5 ">
//           <div className=" p-2 w-[360px] h-[200px] overflow-hidden bg-[#151010] cursor-pointer flex justify-center items-center flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter">
//             <h1 className="flex justify-center items-center text-center w-full h-full tex-2xl bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
//               MERN STACK WEB DEVOLOPER
//             </h1>
//             <div className="w-[100%] h-full overhead absolute bottom-0 flex justify-center items-center bg-black-50">
//               <img className="w-[30%] img" src={mern} alt="" />
//             </div>
//           </div>
//           <div className=" p-2 w-[360px] h-[200px] overflow-hidden bg-[#151010] cursor-pointer flex justify-center items-center flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
//             <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
//               DSA
//             </h1>
//             <div className="w-[100%] h-full overhead absolute bottom-0 flex justify-center items-center bg-black-50">
//               <img className="w-[30%] img2" src={dsa} alt="" />
//             </div>
//           </div>
//           <div className=" p-2 w-[360px] h-[200px] overflow-hidden bg-[#151010] cursor-pointer flex justify-center items-center flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
//             <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
//               JAVA
//             </h1>
//             <div className="w-[100%] h-full overhead absolute bottom-0 flex justify-center items-center bg-black-50">
//               <img className="w-[30%] img2" src={java} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;