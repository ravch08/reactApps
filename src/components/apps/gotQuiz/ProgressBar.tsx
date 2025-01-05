export type ProgressBarProps = {
  index: number;
  points: number;
  maxPoints: number;
  numOfQuestions: number;
};

const ProgressBar = ({
  index,
  maxPoints,
  points,
  numOfQuestions,
}: ProgressBarProps) => {
  return (
    <article className="mt-12 w-full">
      <div className="flex items-center justify-center gap-4">
        <span>
          <strong>Points:</strong>
        </span>
        <span>
          {points}/{maxPoints}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <progress
          value={index + 1}
          max={numOfQuestions}
          className="w-full appearance-none bg-white"
        >
          {index + 1}
        </progress>

        <span className="text-lg font-bold">{index + 1}</span>
      </div>
    </article>
  );
};

export default ProgressBar;
