import React, { Component } from "react";
import Typed from "react-typed";
import Logo from "../assets/logo.png";

class Soon extends Component {
  render() {
    return (
      <>
        <div className="h-screen flex flex-col justify-center items-center content-center">
          <img className="h-80" src={Logo} alt="logo" />

          <Typed
            className="text-5xl font-bold"
            strings={["EM BREVE", "#ETERNAMENTE"]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />
        </div>
      </>
    );
  }
}

export default Soon;
