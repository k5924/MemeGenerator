import React from "react";
import "../assets/css/navbar.css";
import logo from "../assets/images/Troll Face.png";

export default function Navbar(){
  return(
    <nav>
      <img className="nav--logo" src={logo} alt="troll face"/>
      <h3 className="nav--logoText">Meme Generator</h3>
      <h4 className="nav--titleText">React Course - Project 3</h4>
    </nav>
  );
};
