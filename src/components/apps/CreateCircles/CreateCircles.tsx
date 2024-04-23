import { useState } from "react";
import BackToHome from "../../features/BackToHome";
import Circle from "./Circle";

type CircleProps = {
  xCoor: number;
  yCoor: number;
  diameter: number;
};

const CreateCircles = () => {
  const [circles, setCircles] = useState<CircleProps[]>([]);

  function makeCircles(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    const x = e.clientX;
    const y = e.clientY;

    const randomDiameter = Math.floor(Math.random() * 80 + 20);

    if (circles.length >= 2) {
      setCircles([]);
    } else {
      setCircles((prev) => [
        ...prev,
        { xCoor: x, yCoor: y, diameter: randomDiameter },
      ]);
    }
  }

  if (circles.length === 2) {
    const [{ xCoor: x1, yCoor: y1 }, { xCoor: x2, yCoor: y2 }] = circles;
    const [{ diameter: dia1 }, { diameter: dia2 }] = circles;

    const hypo = Math.hypot(x2 - x1, y2 - y1);

    if (hypo < dia1 / 2 + dia2 / 2) {
      console.log(`Circles are Intersecting`);
    } else {
      console.log(`Circles are not Intersecting`);
    }
  }

  return (
    <>
      <BackToHome />
      <section
        className="relative h-[90vh]"
        onClick={(e) => makeCircles(e)}
        aria-labelledby="Create Circles"
      >
        {circles.length > 0 && circles.length <= 2
          ? circles?.map((circle) => (
              <Circle
                key={circle.xCoor}
                top={circle.yCoor}
                left={circle.xCoor}
                diameter={circle.diameter!}
              />
            ))
          : null}
      </section>
    </>
  );
};

export default CreateCircles;
