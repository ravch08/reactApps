import { useState } from "react";
import BackToHome from "../../features/BackToHome";
import Modal from "./Modal";
import Overlay from "./Overlay";

const ShowModal = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleDisplayModal = () => {
    setDisplayModal(true);
  };

  const handleCloseModal = () => setDisplayModal(false);

  return (
    <>
      <BackToHome />
      <section aria-labelledby="Modal">
        <div className="container flex items-center justify-center">
          <button className="btn-link" onClick={handleDisplayModal}>
            Open Modal
          </button>

          {displayModal ? <Modal closeModal={handleCloseModal} /> : null}
          {displayModal ? <Overlay closeModal={handleCloseModal} /> : null}
        </div>
      </section>
    </>
  );
};

export default ShowModal;
