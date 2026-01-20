import "./IndustryItem.css";

function IndustryItem({ role, company, duration, points }) {
  return (
    <div className="industry-item">
      <div className="industry-header">
        <h3 className="industry-role">{role}</h3>
        <span className="industry-company">@ {company}</span>
      </div>

      <p className="industry-duration">{duration}</p>

      {Array.isArray(points) && points.length > 0 && (
        <ul className="industry-points">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IndustryItem;