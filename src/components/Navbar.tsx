import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div id="inscricao">
      <div className="flex justify-between items-center h-20 w-full px-4 text-white bg-blue-900">
        <h1 className="w-full text-3xl font-bold text-zinc-100 px-8">
          ETE PPF
        </h1>
        <ul className="hidden md:flex items-center">
          <Link to="inscricao" spy={true} smooth={true}>
            <button className="w-[110px] my-6 mx-auto py-2 bg-white text-blue-900 font-bold rounded-lg hover:bg-zinc-100 transition-colors">
              Inscrição
            </button>
          </Link>
          <Link to="tutorial" spy={true} smooth={true}>
            <li className="p-4 cursor-pointer  hover:text-zinc-100 transition-colors">
              Tutorial
            </li>
          </Link>

          <Link to="contact" spy={true} smooth={true}>
            <li className="p-4 cursor-pointer  hover:text-zinc-100 transition-colors">
              Cronograma
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-blue-900"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-zinc-100 mt-8 ml-4">
            ETE PPF
          </h1>
          <ul className="p-4 uppercase ">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              <Link
                to="inscricao"
                spy={true}
                smooth={true}
                className="p-4 border-b border-r-gray-300 "
              >
                <button className="w-[200px] my-6 mx-auto py-2 bg-white text-blue-900 font-bold rounded-lg">
                  Inscrição
                </button>
              </Link>
              <li className="p-4 border-b border-r-gray-300 ">Tutorial</li>
            </Link>
            <Link to="about" spy={true} smooth={true}>
              <li className="p-4 ">Cronograma</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
