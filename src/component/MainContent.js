import React, { useContext, useEffect } from "react";
import n64 from "../assets/img/n64.jpg";
import charactersContext from "../context/charactersContext";
import gameOverContext from "../context/gameOverContext";

export const MainContent = () => {
  const { setGameOver } = useContext(gameOverContext);
  const { characters } = useContext(charactersContext);

  const isGamerOver = (characters) =>
    characters
      ? characters.every((character) => character.avaible === false)
      : null;

  useEffect(() => {
    isGamerOver(characters) ? setGameOver(true) : setGameOver(false);

    return () => {};
  }, [characters]);

  return (
    <div>
      <img src={n64} alt="Lv-N64" className="w-full"></img>
    </div>
  );
};
