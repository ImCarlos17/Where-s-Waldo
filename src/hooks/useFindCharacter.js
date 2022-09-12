import { useState, useEffect, useContext } from "react";
import charactersContext from "../context/charactersContext";
import useClientPosition from "./useClientPosition";


const useFindCharacter = () => {
  const position = useClientPosition();
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const {characters} = useContext(charactersContext)


  useEffect(() => {
    const authCharacter = (character) => {
      if (
        position.x >= character.width.widthInit &&
        position.x <= character.width.widthEnd &&
        position.y >= character.height.heightInit &&
        position.y <= character.height.heightEnd
      ) {
        return character;
      } else {
        return null;
      }
    };

  
    

     setCurrentCharacter((prevCharacter)=> characters.find( (character)=> character === authCharacter(character) ))

  
        
 
    return () => {};
  }, [position]);

  return currentCharacter;
};

export default useFindCharacter;
