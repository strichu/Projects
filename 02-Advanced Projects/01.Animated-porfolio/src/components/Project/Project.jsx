import React from 'react'

import mern from "../../../public/animated portfolio using react/mern.png";
import dsa from "../../../public/animated portfolio using react/dsa.png";
import java from "../../../public/animated portfolio using react/java.png";
import vr from '../../../public/animated portfolio using react/va.png'
import cb from '../../../public/animated portfolio using react/cb.png'
import tti from '../../../public/animated portfolio using react/tti.png'
import fw from '../../../public/animated portfolio using react/fw.png'
import br from '../../../public/animated portfolio using react/br.png'
import ise from '../../../public/animated portfolio using react/ise.png'
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
function Project() {
  useGSAP(()=>{
    let t1 = gsap.timeline();
  t1.to("#year",{
    y:-100,
    duration:1,
    // opacity:0,
    color:"white",
    scrollTrigger:{
      trigger:"#year",
      scroller:"body",
      scrub:2
    }
  })
  })
  return (
    <div id='project' className=' overflow-hidden h-full w-full min-h-[100vh] bg-black text-white'>
        <div className='flex justify-center items-center w-full h-[50vh] text-[40px] linear bg-clip-text text-transparent'>
          <h1 id='year'>2+ Years Experinced in Projects</h1>
        </div>
        <div className='flex  gap-5 overflow-y-hidden overflow-x-scroll width '>
              <div className=" p-2 w-[350px] h-[150px] overflow-hidden  shrink-0 bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter">
            <h1 className="flex justify-center items-center text-center w-full h-full tex-2xl bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
            VIRTUAL ASSISTENCE
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[30%] img
                
                 "
                src={vr}
                alt=""
              />
            </div>
          </div>
          <div className=" p-2 w-[350px] h-[150px] overflow-hidden shrink-0  bg-[#151010]   cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent text-center">
            AI POWER FITNESS WEBSITE
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[80%] 
               
                 "
                src={fw}
                alt=""
              />
            </div>
          </div>
          <div className=" p-2 w-[350px] h-[150px] overflow-hidden shrink-0 bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent">
              AI CHATBOT
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[80%]
                
                 "
                src={cb}
                alt=""
              />
            </div>
          </div>
            <div className=" p-2 w-[350px] h-[150px] overflow-hidden shrink-0  bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent text-center">
              AI TEXT TO IMAGE GENERATOR
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[80%] 
                
                 "
                src={tti}
                alt=""
              />
            </div>
          </div>
            <div className=" p-2 w-[350px] h-[150px] overflow-hidden shrink-0 bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent text-center">
              AI BACKGROUND REMOVER
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[80%] 
                
                 "
                src={br}
                alt=""
              />
            </div>
          </div>
           <div className=" p-2 w-[350px] h-[150px] overflow-hidden shrink-0 bg-[#151010]  cursor-pointer  flex justify-center items-center  flex-wrap rounded-md font-bold text-2xl relative card hover:duration-200 transition-all filter ">
            <h1 className="flex justify-center items-center w-full h-full bg-linear-to-r from-cyan-400 to-sky-100 bg-clip-text text-3xl text-transparent text-center">
              AI SEARCH ENGINE
            </h1>
            <div className="w-[100%] h-full overhead   absolute  bottom-0 flex justify-center items-center    bg-black-50">
              <img
                className="w-[80%] 
                
                 "
                src={ise}
                alt=""
              />
            </div>
          </div>
      

        </div>
    </div>
  )
}

export default Project