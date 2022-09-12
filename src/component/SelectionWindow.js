import React from "react";
import characters from "../util/characters";
import OptionsCharacters from "./OptionsCharacters";

const SelectionWindow = () => {
  return (
    <div className="border-black border-2 rounded w-52 h-36 w-min bg-black opacity-90">
      <OptionsCharacters character={characters.starFox} />
      <OptionsCharacters character={characters.zelda} />
      <OptionsCharacters character={characters.luigi2} />
    </div>
  );
};

export default SelectionWindow;
