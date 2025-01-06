type SingleSquareProps = {
  id: number;
  squares: string[];
  handleClick: () => void;
};

const SingleSquare = ({ id, handleClick, squares }: SingleSquareProps) => {
  return (
    <div
      onClick={handleClick}
      className="flex h-20 w-20 items-center justify-center border border-blue-200 bg-blue-600 text-white "
    >
      {squares[id]}
    </div>
  );
};

export default SingleSquare;
