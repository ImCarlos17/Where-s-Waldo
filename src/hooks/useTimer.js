import { useState, useEffect, useRef } from "react";

const useTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  

  const timer = useRef(0)

  useEffect(() => {
    timer.current= setInterval(() => {
      setSeconds(prevState=> prevState + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      if(minutes === 59 && seconds === 59){
        setHours(prevState=> prevState + 1);
        setMinutes(0);
        setSeconds(0);
      } 

    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [seconds,minutes,hours]);

  const stopTime = () => clearInterval(timer.current);  

  return {
    minutes,
    seconds,
    hours,
    stopTime,
  };
};

export default useTimer;
