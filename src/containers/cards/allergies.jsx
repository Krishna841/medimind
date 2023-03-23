import "./allergies.scss";

const Allergies = ({ item, index }) => {
  return (
    <div className="allergies" key={index}>
      <div className="allergies_name">{item.name}</div>
      <div className="allergies_effect">{item.effect}</div>
    </div>
  );
};

export default Allergies;
