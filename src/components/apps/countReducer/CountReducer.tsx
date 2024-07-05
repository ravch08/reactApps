import { FormEvent, useReducer, useState } from "react";
import { ActionCreators, initialState } from "./ActionCreators";

import BackButton from "../../features/BackToHome.tsx";

type ActionProps = {
  type: string;
  payload: number;
};

function counterReducer(state = initialState, action: ActionProps) {
  switch (action.type) {
    case ActionCreators.INCREMENT:
      if (!action.payload) return state;
      return {
        ...state,
        count: parseInt(state.count) + parseInt(action.payload),
      };

    case ActionCreators.DECREMENT:
      if (!action.payload) return state;
      return {
        ...state,
        count: parseInt(state.count) - parseInt(action.payload),
      };

    default:
      return state;
  }
}

const CountReducer = () => {
  const [payloadNum, setPayloadNum] = useState(1);
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <section className="section">
      <div className="container mx-auto flex flex-col">
        <BackButton />
        <div className="mb-16 flex flex-col items-center justify-around">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Counter Reducer
          </h2>

          <input
            id="payload"
            type="number"
            value={payloadNum}
            onChange={(e: FormEvent) => setPayloadNum(parseInt(e.target.value))}
            className="mb-12 rounded-md bg-slate-200 p-2"
          />
          <div className="mb-16 flex gap-8">
            <button
              className="btn-primary"
              onClick={() =>
                dispatch({
                  type: ActionCreators.INCREMENT,
                  payload: payloadNum,
                })
              }
            >
              Increment
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                dispatch({
                  type: ActionCreators.DECREMENT,
                  payload: payloadNum,
                })
              }
            >
              Decrement
            </button>
          </div>
          <p className="text-xl">
            You clicked <strong className="text-lg">{state.count}</strong> times
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountReducer;
