import { useState } from "react";

import BackButton from "../features/BackToHome.tsx";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "5487";

const Password = () => {
  const [pin, setPin] = useState<number[]>([]);

  const handlePinSelection = (num: number) => {
    setPin((prev) => [...prev, num]);
  };

  const checkPassword = () => {
    if (pin.length === 4) {
      if (pin.join("") === password) {
        console.log("Correct Password");
        setPin([]);
      } else {
        console.log("Incorrect Password");
        setPin([]);
      }
    }
  };

  return (
    <section className="section">
      <div className="container mx-auto mx-auto">
        <BackButton />
        <div className="flex flex-col ">
          <h2 className="mb-12 text-center font-serif text-5xl">
            Check Password
          </h2>
          <p className="mx-auto my-12 h-12 w-1/3 bg-slate-100 px-12 py-2 text-center text-xl">
            {pin}
          </p>
          <div className="mx-auto flex w-[35%] flex-wrap items-center gap-2">
            {numbers?.map((number) => (
              <button
                key={number}
                className="app-link w-[30%]"
                onClick={() => handlePinSelection(number)}
              >
                {number}
              </button>
            ))}
            <button
              className="app-link w-[30%] bg-slate-800"
              onClick={checkPassword}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
