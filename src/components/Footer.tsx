import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center bg-gray-900 text-white">
        <div
          className="text-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Desenvolvido por:
          <b> </b>
          <a
            className="text-whitehite"
            href="https://instagram.com/realwallaci"
          >
            @realwallaci
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
