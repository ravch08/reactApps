import { create } from "zustand";
import { questions } from "../../../utils/data";

export type QuestionsProps = {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
};

export type IntialStateProps = {
  points: number;
  index: number;
  answer: number | null;
  status: "loading" | "ready" | "active" | "finished" | "error";
  questions: QuestionsProps[];
  currentQuestion: QuestionsProps | null;
};

export type StateFnsProps = {
  startQuiz: () => void;
  checkAnswer: (id: number) => void;
  nextQuestion: () => void;
  endQuiz: () => void;
  readyQuiz: () => void;
};

const initialState: IntialStateProps = {
  points: 0,
  index: 0,
  status: "ready",
  answer: null,
  questions: questions,
  currentQuestion: null,
};

type StateProps = IntialStateProps & StateFnsProps;

export const useQuestionsStore = create<StateProps>((set, get) => ({
  ...initialState,
  startQuiz: () =>
    set((state) => ({
      status: "active",
      currentQuestion: state.questions[state.index],
    })),

  checkAnswer: (optID: number) => {
    const question = get().questions[get().index];
    set({ answer: optID });

    if (optID === question.correctOption) {
      set((state) => ({ points: state.points + question.points }));
    } else {
      set((state) => ({
        points: state.points,
      }));
    }
  },

  nextQuestion: () =>
    set((state) => ({
      answer: null,
      index: state.index + 1,
      currentQuestion: state.questions[state.index + 1],
    })),

  endQuiz: () =>
    set({
      status: "finished",
    }),

  readyQuiz: () => set(initialState),
}));
