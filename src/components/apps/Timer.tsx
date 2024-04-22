import { useEffect, useState } from "react";
import BackToHome from "../features/BackToHome";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [timerID, setTimerID] = useState<number | null>(null);

  const handleStart = () => {
    if (timerID === null) {
      const myInterval = setInterval(() => setCount((prev) => prev + 1), 1000);
      setTimerID(myInterval);
    }
  };

  const handleReset = () => {
    if (timerID !== null) {
      clearInterval(timerID);
      setTimerID(null);
    }
    setCount(0);
  };

  const handlePause = () => {
    if (timerID !== null) {
      clearInterval(timerID);
      setTimerID(null);
    }
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
        <div className="container">
          <p className="text-center text-2xl">{count}</p>

          <div className="mt-12 flex items-center justify-center gap-2">
            <button onClick={handleStart} className="btn-link">
              Start
            </button>
            <button onClick={handleReset} className="btn-link">
              Reset
            </button>
            <button onClick={handlePause} className="btn-link">
              Pause
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timer;
