import "./styles/HealthStatusCards.css";
import { healthStatusCards } from "../../data/healthData.js";

function HealthStatusCards() {
  return (
    <div id="health-cards">
      {/* Maping All the cards which are coming from healthdata File */}
      {healthStatusCards.map((item) => (
        <div key={item.id} className="health-card">
          {/* Heading Of the Card Contains Icon and Text */}
          <div className="card-header">
            <img src={item.icon} alt={item.title} className="card-icon" />
            <h4 className="card-title">{item.title}</h4>
          </div>
          <p className="card-date">Date: {item.date}</p>
          {/* The Progres Bar Shows teh healthy status of the body parts */}
          <div className="progress-bar">
            <div
              className={`progress-fill ${
                item.status === "Healthy" ? "green" : "red"
              }`}
              style={{ width: item.status === "Healthy" ? "80%" : "70%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;
