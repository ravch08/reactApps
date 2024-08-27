const SubmitBtn = ({ dispatch }: { dispatch: () => void }) => {
  return (
    <button className="btn btn-primary" onClick={dispatch}>
      Submit
    </button>
  );
};

export default SubmitBtn;
