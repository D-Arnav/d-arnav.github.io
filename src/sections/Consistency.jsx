import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Reveal from "../components/Reveal";
import "./Consistency.css";

const USERNAME = "D-Arnav";
const YEARS = [2026, 2025, 2024, 2023, 2022];
const VISIBLE_COUNT = 4;

const CHART_THEME = {
  light: ["#1a1a1a", "#b7053a5d", "#b7053a81", "#b7053ac7", "#B70539"],
  dark: ["#1a1a1a", "#b7053a5d", "#b7053a81", "#cd2255b4", "#cd2256ff"],
};

export default function Consistency() {
  const [selectedYear, setSelectedYear] = useState(YEARS[0]);
  const [expanded, setExpanded] = useState(false);

  const currentYear = new Date().getFullYear();
  const displayYear = Math.min(selectedYear, currentYear);

  return (
    <Reveal>
      <section className="consistency">
        <div className="consistency-intro">
          <p className="section-eyebrow">Consistency</p>
          <h2 className="section-title">Development work over time.</h2>
          <p className="consistency-desc">
            Progress isn't always linear, there are bursts of activity and quieter periods.
            I believe in showing up regularly, but also recognize that creativity and learning
            sometimes require breaks and reflection.
          </p>
        </div>

        <div className="consistency-content">
          <div className="consistency-year-selector">
            <div className="year-list-clip">
              <div
                className="year-list"
                style={{ transform: expanded ? "translateY(calc(-1 * (var(--year-btn-h) + var(--year-gap))))" : "translateY(0)" }}
              >
                {YEARS.map((year) => (
                  <button
                    key={year}
                    className={`pill-btn year-btn ${selectedYear === year ? "active" : ""}`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {YEARS.length > VISIBLE_COUNT && (
              <button
                className="year-btn expand-btn"
                onClick={() => setExpanded((e) => !e)}
                aria-label={expanded ? "Show fewer years" : "Show more years"}
              >
                {expanded ? "↑" : "↓"}
              </button>
            )}
          </div>

          <div className="consistency-chart">
            <GitHubCalendar
              username={USERNAME}
              year={displayYear}
              blockSize={16}
              blockMargin={5}
              fontSize={14}
              showMonthLabels
              theme={CHART_THEME}
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
