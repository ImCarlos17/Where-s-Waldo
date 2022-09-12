import React, {useContext} from "react";
import Character from "./Character";
import charactersContext from "../context/charactersContext";

const NavBar = () => {

  const {characters} = useContext(charactersContext);


  return (
    <div className="flex gap-36 items-center">
      {characters.map((character)=> <Character key={character.id} character={character}/>)}
    </div>
  );
};

export default NavBar;
