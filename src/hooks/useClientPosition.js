import { useState, useEffect, useContext } from "react";


const initialPosition = { x: null, y: null };

const useClientPosition = () => {
  const [clientPosition, setClientPosition] = useState(initialPosition);


  useEffect(() => {
    const handleClick = (e) => {
      const { pageX, pageY } = e;
      setClientPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [clientPosition]);

  return clientPosition;
};

export default useClientPosition;
