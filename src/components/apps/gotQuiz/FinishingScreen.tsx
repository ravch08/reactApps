import { useQuestionsStore } from "./store/useStore";

export type FinishingScreenProps = {
  points: number;
  percent: number;
  maxPoints: number;
};

const FinishingScreen = ({
  points,
  maxPoints,
  percent,
}: FinishingScreenProps) => {
  const readyQuiz = useQuestionsStore((state) => state.readyQuiz);

  return (
    <section className="text-center">
      <p>
        You scored <strong>{points}</strong> points out of {maxPoints} |{" "}
        {Math.ceil(percent)}%.
      </p>

      <button className="btn btn-primary mt-12" onClick={readyQuiz}>
        Start Again
      </button>
    </section>
  );
};

export default FinishingScreen;
