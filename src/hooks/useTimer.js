import { useState, useEffect, useRef, useMemo } from "react";

const useTimer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [timeRecord, setTimeRecord] = useState(0);

  const timer = useRef(0);
  const timeStarted = useMemo(() => new Date().getTime(), []);

  const getSeconds = () => {
    const currentTime = new Date().getTime();
    const diff = currentTime - timeStarted;
    const secs = Math.floor((diff % (1000 * 60 * 60)) / 1000);
    return secs;
  };

  const getMinutes = () => {
    const currentTime = new Date().getTime();
    const diff = currentTime - timeStarted;
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return minutes;
  };

  const getHours = () => {
    const currentTime = new Date().getTime();
    const diff = currentTime - timeStarted;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return hours;
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeRecord(getSeconds());
      console.log(timeRecord);

      if (seconds === 59) {
        setMinutes(getMinutes());
        setSeconds(0);
      }

      if (minutes % 60 === 0) {
        setHours(getHours());
        setMinutes(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, [seconds, minutes, hours, timeRecord]);

  const stopTime = () => clearInterval(timer.current);

  return {
    minutes,
    seconds,
    hours,
    timeRecord,
    stopTime,
  };
};

export default useTimer;
