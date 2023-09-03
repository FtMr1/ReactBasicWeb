import React from "react";
import aboutCay from "../assets/aboutCay.jpg";
import "../style/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutCay}) ` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Itaque fuga ex veniam pariatur fugiat iure molestiae
          ut temporibus, optio eaque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Totam dolor reiciendis adipisci exercitationem.
          Tempore magnam veniam eius itaque quos dolores!
        </p>
      </div>
    </div>
  );
}

export default About;
