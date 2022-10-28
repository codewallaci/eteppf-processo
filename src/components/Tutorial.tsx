import React, { Component } from "react";

class Tutorial extends Component {
  render() {
    return (
      <div id="tutorial">
        <div className="text-center bg-blue-900 flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl w-[350px] md:w-[450px] mt-12">
            Assista o tutorial do passo a passo para realizar a inscrição no
            processo seletivo ⬇️
          </h1>
          <div className="w-[900px] max-w-sm max-h-60 h-[350px] md:max-h-[350px] md:max-w-2xl  bg-white justify-center items-center flex rounded-md mb-24 mt-12">
            <h1 className="text-black font-bold text-5xl">VÍDEO</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;
