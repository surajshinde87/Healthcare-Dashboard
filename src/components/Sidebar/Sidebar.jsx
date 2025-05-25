import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import navigationSections from "../../data/navigationLinks";

function Sidebar() {
  return (
    <div id="sidebar">
      {/* App Logo */}
      <h1 className="logo">
        Health<span>care.</span>
      </h1>
      {/* Just static menu */}
      <FontAwesomeIcon icon={faBars} className="menu-open" />

      {/* Sidebar All the Links */}

      {navigationSections.map((section) => (
        <div key={section.id} className="nav-section" id={section.id}>
          {/* Sidebar Section Title */}
          <h3 className="section-title">{section.title}</h3>
          {/* Sidebar Links */}
          <ul className="nav-links">
            {section.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  className={`nav-link ${
                    link.label === "Dashboard" ? "active" : ""
                  }`}
                >
                  {/* Sidebar Link Icons */}
                  <FontAwesomeIcon icon={link.icon} className="nav-icon" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
