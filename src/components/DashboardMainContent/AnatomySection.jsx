import hearticon from "../../assets/icons/heart.png";
import legicon from "../../assets/icons/leg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import "./styles/AnatomySection.css";
import anatomy from "../../assets/anatomy/Anatomy.png";

function AnatomySection() {
  return (
    <div id="anatomy-section">
      {/* Magnifying Glass */}
      <FontAwesomeIcon
        className="magnifying-glass"
        icon={faMagnifyingGlassPlus}
      />
      {/* Human Body Image */}
      <img src={anatomy} alt="Human Body Image" id="human-anatomy-image" />

      {/* Body Scanner*/}
      {/* Heart Scanner */}
      <div className="body-scanner heart">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
        <div className="scanner-line"></div>
      </div>
      <div className="healty-heart scanning-text">
        <img src={hearticon} alt="heart-icon" />
        <h3>Healthy Heart</h3>
      </div>

      {/* Leg Scanner */}

      <div className="body-scanner leg">
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
        <div className="scanner-line"></div>
      </div>
      <div className="healty-leg scanning-text">
        <img src={legicon} alt="leg-icon" />
        <h3>Healthy Leg</h3>
      </div>
    </div>
  );
}

export default AnatomySection;
