import { useEffect, useState } from "react";

import BackToHome from "../../features/BackToHome";
import SingleSquare from "./SingleSquare";

const TicTacToe = () => {
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("Next turn is X");
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));

  const handleSquareClick = (idx: number) => {
    const newSquares = [...squares];

    if (newSquares[idx] || getWinner(squares)) return;

    isXTurn ? (newSquares[idx] = "X") : (newSquares[idx] = "O");

    setSquares(newSquares);
    setIsXTurn((prev) => !prev);
  };

  const handleResetGame = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus("Next turn is X");
  };

  const getWinner = (squareArr: string[]) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];

      if (
        squareArr[x] &&
        squareArr[x] === squareArr[y] &&
        squareArr[x] === squareArr[z]
      ) {
        return squareArr[x];
      }
    }

    return null;
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw! Please start again!!!");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Tic Tac Toe">
        <div className="container mx-auto flex items-center justify-center">
          <div className="grid h-60 w-60 grid-cols-3 grid-rows-3 bg-amber-200">
            <SingleSquare
              id={0}
              squares={squares}
              handleClick={() => handleSquareClick(0)}
            />
            <SingleSquare
              id={1}
              squares={squares}
              handleClick={() => handleSquareClick(1)}
            />
            <SingleSquare
              id={2}
              squares={squares}
              handleClick={() => handleSquareClick(2)}
            />
            <SingleSquare
              id={3}
              squares={squares}
              handleClick={() => handleSquareClick(3)}
            />
            <SingleSquare
              id={4}
              squares={squares}
              handleClick={() => handleSquareClick(4)}
            />
            <SingleSquare
              id={5}
              squares={squares}
              handleClick={() => handleSquareClick(5)}
            />
            <SingleSquare
              id={6}
              squares={squares}
              handleClick={() => handleSquareClick(6)}
            />
            <SingleSquare
              id={7}
              squares={squares}
              handleClick={() => handleSquareClick(7)}
            />
            <SingleSquare
              id={8}
              squares={squares}
              handleClick={() => handleSquareClick(8)}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-12 text-center text-xl font-semibold">{status}</p>
          <button className="btn-link inline-block" onClick={handleResetGame}>
            Restart the Game
          </button>
        </div>
      </section>
    </>
  );
};

export default TicTacToe;
