import "./ResearchPreview.css";

function ResearchPreview({ title, institution, duration, highlights, link, advisor, advisorDesc, advisorLink, advisorDiscLink }) {
  return (
    <div className="research-preview">
      <div className="research-header">
        <h3 className="research-title">{title}</h3>
        <span className="research-org">@ {institution}</span>
      </div>

      <p className="research-duration">
        {duration}
        {advisor && (
          <>
            <span className="research-sep"> • </span>
            <span className="research-advisor">
              Advisor: {advisorLink ? (
                <a href={advisorLink} target="_blank" rel="noopener noreferrer" className="research-advisor-name">
                  {advisor}
                </a>
              ) : (
                <span className="research-advisor-name">{advisor}</span>
              )}
              {advisorDesc && (
                <>
                  {" — "}
                  {advisorDiscLink ? (
                    <a href={advisorDiscLink} target="_blank" rel="noopener noreferrer" className="research-advisor-desc">
                      {advisorDesc}
                    </a>
                  ) : (
                    <span className="research-advisor-desc">{advisorDesc}</span>
                  )}
                </>
              )}
            </span>
          </>
        )}
      </p>

      {Array.isArray(highlights) && highlights.length > 0 && (
        <ul className="research-highlights">
          {highlights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {link && (
        <a
          href={`/#/blogs/${link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="education-toggle pill-btn research-read-more"
        >
          Read Blog
          <span className="chevron" aria-hidden />
        </a>
      )}
    </div>
  );
}

export default ResearchPreview;