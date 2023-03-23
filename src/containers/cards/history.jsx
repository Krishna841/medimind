import "./history.scss";

const History = ({ item, index }) => {
  return (
    <div className="history" key={index}>
      <div className="history_title">
        <div className="history_title_name">{item.name}</div>
        <div className="history_title_date">
          {item.start} - {item.end}
        </div>
      </div>
      <div className="history_description">{item.description}</div>
    </div>
  );
};
export default History;
