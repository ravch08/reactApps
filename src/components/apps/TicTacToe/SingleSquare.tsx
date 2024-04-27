type SingleSquareProps = {
  id: number;
  squares: string[];
  handleClick: () => void;
};

const SingleSquare = ({ id, handleClick, squares }: SingleSquareProps) => {
  return (
    <div
      onClick={handleClick}
      className="flex h-20 w-20 items-center justify-center border border-slate-200 bg-amber-100"
    >
      {squares[id]}
    </div>
  );
};

export default SingleSquare;
