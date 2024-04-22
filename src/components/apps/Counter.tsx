import { useState } from "react";
import BackToHome from "../features/BackToHome";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount((prev) => prev - 1);
  const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Counter">
        <div className="container flex items-center justify-center ">
          <div className="flex items-center gap-4">
            <button className="btn-link" onClick={handleDecrement}>
              Decrease
            </button>
            <span className="w-16 text-center text-3xl font-bold">{count}</span>
            <button className="btn-link" onClick={handleIncrement}>
              Increase
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
