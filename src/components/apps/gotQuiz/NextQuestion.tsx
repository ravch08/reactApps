import { useQuestionsStore } from "./store/useStore";

export type NextQuestionProps = {
  answer: number;
};

const NextQuestion = ({ answer }: NextQuestionProps) => {
  const nextQuestion = useQuestionsStore((state) => state.nextQuestion);

  if (answer === null) return;

  return (
    <button className="btn btn-primary" onClick={nextQuestion}>
      Next Question
    </button>
  );
};

export default NextQuestion;
