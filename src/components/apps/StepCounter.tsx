import { useState } from "react";

import BackButton from "../features/BackToHome.tsx";

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

const StepCounter = () => {
  const [step, setStep] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    step ? setCount((prev) => prev + step) : setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    step ? setCount((prev) => prev - step) : setCount((prev) => prev - 1);
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <BackButton />
        <div className="flex flex-col ">
          <h2 className="mb-12 text-center font-serif text-5xl">
            Step Counter
          </h2>

          <div className="mx-auto flex w-1/2 flex-col justify-center">
            <input
              max={10}
              id="range"
              type="range"
              value={step}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStep(parseInt(e.target.value))
              }
            />
            <span>{step}</span>
            <div className="form-control mx-auto">
              <button
                onClick={handleDecrement}
                className="mx-2 w-8 rounded-md bg-slate-500 p-2 text-white"
              >
                -
              </button>

              <input
                id="number"
                type="text"
                value={count}
                className="inputEl mx-auto mt-12 w-1/2 rounded-md"
                onChange={() => {}}
              />

              <button
                onClick={handleIncrement}
                className="mx-2 w-8 rounded-md bg-slate-500 p-2 text-white"
              >
                +
              </button>
            </div>
            <p className="mt-12 rounded-lg bg-zinc-800 py-4 text-center text-white">
              {`${day + count}th ${monthsArray[month - 1]}, ${year}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepCounter;
