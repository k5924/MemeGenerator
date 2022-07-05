import React from "react";
import "../assets/css/meme.css";
import memeData from "../data/memeData";

export default function Meme(){
  const [memeImage, setMemeImage] = React.useState("");
  
  function getMemeImage(){
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  };

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text"/>
        <input type="text" className="form--input" placeholder="Bottom Text"/>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
        {memeImage && <img className="meme--image" src={memeImage} alt="meme"/>}
    </main>
  );
};
