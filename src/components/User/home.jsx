import "./home.scss";
import History from "../../containers/cards/history";
import Profile from "./profile";

import track from "../../assets/tracking.svg";
import meds from "../../assets/medicines.svg";
import right from "../../assets/right.svg";
import Allergies from "../../containers/cards/allergies";

const name = "Mira";
const history = [
  {
    name: "Menganitis",
    start: "21/12/2022",
    end: "25/12/2022",
    description: "Headaches and Nausea took benedryl and pschology phil ",
  },
];

const allergies = [
  {
    name: "Peanuts",
    effect: "Headaches and Nausea",
  },
];

const Home = () => {
  return (
    <div className="home">
      <div className="home_one">
        <div className="home_one_title">MediMind</div>
        <div className="home_one_name">
          <div className="home_one_name_t1">Welcome {name},</div>
          <div className="home_one_name_t2">
            Did you take your medicines for the day?
          </div>
        </div>
        <div className="home_one_btns">
          <div className="home_one_btns_track">
            <input type="button" value="Tracking Meds" id="home_button" />
            <img src={track} alt="tracker" height={30} width={30} />
          </div>
          <div className="home_one_btns_prescription">
            <input type="button" value="Prescriptions" id="home_button" />
            <img src={meds} alt="medcines" height={40} width={40} />
          </div>
        </div>
        <div className="home_one_allergies">
          <div className="home_one_allergies_title">
            <div className="home_one_allergies_title_text">Allergies</div>
            <div className="home_one_allergies_title_btn">
              <img
                src={right}
                alt="right arrow button"
                height={50}
                width={50}
              />
            </div>
          </div>
          <div className="home_one_allergies_list">
            {allergies?.map((item, index) => {
              return <Allergies item={item} index={index} />;
            })}
          </div>
        </div>
        <div className="home_one_history">
          <div className="home_one_history_title">
            <div className="home_one_history_title_text">History</div>
            <div className="home_one_history_title_btn">
              <img
                src={right}
                alt="right arrow button"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className="home_one_history_list">
            {history?.map((item, index) => {
              return <History item={item} index={index} />;
            })}
          </div>
        </div>
      </div>
      <div className="home_two">
        <Profile />
      </div>
    </div>
  );
};

export default Home;
