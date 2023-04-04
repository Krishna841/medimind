import "./login.scss";
import { useState } from "react";
import axios from "../API/axios";
import { useNavigate } from "react-router-dom";

const login_url = "/api/accounts/login/";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(login_url, {
        email: email,
        password: password,
      });
      console.log(response?.data);
      const access_token = response?.data?.access;
      localStorage.setItem("access", access_token);

      navigate("/home");

      localStorage.setItem("refresh", response?.data?.refresh);
    } catch (err) {
      if (!err) {
        console.log("Login Failed");
      } else {
        console.log(err.response);
      }
    }
  };

  return (
    <div className="login">
      <div className="login_text">
        <div className="login_text_title">Medimind</div>
        <div className="login_text_box">
          <div className="login_text_box_title">Login</div>
          <div className="login_text_box_input">
            <input
              type="text"
              placeholder="Email"
              id="login_input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              id="login_input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="login_text_box_submit">
            <input
              type="button"
              value="Login"
              id="submit"
              onClick={sendRequest}
            />
            <div className="login_text_box_submit_forgot">forgotpassword?</div>
          </div>

          <input type="button" value="Sign Up" id="link_sign_up" />
        </div>
      </div>
    </div>
  );
};

export default Login;
