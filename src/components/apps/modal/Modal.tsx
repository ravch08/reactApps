import ReactDOM from "react-dom";

export type closeModalProp = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: closeModalProp) => {
  return ReactDOM.createPortal(
    <div className="absolute left-1/2 top-1/2 z-10 flex w-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-start rounded-md bg-amber-300 p-6">
      <h2 className="mb-4 text-2xl font-bold">Main Modal Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet
        recusandae impedit rerum illum cumque reiciendis quo natus iste dolorem
        nisi porro dolorum quam voluptatibus, aliquid perferendis deleniti iure
        temporibus placeat iusto commodi provident voluptate laborum possimus?
        <br />
        <br />
        Ratione quibusdam sequi fugiat veritatis odio quis neque modi nobis
        corporis rerum possimus molestias hic, tempore aspernatur optio
        molestiae iste eius cumque recusandae.
      </p>

      <button onClick={closeModal} className="btn-primary mt-6">
        Close
      </button>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default Modal;
