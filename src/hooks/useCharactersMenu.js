import { useEffect,useState } from "react";
import useClientPosition from "./useClientPosition";

const useCharactersMenu = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);

  const handleCharactersMenu = (e) => {
      e.preventDefault();
      setPoint({ x: e.pageX, y: e.pageY });
      setShowMenu(true);
    };
  
  
  const handleClick =()=> showMenu ? setShowMenu(false) : null;


  useEffect(() => {
      document.addEventListener("click", handleClick);
      document.addEventListener("click", handleCharactersMenu);
    return () => {
        document.removeEventListener("click", handleClick);
        document.removeEventListener("click", handleCharactersMenu);
    };
  });
  return { point, showMenu };
};

export default useCharactersMenu;