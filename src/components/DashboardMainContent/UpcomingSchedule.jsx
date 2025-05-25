import heartIcon from "../../assets/icons/heart.png";
import eyeIcon from "../../assets/icons/eye.png";
import insulinIcon from "../../assets/icons/insulin.png";
import doctorIcon from "../../assets/icons/doctor.png";
import "./styles/UpcomingSchedule.css";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3 className="schedule-title">The Upcoming Schedule</h3>
      {/* Daywise Schedule Contains the information */}
      <div className="day-section">
        <p className="day-label">On Thursday</p>
        <div className="card-row">
          <SimpleAppointmentCard
            title="Health checkup complete"
            time="11:00 AM"
            icon={<img src={insulinIcon} alt="Insulin Icon" className="icon" />}
          />
          <SimpleAppointmentCard
            title="Ophthalmologist"
            time="14:00 PM"
            icon={<img src={eyeIcon} alt="Eye Icon" className="icon" />}
          />
        </div>
      </div>

      <div className="day-section">
        <p className="day-label">On Saturday</p>
        <div className="card-row">
          <SimpleAppointmentCard
            title="Cardiologist"
            time="12:00 AM"
            icon={<img src={heartIcon} alt="Heart Icon" className="icon" />}
          />
          <SimpleAppointmentCard
            title="Neurologist"
            time="16:00 PM"
            icon={<img src={doctorIcon} alt="Doctor Icon" className="icon" />}
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;
