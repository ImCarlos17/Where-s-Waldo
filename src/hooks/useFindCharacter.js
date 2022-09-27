import { useState, useEffect, useContext } from "react";
import charactersContext from "../context/charactersContext";
import useClientPosition from "./useClientPosition";

const useFindCharacter = () => {
  const position = useClientPosition();
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const { setCharacters } = useContext(charactersContext);

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

  useEffect(() => {
    if (currentCharacter) {
      const authentication = authCharacter(currentCharacter)
        ? setCharacters((prevCharacters) =>
            prevCharacters.map((character) =>
              character.id === currentCharacter.id
                ? { ...character, avaible: false }
                : character
            )
          )
        : null;
    }

    return () => {};
  }, [currentCharacter]);

  return { currentCharacter, setCurrentCharacter };
};

export default useFindCharacter;
