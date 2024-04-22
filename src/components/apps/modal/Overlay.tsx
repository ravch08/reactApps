import ReactDOM from "react-dom";
import { closeModalProp } from "./Modal";

const Overlay = ({ closeModal }: closeModalProp) => {
  return ReactDOM.createPortal(
    <div
      onClick={closeModal}
      className="absolute left-0 top-0 z-0 h-screen w-full bg-black opacity-85"
    ></div>,
    document.getElementById("overlay")!,
  );
};

export default Overlay;
