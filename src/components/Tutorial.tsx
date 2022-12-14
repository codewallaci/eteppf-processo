import React, { Component } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";

import tutorialVideo from "../assets/tutorial.mp4";

class Tutorial extends Component {
  render() {
    return (
      <div id="tutorial">
        <div className="text-center bg-blue-900 flex flex-col justify-center items-center">
          <h1 className="text-white text-1xl w-[350px] md:w-[450px] mt-12 mb-6">
            Assista o tutorial do passo a passo para realizar a inscrição no
            processo seletivo ⬇️
          </h1>
          <div className="w-[900px] max-w-sm max-h-96 h-[350px] md:max-h-[350px] md:max-w-2xl  justify-center items-center flex rounded-md mb-24 mt-12">
            <iframe
              width="1349"
              height="484"
              src="https://www.youtube.com/embed/3CKiZUiFgBc"
              title="INSCRIÇÃO PROCESSO SELETIVO 2023 - ETE PROFESSOR PAULO FREIRE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Tutorial;
