import "./login.scss";

import clock from "../../assets/clock.svg";
import arrow from "../../assets/arrow.svg";

const rotateHand = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const hand = document.getElementById("hand");

  const w = hand.offsetLeft + hand.offsetWidth / 2;
  const h = hand.offsetHeight;
  const x = w - mouseX;
  const y = h - mouseY;

  var angle = Math.atan2(y, x) * (180 / Math.PI);
  if (angle < 0) {
    angle = 360 + angle;
  }
  angle = angle - 90;

  hand.style.transform = `rotate(${angle}deg)`;
  hand.style.transformOrigin = "bottom center";
};

const Login = () => {
  return (
    <div className="login" onMouseMove={rotateHand}>
      <div className="login_text">
        <div className="login_text_title">Medimind</div>
        <div className="login_text_box">
          <div className="login_text_box_title">Login</div>
          <div className="login_text_box_input">
            <input type="text" placeholder="Email" id="login_input" />
            <input type="password" placeholder="Password" id="login_input" />
          </div>
          <div className="login_text_box_submit">
            <input type="button" value="Login" id="submit" />
            <div className="login_text_box_submit_forgot">forgotpassword?</div>
          </div>

          <input type="button" value="Sign Up" id="link_sign_up" />
        </div>
      </div>
      <div className="login_image">
        <img src={clock} alt="clock" height={550} width={550} />
        <img src={arrow} alt="arrow" id="hand" />
      </div>
    </div>
  );
};

export default Login;
