import { useState } from "react";
import "./landing.scss";

import clock from "../../assets/clock.svg";
import Signup from "./signup";
import Modal from "../Modal/modal";
import { Link } from "react-router-dom";

const Landing = () => {
  //   const [showModal, setShowModal] = useState(false);
  //   const toggleModal = () => {
  //     return setShowModal(!showModal);
  //   };
  return (
    <div className="landing">
      {/* <Modal showModal={showModal} setShowModal={toggleModal}>
        <Signup />
      </Modal> */}
      <div className="landing_title">Medimind</div>
      <div className="landing_box">
        <div className="landing_box_text">
          <div className="landing_box_text_t1">
            Take your medicines on time.
          </div>
          <div className="landing_box_text_t2">Every Time.</div>
          <div className="landing_box_text_container">
            <div className="landing_box_text_container_t">
              Look after your family's medical needs. With Medimind medicine
              tracking becomes easy.
            </div>
            <div className="landing_box_text_container_btn">
              <Link to="/login" id="landing_login">
                Login
              </Link>
              <Link to="/signup" id="landing_signup">
                Signup
              </Link>
            </div>
          </div>
        </div>
        <div className="landing_box_img">
          <img src={clock} alt="clock" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
