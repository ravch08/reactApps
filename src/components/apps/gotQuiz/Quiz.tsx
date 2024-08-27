import {
  BackToHome,
  ErrorMessage,
  FinishingScreen,
  LoadingMessage,
  ProgressBar,
  StartingScreen,
} from "../../utils/helper";
import Questions from "./Questions";
import { useQuestionsStore } from "./store/useStore";

const Quiz = () => {
  const {
    startQuiz,
    questions,
    currentQuestion,
    answer,
    index,
    points,
    status,
  } = useQuestionsStore((state) => state);

  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  const percent = (points / maxPoints) * 100;

  return (
    <>
      <BackToHome />
      <section aria-labelledby="GOT Quiz">
        <div className="container flex w-full flex-col items-center">
          <div className="mb-12 flex w-full flex-col items-center justify-center">
            {status === "loading" ? <LoadingMessage /> : null}
            {status === "error" ? <ErrorMessage /> : null}

            {status === "ready" ? (
              <StartingScreen
                dispatch={startQuiz}
                numOfQuestions={numOfQuestions}
              />
            ) : null}

            {status === "active" ? (
              <>
                <ProgressBar
                  index={index}
                  points={points}
                  maxPoints={maxPoints}
                  numOfQuestions={numOfQuestions}
                />
                <Questions
                  index={index}
                  answer={answer!}
                  question={currentQuestion!}
                  numOfQuestions={numOfQuestions}
                />
              </>
            ) : null}

            {status === "finished" ? (
              <FinishingScreen
                points={points}
                percent={percent}
                maxPoints={maxPoints}
              />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Quiz;
