import "./signup.scss";
import { useState } from "react";
import axios from "../API/axios";

const signup_url = "/api/accounts/register/";
const otp_url = "/api/accounts/verifyotp/";
const Signup = () => {
  const [OTP, setOTP] = useState(new Array(4).fill(""));
  const [otp, setOtp] = useState("false");
  const [mail, setMail] = useState("");
  const [email, setEmail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");

  const submitOTP = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(otp_url, {
        email: mail,
        otp: OTP.join(""),
      });
      console.log(response?.data);
    } catch (err) {
      if (!err.response) {
        console.log("Network Error");
      } else {
        console.log(err.response);
      }
    }
  };
  const hanndleOTP = (element, index) => {
    if (isNaN(element.value)) return false;
    setOTP([...OTP.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log(email, first, last, password);
    try {
      const response = await axios.post(signup_url, {
        email: email,
        first_name: first,
        last_name: last,
        password: password,
      });
      console.log(response?.data);
      const usermail = response.data.data.email;
      console.log(usermail);
      setMail(usermail);

      // console.log(usermail);
      setOtp("true");
    } catch (err) {
      if (!err.response) {
        console.log("Network Error");
      } else {
        console.log(err.response);
      }
    }
  };

  return (
    <>
      {otp === "true" ? (
        <div className="otp">
          <div className="otp_title">Medimind</div>
          <div className="otp_box">
            <div className="otp_box_title">Enter OTP</div>
            <div className="otp_box_content">
              {" "}
              {OTP.map((data, index) => {
                return (
                  <input
                    type="text"
                    id="otp_input"
                    maxLength="1"
                    key={index}
                    value={data}
                    onChange={(e) => {
                      hanndleOTP(e.target, index);
                    }}
                    onFocus={(e) => {
                      e.target.select();
                    }}
                  />
                );
              })}
            </div>
            <input
              type="button"
              value="Submit"
              onClick={submitOTP}
              id="otp_submit"
            />
          </div>
        </div>
      ) : (
        <div className="signup">
          <div className="signup_title">Medimind</div>
          <div className="signup_box">
            <div className="signup_box_title">Sign Up</div>
            <div className="signup_box_input">
              <input
                type="email"
                placeholder="Email"
                id="signup_input"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="First"
                id="signup_input"
                onChange={(e) => {
                  setFirst(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                id="signup_input"
                onChange={(e) => {
                  setLast(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                id="signup_input"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <input
              type="password"
              placeholder="Confirm Password"
              id="signup_input"
            /> */}
            </div>

            <div className="signup_box_submit">
              <input
                type="button"
                value="Signup"
                id="signup_submit"
                onClick={handleSignup}
              />

              <input type="button" value="Login" id="link_log_in" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Signup;
