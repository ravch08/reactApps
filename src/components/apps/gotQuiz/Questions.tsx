import { NextQuestion, SubmitBtn } from "../../utils/helper";
import { QuestionsProps, useQuestionsStore } from "./store/useStore";

export type QuestionProps = {
  index: number;
  answer: number;
  question: QuestionsProps;
  numOfQuestions: number;
};

const Questions = ({
  question,
  answer,
  numOfQuestions,
  index,
}: QuestionProps) => {
  const hasAnswered = answer !== null;
  const { checkAnswer, endQuiz } = useQuestionsStore((state) => state);

  return (
    <>
      <section className="w-2/3">
        <h2 className="mb-12 text-2xl">{question?.question}</h2>
        <div className="flex flex-col items-center gap-4">
          {question?.options.map((option, idx) => {
            return (
              <button
                key={option}
                disabled={hasAnswered}
                className={`btn btn-option ${idx === answer ? "answer" : ""} ${hasAnswered ? (idx === question.correctOption ? "correct" : "incorrect") : ""}`}
                onClick={() => checkAnswer(idx)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>

      {index < numOfQuestions - 1 ? (
        <NextQuestion answer={answer} />
      ) : (
        <SubmitBtn dispatch={endQuiz} />
      )}
    </>
  );
};

export default Questions;
