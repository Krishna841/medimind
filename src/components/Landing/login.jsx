import "./login.scss";

const Login = () => {
  return (
    <div className="login">
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
    </div>
  );
};

export default Login;
