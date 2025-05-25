import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./styles/DashboardOverview.css";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";

function DashboardOverview() {
  return (
    <div id="dashboard-overview">
      {/* Dashbord Titles */}
      <div className="dashboard-title">
        <h2>Dashboard</h2>
        <h5>
          This Week <FontAwesomeIcon icon={faChevronDown} />
        </h5>
      </div>
      {/* The Human Body Container */}
      <div id="dashboard-main">
        <AnatomySection />
        <HealthStatusCards />
      </div>
      {/* The Bottom Text or Button Of the Dashboard */}
      <div className="dashboard-bottom">
        <h5>Details</h5>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}

export default DashboardOverview;
