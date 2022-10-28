import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from "../assets/logobranca.png";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="inscricao">
      <div className="z-40 flex justify-between items-center h-20 w-full px-4 text-white bg-blue-900">
        <img className="w-[100px] ml-6" src={Logo} alt="LOGO ETE" />
        <ul className="show flex items-center mr-0 md:mr-6 ">
          <Link to="inscricao" spy={true} smooth={true}>
            <button className="w-[110px] my-6 mx-auto py-2 bg-white text-blue-900 font-bold rounded-lg hover:bg-zinc-100 transition-colors">
              Inscrição
            </button>
          </Link>
          <Link to="tutorial" spy={true} smooth={true}>
            <li className="p-2 md:p-4 cursor-pointer md hover:text-zinc-100 transition-colors">
              Tutorial
            </li>
          </Link>

          <Link to="contact" spy={true} smooth={true}>
            <li className="p-2 md:p-4  cursor-pointer  hover:text-zinc-100 transition-colors">
              Cronograma
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
