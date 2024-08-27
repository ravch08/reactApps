import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

import BackToHome from "../features/BackToHome";

const countryData = { India: "New Delhi", China: "Beijing", Germany: "Berlin" };

function shuffleArray(arr: string[]) {
  if (arr.length === 0) throw new Error(`Array is empty!`);

  let currentIndex = arr.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}

const newData: string[] = shuffleArray(Object.entries(countryData).flat());

const CountryCapitalGame = () => {
  const [options, setOptions] = useState(newData);
  const [optionsExist, setOptionsExist] = useState<boolean | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleClick = (value: string) => {
    const selectedOptionsCopy = [...selectedOptions];

    if (selectedOptionsCopy.length >= 2) return;
    if (!selectedOptionsCopy.includes(value)) selectedOptionsCopy.push(value);

    if (selectedOptionsCopy.length === 2) {
      const values = Object.entries(countryData).filter(
        (item) =>
          item.includes(selectedOptionsCopy[0]) &&
          item.includes(selectedOptionsCopy[1]),
      );

      if (values.length > 0) {
        const remainingValues = options
          ?.filter(
            (item) =>
              !item.includes(selectedOptionsCopy[0]) &&
              !item.includes(selectedOptionsCopy[1]),
          )
          .flat();

        setTimeout(() => {
          setOptions(remainingValues);
        }, 1000);
      }

      setOptionsExist(values.length > 0 ? true : false);

      setTimeout(() => {
        setSelectedOptions([]);
        setOptionsExist(null);
      }, 1000);
    }

    setSelectedOptions(selectedOptionsCopy);
  };

  const handleReset = () => {
    const shuffledData = shuffleArray(newData);

    setOptions(shuffledData);
    setSelectedOptions([]);
    setOptionsExist(null);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Pagination">
        <div className="container flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="mb-12 text-4xl font-bold">Country Capital Game</h2>

            <div className="flex items-center gap-2">
              {options?.map((item) => (
                <Fragment key={item}>
                  <button
                    onClick={() => handleClick(item)}
                    className={`rounded-md  px-4 py-2 text-sm text-white ${selectedOptions.includes(item) && optionsExist ? "bg-green-600" : selectedOptions.includes(item) && optionsExist === false ? "bg-red-600" : selectedOptions.includes(item) ? "bg-blue-500" : "bg-slate-600"}`}
                  >
                    {item}
                  </button>
                </Fragment>
              ))}

              {options.length === 0 ? (
                <p className="text-xl">
                  Congratulations!! You Won, Wanna try Again?
                </p>
              ) : null}
            </div>
            <button className="btn-page mt-12" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryCapitalGame;
