import { useReducer, useState } from "react";
import BackButton from "../features/BackToHome";

const initialState = {
  count: 0,
};

type StateType = {
  count: number;
};

enum ActionKind {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
  INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT",
}

type ActionType = {
  payload?: number;
  type: ActionKind;
};

const counterReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case ActionKind.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case ActionKind.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }

    case ActionKind.INCREMENTBYAMOUNT: {
      return { ...state, count: state.count + action.payload! };
    }
  }
};

const CountReducer = () => {
  const [payloadNum, setPayloadNum] = useState(1);
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <section aria-labelledby="Counter Reducer">
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
            className="mb-12 w-24 rounded-md bg-slate-200 p-2"
            onChange={(e) => setPayloadNum(parseInt(e.target.value))}
          />

          <p className="text-xl">
            You clicked <strong className="text-lg">{state.count}</strong> times
          </p>

          <div className="mt-12 flex items-center gap-4">
            <button
              className="btn-primary"
              onClick={() => dispatch({ type: ActionKind.DECREMENT })}
            >
              Decrement
            </button>
            <button
              className="btn-primary"
              onClick={() => dispatch({ type: ActionKind.INCREMENT })}
            >
              Increment
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                dispatch({
                  payload: payloadNum,
                  type: ActionKind.INCREMENTBYAMOUNT,
                })
              }
            >
              Increment By Amount
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountReducer;
