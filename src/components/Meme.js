import React from "react";
import "../assets/css/meme.css";


export default function Meme(){

  const [meme, setMeme] = React.useState ({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, []);

  
  function getMemeImage(){
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }) );
  };

  function handleChange(event){
    const {name, value} = event.target;
    setMeme(prevMemeData => ({
      ...prevMemeData,
      [name]: value
    }));
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text" 
          className="form--input" 
          placeholder="Top Text"
          value={meme.topText}
          name="topText"
          onChange={handleChange}
        />
        <input 
          type="text" 
          className="form--input" 
          placeholder="Bottom Text"
          value={meme.bottomText}
          name="bottomText"
          onChange={handleChange}
        />
        <button 
          className="form--button" 
          onClick={getMemeImage}>
          Get a new meme image  🖼
        </button>
      </div>
          {meme.randomImage && 
        <div className="meme">
          <img className="meme--image" 
            src={meme.randomImage} 
            alt="meme"
            />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
          }
    </main>
  );
};
