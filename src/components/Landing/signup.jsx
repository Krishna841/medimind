import Modal from "../Modal/modal";
import "./signup.scss";

const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signup_title">Medimind</div>
        <div className="signup_box">
          <div className="signup_box_title">Sign Up</div>
          <div className="signup_box_input">
            <input type="email" placeholder="Email" id="signup_input" />
            <input type="text" placeholder="Name" id="signup_input" />
            <input type="phone" placeholder="Phone Number" id="signup_input" />
            <input type="password" placeholder="Password" id="signup_input" />
            <input
              type="password"
              placeholder="Confirm Password"
              id="signup_input"
            />
          </div>
          <div className="signup_box_submit">
            <input type="button" value="Signup" id="signup_submit" />
            <input type="button" value="Login" id="link_log_in" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
