import { useState } from "react";
import BackToHome from "../features/BackToHome";

type TPoint = {
  x: number;
  y: number;
};

const CreateCircles = () => {
  const [points, setPoints] = useState<TPoint[]>([]);
  const [popped, setPopped] = useState<TPoint[]>([]);

  const handleCircles = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    setPoints((prev) => [
      ...prev,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  };

  const handleUndo = () => {
    const newPoints = [...points];
    const newPopped = newPoints.pop();

    if (!newPopped) return;
    setPopped((prev) => [...prev, newPopped]);
    setPoints(newPoints);
  };

  const handleRedo = () => {
    if (popped.length > 0) {
      const newPopped = popped.pop();

      if (!newPopped) return;
      setPoints((prev) => [...prev, newPopped]);
    }
  };

  const handleReset = () => setPoints([]);

  return (
    <div className="flex h-screen w-full flex-col items-end justify-end">
      <BackToHome />

      <div className="absolute right-8 top-28 flex items-center gap-4">
        <button className="btn-primary" onClick={handleUndo}>
          Undo
        </button>
        <button className="btn-primary" onClick={handleRedo}>
          Redo
        </button>
        <button className="btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>

      <div
        onClick={handleCircles}
        className="flex h-[90vh] w-full bg-slate-400"
      >
        {points.map((point, idx) => (
          <div
            key={idx}
            className="absolute text-xl"
            style={{ top: `${point.y}px`, left: `${point.x}px` }}
          >
            😉
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCircles;
