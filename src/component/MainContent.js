import React, { useContext, useEffect } from "react";
import n64 from "../assets/img/n64.jpg";
import charactersContext from "../context/charactersContext";
import useGameOver from "../hooks/useGameOver";



export const MainContent = () => {

  const {setGameOver} = useGameOver();
  const {characters}= useContext(charactersContext);
  

  const isGamerOver = characters => characters.every(character => character.avaible === false);

  useEffect(() => {

    isGamerOver(characters)? setGameOver(true): setGameOver(false);
    
    return () => {
      
    }
  }, [characters])
  


  return (
    <div>
      <img src={n64} alt="Lv-N64" className="w-full"></img>
    </div>
  );
};


