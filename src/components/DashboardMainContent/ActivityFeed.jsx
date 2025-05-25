
import "./styles/ActivityFeed.css";
import { chartData, days } from "../../data/activityData";

function ActivityFeed() {
  return (
    <div className="container">
      {/* The Main Card Of the Activity */}
      <div className="card">
        {/* Activity Section Heading */}
        <div className="header">
          <span className="title">Activity</span>
          <span className="subtitle">3 apponiment on this week</span>
        </div>
        {/* Line Charts */}
        <div className="chart">
          {chartData.map((bars, index) => (
            <div className="day" key={index}>
              <div className="bars">
                {bars.map((bar, idx) => {
                  const marginBottom = bar.marginBottomPercent
                    ? `${bar.marginBottomPercent}%`
                    : undefined;

                  const adjustedHeight = bar.height - 1;

                  if (bar.split) {
                    if (bar.colors) {
                      return (
                        <div
                          className="split-bar"
                          key={idx}
                          style={{ marginBottom }}
                        >
                          {bar.colors.map((c, i) => (
                            <div
                              key={i}
                              className={`bar ${c}`}
                              style={{
                                height: `${adjustedHeight / 2 - 0.125}rem`,
                                marginBottom: i === 0 ? "0.25rem" : 0,
                              }}
                            />
                          ))}
                        </div>
                      );
                    } else {
                      return (
                        <div
                          className="split-bar"
                          key={idx}
                          style={{ marginBottom }}
                        >
                          <div
                            className={`bar ${bar.color}`}
                            style={{
                              height: `${adjustedHeight / 2 - 0.125}rem`,
                              marginBottom: "0.25rem",
                            }}
                          />
                          <div
                            className={`bar ${bar.color}`}
                            style={{
                              height: `${adjustedHeight / 2 - 0.125}rem`,
                            }}
                          />
                        </div>
                      );
                    }
                  } else {
                    return (
                      <div
                        key={idx}
                        className={`bar ${bar.color}`}
                        style={{
                          height: `${adjustedHeight}rem`,
                          marginBottom,
                        }}
                      />
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
        {/* Days of Week */}
        <div className="weekdays">
          {days.map((day, index) => (
            <div className="day-label-activity" key={index}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
