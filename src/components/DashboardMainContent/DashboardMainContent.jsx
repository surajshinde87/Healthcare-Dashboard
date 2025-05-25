import "./styles/DashboardMainContent.css";
import Header from "../Header/Header";
import DashboardOverview from "./DashboardOverview";
import ActivityFeed from "./ActivityFeed";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";

function DashboardMainContent() {
  return (
    <div id="dashboard-main-content">
      {/* Header of The Dashboard */}
      <Header />
      {/* The Left Side Contain Anatomy, Healthcards and Activity Feed */}
      <div className="left">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      {/* The Rigth Side Contain Calender View  and The Upcoming Schedule*/}
      <div className="right">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default DashboardMainContent;
