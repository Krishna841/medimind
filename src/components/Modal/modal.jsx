import "./modal.scss";

const Modal = ({ modal, setModal, children }) => {
  // const [showmodal, setShowModal] = useState(modal);

  // const toggleModal = () => {
  //   setShowModal(!showmodal);
  // };
  return (
    <>
      {/* <div className={modal ? "modal" : "none"} id="modal">
        <div
          className="overlay"
          onClick={() => {
            document.getElementById("modal").style.display = "none";
          }}
        ></div>
      </div> */}
      {modal ? (
        <div className="modal" id="modal">
          <div className="overlay" onClick={setModal(false)}></div>
          <div className="modal-box">{children}</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
