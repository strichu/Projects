import React from "react";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Nav() {
  useGSAP(() => {
    let t1 = gsap.timeline();
    t1.from("#nav h1", {
      y: -100,
      duration: 1,
      opacity:0
    });
    t1.from("nav ul li",{
      y:-50,
      duration:0.8,
      stagger:1
    })
  });

  return (
    <div
      id="nav"
      className="w-full h-[80px] z-10 text-white  bg-black flex justify-between fixed top-0 items-center  "
    >
      <h1 id="h1" className="text-[30px] font-semibold bg-linear-to-r from-cyan-500 to-white py-5 px-10 bg-clip-text text-transparent">
        PORTFOLIO
      </h1>
      <nav className="flex items-center justify-center px-8  ">
        <ul className="flex justify-center items-center cursor-pointer gap-4 font-medium">
          <li>
            {" "}
            <Link
              to="home"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
            >
              Home
            </Link>{" "}
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              activeClass="active"
              spy={true}
            >
              About{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="project"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Project{" "}
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
