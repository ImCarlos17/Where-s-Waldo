import React from "react";

const Character = ({ character, visibility }) => {
  const { name, img, avaible } = character;

  return (
    <div
      className="flex w-20 h-24 items-center justify-center gap-3"
      style={ avaible ? {} : {opacity: '40%'} }
    >
      <img
        src={img}
        alt={name}
        className="w-16 h-24 min-h-ful hover:w-24 hover:h-28 transition-all"
      />

      <span>{name}</span>
    </div>
  );
};

export default Character;
