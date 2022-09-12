import React, {useContext, useEffect} from "react";
import charactersContext from "../context/charactersContext";
import n64 from "../assets/img/n64.jpg";
import useFindCharacter from "../hooks/useFindCharacter";

export const MainContent = () => {
  const {characters, setCharacters} = useContext(charactersContext);
  const currentCharacter = useFindCharacter();
  console.log(characters, "Characters")
 
  
  
  useEffect(() => {
    
    
    if(currentCharacter) setCharacters((prevCharacters)=> 
      prevCharacters.map((character)=> character.id === currentCharacter.id ? { ...character,
      avaible: false} : character ))
      
    
    return () => {  
    }
  }, [currentCharacter])
  
  
  
  
  return (
    <div>
      <img src={n64} alt="Lv-N64" className="w-full"></img>
    </div>
  );
};


