import "./profile.scss";

import prof from "../../assets/profile.svg";

const profile = {
  name: "Mira Rajput Kapoor",
  age: "25",
  DOB: "21/12/1995",
  height: "180",
  weight: "65",
  phone: "1234567890",
  email: "mirarajput123@gmail.com",
  blood: "O+",
};
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_title">Profile</div>
      <img src={prof} alt="profile" height={120} width={120} id="image" />
      <div className="profile_box">
        <div className="profile_box_name">{profile.name}</div>
        <div className="profile_box_phone">
          <div className="profile_box_phone_label">Phone</div>
          <div className="profile_box_phone_value">{profile.phone}</div>
        </div>
        <div className="profile_box_email">
          <div className="profile_box_email_label">Email</div>
          <div className="profile_box_email_value">{profile.email}</div>
        </div>
        <div className="profile_box_DOB">
          <div className="profile_box_DOB_label">Birth Date</div>
          <div className="profile_box_DOB_value">{profile.DOB}</div>
        </div>
        <div className="profile_box_age">
          <div className="profile_box_age_label">Age</div>
          <div className="profile_box_age_value">{profile.age}</div>
        </div>
        <div className="profile_box_blood">
          <div className="profile_box_blood_label">Blood Group</div>
          <div className="profile_box_blood_value">{profile.blood}</div>
        </div>
        <div className="profile_box_height">
          <div className="profile_box_height_label">Height</div>
          <div className="profile_box_height_value">{profile.height}</div>
        </div>
        <div className="profile_box_weight">
          <div className="profile_box_weight_label">Weight</div>
          <div className="profile_box_weight_value">{profile.weight}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
