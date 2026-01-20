import { useState } from "react";
import "./EducationSection.css";

function EducationSection({
  institution,
  degree,
  duration,
  coursework,
  plannedCourses,
  gpa,
  points,
}) {
  const [open, setOpen] = useState(false);
  const hasCompleted = Array.isArray(coursework) && coursework.length > 0;
  const hasPlanned = Array.isArray(plannedCourses) && plannedCourses.length > 0;
  const hasAnyCourses = hasCompleted || hasPlanned;

  return (
    <section className="education-section">
      <div className="education-header">
        <h3>{degree}</h3>
        <span className="education-org">@ {institution}</span>
      </div>

      <p className="education-duration">
        {duration}
        {gpa && (
          <span className="education-duration-sep"> • </span>
        )}
        {gpa && (
          <span className="education-gpa-inline">GPA: {gpa}</span>
        )}
      </p>

      {Array.isArray(points) && points.length > 0 && (
        <ul className="education-points">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      )}
      {hasAnyCourses && (
        <button
          className={`education-toggle pill-btn ${open ? 'open active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? "Hide coursework" : "View coursework"}
          <span className="chevron" aria-hidden />
        </button>
      )}

      {open && hasAnyCourses && (
        <div className="education-content">
          {hasCompleted && (
            <div className="education-block">
              <h4>Completed</h4>
              <ul>
                {coursework.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          )}

          {hasPlanned && (
            <div className="education-block">
              <h4>Planned</h4>
              <ul>
                {plannedCourses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default EducationSection;
