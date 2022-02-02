import React from "react";

import logo from "../assets/ucsc-alumni-logo1.jpg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">UCSC Alumni Match Maker</h1>

    <p className="lead">
      Welcome To UCSC Alumni Council Match Maker
    </p>
  </div>
);

export default Hero;
