import React, { useState, createContext, useEffect} from "react";
import getCharacters from "../functions/getCharacters";

const charactersContext = createContext();

const ProviderCharacterContext = ({ children }) => {
    

  const [characters, setCharacters] = useState(null);

  const updateCharactersState= ()=>{
    getCharacters().then((characters)=>{
      setCharacters(characters)
    })
  }

  useEffect(() => {
    
    updateCharactersState()
  
    return () => {
      
    }
  }, [])
  

  const data = { characters, setCharacters };

  return <charactersContext.Provider value={data}>{children}</charactersContext.Provider>;
};

export { ProviderCharacterContext };
export default charactersContext;