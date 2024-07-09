import { useState } from "react";
import BackToHome from "../features/BackToHome";

const initialGrid = [
  [1, 6, 5, 2],
  [2, 3, 1, 4],
  [6, 5, 4, 3],
];

const initialRevealedGrid = new Array(initialGrid.length)
  .fill("")
  .map(() => new Array(initialGrid[0].length).fill(false));

type TPrevClick = {
  row: number;
  col: number;
};

const MemoryGame = () => {
  const [grid] = useState(initialGrid);
  const [status, setStatus] = useState("");
  const [revealedGrid, setRevealedGrid] = useState(initialRevealedGrid);
  const [previousClick, setPreviousClick] = useState<TPrevClick | undefined>();

  const handleClick = (rowIndex: number, colIndex: number) => {
    if (revealedGrid[rowIndex][colIndex]) return;

    const clickedNumber = grid[rowIndex][colIndex];
    const revealedGridCopy = [...revealedGrid];

    revealedGridCopy[rowIndex][colIndex] = true;
    setRevealedGrid(revealedGridCopy);

    if (previousClick) {
      const previousClickNumber = grid[previousClick.row][previousClick.col];

      if (previousClickNumber !== clickedNumber) {
        setTimeout(() => {
          revealedGridCopy[rowIndex][colIndex] = false;
          revealedGridCopy[previousClick.row][previousClick.col] = false;
          setRevealedGrid([...revealedGridCopy]);
        }, 1000);
      } else {
        const hasWon = revealedGrid.flat().every((item) => item);
        hasWon ? setStatus("Congratulations! You've Won!") : null;
      }

      setPreviousClick(undefined);
    } else {
      setPreviousClick({
        row: rowIndex,
        col: colIndex,
      });
    }
  };

  const handleRestart = () => {
    setStatus("");
    setRevealedGrid(initialRevealedGrid);
    setPreviousClick(undefined);
  };

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Memory Game">
        <div className="container flex flex-col items-center">
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-12 text-4xl font-bold">Memory Game</h2>

            <div className="mb-12 flex flex-col gap-2">
              {grid?.map((gridRow, rowIndex) => (
                <div key={rowIndex} className="flex gap-2">
                  {gridRow?.map((rowItem, colIndex) => (
                    <div
                      key={colIndex}
                      onClick={() => handleClick(rowIndex, colIndex)}
                      className="mb-2 flex h-16 w-20 items-center justify-center gap-2 border border-slate-800 bg-neutral-800 text-white"
                    >
                      {revealedGrid[rowIndex][colIndex] ? rowItem : ""}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {status ? (
              <h3 className="mb-12 text-2xl font-medium">{status}</h3>
            ) : null}

            <button className="btn-page" onClick={handleRestart}>
              Restart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemoryGame;
