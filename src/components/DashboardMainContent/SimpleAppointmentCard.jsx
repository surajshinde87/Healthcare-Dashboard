import "./styles/SimpleAppointmentCard.css";

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-appointment-card">
      {/* The Appointment Cards For Upcoming Schedule */}
      <div className="appointment-info">
        <h4 className="appointment-title">{title}</h4>
        <p className="appointment-time">{time}</p>
      </div>
      <div className="appointment-icon">{icon}</div>
    </div>
  );
}

export default SimpleAppointmentCard;
