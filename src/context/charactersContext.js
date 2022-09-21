import React, { useState, createContext } from "react";

import zeldaImg from "../assets/img/zelda.png";
import luigiImg from "../assets/img/luigi2.png";
import starFoxImg from "../assets/img/starFox.png";

const luigi = {
  name: "Luigi",
  id: "Luigi",
  avaible: true,
  img: luigiImg ,
  width: { widthInit: 1370, widthEnd: 1418 },
  height: { heightInit: 1995, heightEnd: 2080 },
};

const zelda = {
  name: "Zelda",
  id: "Zelda",
  avaible: true,
  img: zeldaImg ,
  width: { widthInit: 535, widthEnd: 584 },
  height: { heightInit: 1894, heightEnd: 1977 },
};

const starFox = { 

  name: "starFox",
  id: "starFox",
  avaible: true,
  img: starFoxImg ,
  width: { widthInit: 211, widthEnd: 246 },
  height: { heightInit: 1814, heightEnd: 1846 },
}


const initialCharacters = [luigi, zelda, starFox];

const charactersContext = createContext();

const ProviderCharacterContext = ({ children }) => {
    

  const [characters, setCharacters] = useState(
    initialCharacters
  );

  const data = { characters, setCharacters };

  return <charactersContext.Provider value={data}>{children}</charactersContext.Provider>;
};

export { ProviderCharacterContext };
export default charactersContext;