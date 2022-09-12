import { useState, useEffect } from "react";

const useTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);

  let timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  const stopTime = () => clearInterval(timer);

  return {
    minutes,
    seconds,
    hours,
    stopTime,
  };
};

export default useTimer;
