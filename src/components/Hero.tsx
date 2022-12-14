import React, { Component, useEffect, useState } from "react";
import Processo from "../assets/processo.png";
import { CheckSquare, TelegramLogo, ArrowCircleDown } from "phosphor-react";
import Clock from "./Clock";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  const [timerDays, setTimerDays] = useState<any>();
  const [timerHours, setTimerHours] = useState<any>();
  const [timerMinutes, setTimerMinutes] = useState<any>();
  const [timerSeconds, setTimerSeconds] = useState<any>();
  const [aberto, setAberto] = useState<boolean>();

  let interval: any;

  const startTimer = () => {
    const countDownDate = new Date("November 11,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //Parar o contador
        setAberto(false);
        console.log(aberto);
        clearInterval(interval.current);
      } else {
        //Atualizar o contador
        console.log(aberto);
        setAberto(true);
        setTimerDays(days);

        setTimerHours(hours);

        setTimerMinutes(minutes);

        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="mt-[-96px] w-full h-screen max-auto text-center flex flex-col justify-center items-center">
      <img className=" max-w-sm mt-24" src={Processo} alt="Processo Seletivo" />

      <Typed
        className="text-5xl text-blue-900 font-bold "
        strings={["2023", "#VEMSERETE"]}
        typeSpeed={250}
        backSpeed={100}
        loop
      />
      <Link to="pagina" spy={true} smooth={true}>
        <ArrowCircleDown
          id="pagina"
          className="w-12 h-12 mt-5 mb-2 animate-bounce text-blue-700"
        />
      </Link>
      <div className="w-[700px] fle flex-col max-w-sm h-[150px] md:max-w-lg hover:bg-blue-800 transition-colors duration-500 hover:cursor-progress shadow-lg shadow-blue-500 bg-blue-900 mt-6 justify-center items-center flex rounded-md mb-6">
        <Clock
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />
      </div>
      <div>
        {aberto ? (
          <a href="https://sisacad.educacao.pe.gov.br/sissel/index.php?pag=3P">
            <button className=" bg-[#0F172A] cursor-pointer border-2 border-blue-900 hover:bg-[#192950] transition-colors text-yellow-500 h-[60px] w-[380px] rounded-md mt-3 flex items-center justify-center flex-row gap-2">
              <CheckSquare className="" />
              <h1>Fazer inscri????o agora</h1>
            </button>
          </a>
        ) : (
          <button className=" bg-red-600 border-2 cursor-not-allowed transition-colors text-white h-[60px] w-[380px] rounded-md mt-3 flex items-center justify-center flex-row gap-2">
            <h1 className="font-bold">INSCRI????ES ENCERRADAS!</h1>
          </button>
        )}
        <a href="https://t.me/+uiZA2rGPggYwNTZh">
          <button className="bg-[#0088CC] mb-5  hover:bg-cyan-700 border-2 border-blue-300 transition-colors text-white h-[60px] w-[380px] rounded-md mt-3 flex items-center justify-center flex-row gap-2">
            <TelegramLogo className="" />
            <h1>Entre no grupo do Telegram</h1>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
