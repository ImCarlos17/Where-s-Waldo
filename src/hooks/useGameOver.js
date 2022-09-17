import {useState,useEffect} from 'react'

import useTimer from './useTimer';

const useGameOver = () => {
const [gameOver, setGameOver] = useState(false);
const {setStop} = useTimer();

useEffect(() => {

    if(gameOver){
        setStop(true)
        console.log("Juego Terminado")
       
    }else{
        console.log("SIGUE JUGANDO")
    }

  return () => {}
}, [gameOver])


  return {gameOver, setGameOver}
}

export default useGameOver