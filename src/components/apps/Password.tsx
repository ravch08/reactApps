import { useState } from "react";

import BackButton from "../features/BackToHome.tsx";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const password = "5487";

const Password = () => {
  const [pin, setPin] = useState<number[]>([]);
  const [status, setStatus] = useState<string>("");

  const handlePinSelection = (num: number) => {
    setPin((prev) => [...prev, num]);
  };

  const checkPassword = () => {
    if (pin.length === 4) {
      if (pin.join("") === password) {
        setStatus("Correct Password");
        setPin([]);
      } else {
        setStatus("Incorrect Password");
        setPin([]);
      }
    }
  };

  const resetPassword = () => {
    setPin([]);
    setStatus("");
  };

  return (
    <section className="section">
      <div className="container mx-auto">
        <BackButton />
        <div className="flex flex-col ">
          <h2 className="main-heading">Check Password</h2>
          <p className="mx-auto my-12 flex h-12 w-1/3 items-center justify-center rounded-md bg-blue-100 px-12 py-2 text-center text-xl">
            {status ? status : pin}
          </p>
          <div className="mx-auto flex w-[35%] flex-wrap items-center justify-center gap-2">
            {numbers?.map((number) => (
              <button
                key={number}
                className="btn-link w-[30%]"
                onClick={() => handlePinSelection(number)}
              >
                {number}
              </button>
            ))}
            <button onClick={checkPassword} className="btn-link2 w-[30%]">
              Submit
            </button>
            <button onClick={resetPassword} className="btn-link2 w-[30%]">
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
