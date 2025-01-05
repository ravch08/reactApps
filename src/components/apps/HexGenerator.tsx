import { useEffect, useState } from "react";
import BackToHome from "../features/BackToHome";

const alphaNumbers = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const HexGenerator = () => {
  const [hexColor, setHexColor] = useState<string>("");

  const handleHexColor = () => {
    const hexArr = [];

    for (let i = 0; i < 6; i++) {
      const randomNum = Math.ceil(Math.random() * (alphaNumbers.length - 1));
      hexArr[i] = alphaNumbers[randomNum];
    }

    const newStr = hexArr.join("").toLowerCase();
    setHexColor(newStr);
  };

  useEffect(() => {
    handleHexColor();
  }, []);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Random Hex Generator">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="main-heading">Random Hex Gerator</h1>

          <div
            style={{ backgroundColor: `#${hexColor}` }}
            className="mb-12 h-[300px] w-[600px] rounded-md"
          ></div>

          <button className="btn-primary" onClick={handleHexColor}>
            Change HexColor
          </button>
        </div>
      </section>
    </>
  );
};

export default HexGenerator;
