type CircleProps = {
  top: number;
  left: number;
  diameter: number;
};

const Circle = ({ top, left, diameter }: CircleProps) => {
  const radius = diameter / 2;

  return (
    <div
      className="absolute rounded-full border-2 border-slate-700"
      style={{
        top: `${top - radius}px`,
        left: `${left - radius}px`,
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
    ></div>
  );
};

export default Circle;
