import {useContext} from "react";
import charactersContext from "../context/charactersContext";
import useCharactersMenu from "../hooks/useCharactersMenu";
import useFindCharacter from "../hooks/useFindCharacter";
import OptionsCharacters from "./OptionsCharacters";


const CharactersMenu = () => {
  
  const {characters} = useContext(charactersContext);
  const {showMenu, point} = useCharactersMenu();
  const {setCurrentCharacter} = useFindCharacter();


  return (
      showMenu && <div className="absolute border-black border-2 rounded  h-36 w-min bg-black opacity-90" style={{top: point.y, left:point.x}}>
      {characters.map((character)=> <OptionsCharacters handleCharacter={setCurrentCharacter} key={character.id} character={character}/>)}
    </div>
  );
};

export default CharactersMenu;
