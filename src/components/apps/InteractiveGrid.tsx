import { useEffect, useState } from "react";
import BackToHome from "../features/BackToHome.tsx";

const shapeOfBox = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
];

const lengthOfBox = shapeOfBox
  .map((col) => col.filter((item) => item))
  .flat().length;

const InteractiveGrid = () => {
  const [gridIdArr, setGridIdArr] = useState<string[]>([]);
  const [shouldRemove, setShouldRemove] = useState(false);

  const handleClick = (colId: number, itemId: number) => {
    const gridArrCopy = [...gridIdArr];

    if (
      gridArrCopy.length <= lengthOfBox &&
      !gridArrCopy.includes(`${colId}${itemId}`)
    ) {
      gridArrCopy.push(`${colId}${itemId}`);

      if (gridArrCopy.length === lengthOfBox) {
        setShouldRemove(true);
      }

      setGridIdArr(gridArrCopy);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (shouldRemove) {
      interval = setInterval(() => {
        setGridIdArr((prevGridIdArr) => {
          const newGridIdArr = [...prevGridIdArr];
          newGridIdArr.shift();

          if (newGridIdArr.length === 0) {
            setShouldRemove(false);
            clearInterval(interval);
          }

          return newGridIdArr;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [shouldRemove]);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Interactive Grid">
        <div className="container mx-auto flex flex-col items-center">
          <div className="mb-12 flex flex-col items-center justify-center">
            <h2 className="main-heading">Interactive Grid</h2>

            <div className="grid grid-cols-3 gap-2">
              {shapeOfBox?.map((col, colId) =>
                col.map((val, itemId) => (
                  <div
                    key={`${colId}${itemId}`}
                    onClick={() => handleClick(colId, itemId)}
                    className={`h-16 w-16 rounded-sm border border-blue-600 transition-colors duration-300 ease-in-out ${gridIdArr.includes(`${colId}${itemId}`) ? "bg-blue-500" : "bg-none"}`}
                    style={{
                      opacity: val ? 1 : 0,
                      cursor: val ? "pointer" : "initial",
                    }}
                  ></div>
                )),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveGrid;
