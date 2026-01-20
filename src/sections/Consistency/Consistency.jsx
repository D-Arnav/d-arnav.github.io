import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Reveal from '../../components/common/Reveal';
import "./Consistency.css";
import { consistencyData } from '../../../data/home';

function Consistency() {
  const [selectedYear, setSelectedYear] = useState(consistencyData.github.years[0]);
  const [showAllYears, setShowAllYears] = useState(false);
  const years = consistencyData.github.years;
  const currentYear = new Date().getFullYear();
  const displayYear = selectedYear > currentYear ? currentYear : selectedYear;

  return (
    <Reveal>
      <section className="consistency">
      <div className="consistency-intro">
        <p className="consistency-eyebrow">{consistencyData.eyebrow}</p>
        <h2 className="consistency-heading">
          {consistencyData.heading}
        </h2>
        <p className="consistency-desc">
          {consistencyData.description}
        </p>
      </div>

      <div className="consistency-content">
        <div className="consistency-year-selector">
          {years.map((year, index) => (
            <button
              key={year}
              className={`year-btn ${selectedYear === year ? "active" : ""} ${
                !showAllYears && index >= 4 
                  ? "hidden-year" 
                  : showAllYears && index === 0
                  ? "hidden-year"
                  : "visible-year"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
          ))}
          
          {!showAllYears && years.length > 4 && (
            <button
              className="year-btn expand-btn"
              onClick={() => setShowAllYears(true)}
              aria-label="Show more years"
            >
              ↓
            </button>
          )}
          
          {showAllYears && (
            <button
              className="year-btn expand-btn"
              onClick={() => setShowAllYears(false)}
              aria-label="Show fewer years"
            >
              ↑
            </button>
          )}
        </div>

        <div className="consistency-chart">

          {/* {selectedYear > currentYear && (
            <p className="consistency-note">
              No GitHub data for {selectedYear} yet — showing {currentYear} instead.
            </p>
          )} */}

          <GitHubCalendar
            username={consistencyData.github.username}
            year={displayYear}
            blockSize={consistencyData.github.chartConfig.blockSize}
            blockMargin={consistencyData.github.chartConfig.blockMargin}
            fontSize={consistencyData.github.chartConfig.fontSize}
            showWeekdayLabels={consistencyData.github.chartConfig.showWeekdayLabels}
            showMonthLabels={consistencyData.github.chartConfig.showMonthLabels}
            hideColorLegend={consistencyData.github.chartConfig.hideColorLegend}
            hideTotalCount={consistencyData.github.chartConfig.hideTotalCount}
            theme={consistencyData.github.chartConfig.theme}
          />
        </div>
      </div>
    </section>
    </Reveal>
  );
}

export default Consistency;