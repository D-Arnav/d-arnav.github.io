import React from "react";
import Reveal from "../../components/common/Reveal";
import { skillsData } from "../../../data/skillsData";
import "../../pages/About.css";
import "./Tools.css";

function Tools() {
    return (
        <Reveal>
            <section className="about-page-section" id="tools">
                <div className="about-page-section-header">
                    <span className="about-page-eyebrow">Skills</span>
                    <h2 className="about-page-section-title">
                        Tools <span className="about-page-title-glow">I Use</span>
                    </h2>
                </div>

                <div className="skills-snap">
                    {skillsData.map((group, idx) => (
                        <section key={idx} className="skills-snap-slide">
                            <h3 className="skill-category-title">{group.category}</h3>
                            <div className="skill-badges">
                                {group.items.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="skill-card">
                                            <div className="skill-icon" style={{ color: item.color }}>
                                                {Icon ? <Icon /> : <span className="skill-fallback">{item.name[0]}</span>}
                                            </div>
                                            <span className="skill-name">{item.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </Reveal>
    );
}

export default Tools;
