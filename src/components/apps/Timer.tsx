import { useEffect, useState } from "react";

import BackToHome from "../features/BackToHome";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerID, setTimerID] = useState<number | null>(null);

  if (seconds >= 60) {
    setMinutes((prev) => prev + 1);
    setSeconds(0);
  }

  if (minutes >= 60) {
    setHours((prev) => prev + 1);
    setMinutes(0);
  }

  const startTimer = () => {
    if (timerID === null) {
      const myInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);

      setTimerID(myInterval);
    }
  };

  const pauseTimer = () => {
    if (timerID !== null) {
      clearInterval(timerID);
      setTimerID(null);
    }
  };

  const resetTimer = () => {
    clearInterval(timerID!);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimerID(null);
  };

  useEffect(() => {
    return () => {
      if (timerID !== null) {
        clearInterval(timerID);
      }
    };
  }, [timerID]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Timer">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="main-heading">Timer</h1>
          <div className="flex items-center gap-2">
            <span className="text-3xl">{hours < 10 ? `0${hours}` : hours}</span>
            <span className="text-3xl">:</span>
            <span className="text-3xl">
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span className="text-3xl">:</span>
            <span className="text-3xl">
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <button onClick={startTimer} className="btn-primary">
              Start Timer
            </button>
            <button onClick={resetTimer} className="btn-primary">
              Reset Timer
            </button>
            <button onClick={pauseTimer} className="btn-primary">
              Pause Timer
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timer;
