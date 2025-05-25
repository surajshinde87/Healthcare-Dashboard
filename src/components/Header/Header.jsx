import "./Header.css";
import userAvatar from "../../assets/avatars/user-avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header id="header">
      {/* Search Bar */}
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search" className="search-box" />
        <FontAwesomeIcon icon={faBell} className="notification-icon" />
      </div>
      {/* User Account SVG and Plus Icon */}
      <div className="user-account">
        <div className="user-svg">
          <img src={userAvatar} alt="user-avatar" />
        </div>
        <FontAwesomeIcon icon={faSquarePlus} className="add-icon" />
      </div>
    </header>
  );
}

export default Header;
