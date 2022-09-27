import React from "react";

const OptionsCharacters = ({ character, handleCharacter }) => {
  const { name, img, avaible } = character;

  return (
    <button
      onClick={() => handleCharacter(character)}
      disabled={!avaible}
      style={avaible ? {} : { opacity: "40%" }}
      className="w-52 h-12 text-white rounded flex justify-center gap-9 items-center text-lg hover:bg-slate-400">
      <img src={img} alt="img-character" className="w-7 h-10" />
      {name}
    </button>
  );
};

export default OptionsCharacters;
