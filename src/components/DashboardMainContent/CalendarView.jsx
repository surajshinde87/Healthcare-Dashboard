import "./styles/CalendarView.css";
import { calendarDays } from "../../data/calendarData";
import toothIcon from "../../assets/icons/teeth.png";
import muscleIcon from "../../assets/icons/muscle.png";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CalendarView() {
  return (
    <>
      <div className="calendar-container">
        {/* Calender Schedules */}
        {/* Heading For the calender includes Month and icons for left and right */}
        <div className="calendar-header">
          <span className="month-title">May 2025</span>
          <div className="nav-icons">
            <FontAwesomeIcon icon={faArrowLeft} />
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        {/* Main Calender Days With Time */}
        <div className="calendar-grid">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day.active ? "active" : ""} ${
                day.faded ? "faded" : ""
              }`}
            >
              <div className="day-name">{day.day}</div>
              <div className="day-number">{day.date}</div>
              <div className="appointments">
                {day.appointments.map((time, i) => (
                  <div
                    key={i}
                    className={`time-slot ${
                      (time === "09:00" && day.active) ||
                      time === "11:00" ||
                      time == "15:00"
                        ? "highlighted"
                        : ""
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Appointment Deatail Container */}

      <div className="appointment-details-container">
        {/* The Left Bule Card */}
        <div className="appointment-card blue">
          <div className="card-text">
            <h4 className="title">Dentist</h4>
            <p className="time">09:00–11:00</p>
            <p className="doctor">Dr. Cameron Williamson</p>
          </div>
          <img src={toothIcon} alt="Tooth Icon" className="card-icon" />
        </div>
        {/* The Right Light Card */}
        <div className="appointment-card light">
          <div className="card-text">
            <h4 className="title">Physiotherapy Appointment</h4>
            <p className="time">11:00–12:00</p>
            <p className="doctor">Dr. Kevin Djones</p>
          </div>
          <img src={muscleIcon} alt="Muscle Icone" className="card-icon" />
        </div>
      </div>
    </>
  );
}

export default CalendarView;
