import React from "react";
import "../assets/css/meme.css";
import memeData from "../data/memeData";

export default function Meme(){

  const [meme, setMeme] = React.useState ({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  
  function getMemeImage(){
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: memesArray[randomNumber].url
    }) );
  };

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" placeholder="Top Text"/>
        <input type="text" className="form--input" placeholder="Bottom Text"/>
        <button className="form--button" onClick={getMemeImage}>Get a new meme image  🖼</button>
      </div>
        {meme.randomImage && <img className="meme--image" src={meme.randomImage} alt="meme"/>}
    </main>
  );
};
