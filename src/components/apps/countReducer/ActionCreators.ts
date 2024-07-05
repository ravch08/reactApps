type InitialStateProps = {
  count: number;
};

type ActionCreatorsProps = {
  INCREMENT: string;
  DECREMENT: string;
};

export const initialState: InitialStateProps = {
  count: 0,
};

export const ActionCreators: ActionCreatorsProps = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};
