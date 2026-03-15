import React from "react";
import ctclogo from "../../../public/animated portfolio using react/contact.png";

function Contact() {
  return (
    <div id="contact" className="h-full w-full flex   bg-black text-black">
      <div className="flex w-[50%] h-[100vh] justify-center items-center ">
        <img src={ctclogo} className="w-[350px] drop" alt="" />
      </div>
      <div className="w-[50%] h-[100vh] flex items-center justify-center flex-col">
        <div className="w-[500px] h-[500px] flex flex-col items-center justify-start    rounded-lg bg-gray-950">
          <form
            action="https://formspree.io/f/xqeybjgw"
            method="POST"
            className="flex flex-col justify-center items-center text-white gap-10  w-full p-16 "
          >
            <input
              type="text"
              placeholder="Name"
              className="border-1   w-full p-4 rounded-full bg-white text-black outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-1  w-full p-4 rounded-full bg-white text-black outline-none"
            />
            <textarea
              className="border-1 w-full  p-4 rounded-3xl h-[130px] bg-white text-black"
              placeholder="Message me outline-none"
            ></textarea>
            <button className="py-3 px-5 bg-[#00ffff]  font-semibold rounded-full cursor-pointer border-2 border-[#00ffff] outline-none text-black hover:bg-transparent text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
