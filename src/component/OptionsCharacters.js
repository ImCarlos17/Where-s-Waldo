import React from "react";

const OptionsCharacters = ({ character }) => {
  const { name, img,id } = character;

  return (
    <div id = {id} className="w-52 h-12 text-white rounded flex justify-center gap-9 items-center text-lg hover:bg-slate-400">
      <img src={img} alt = "img-character" className="w-7 h-10" />
      {name}
    </div>
  );
};

export default OptionsCharacters;
