import {useState,useEffect, useContext} from 'react'
import timerContext from '../context/timerContext';


const useGameOver = () => {
const [gameOver, setGameOver] = useState(false);

const {stopTime} = useContext(timerContext);

useEffect(() => {

    if(gameOver){
      stopTime() 
    }

  return () => {}
}, [gameOver])


  return {gameOver, setGameOver}
}

export default useGameOver