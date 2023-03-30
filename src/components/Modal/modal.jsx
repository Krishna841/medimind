import "./modal.scss";
import { useState } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-box">
            <component />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
