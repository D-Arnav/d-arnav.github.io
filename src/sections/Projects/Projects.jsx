import React from "react";
import Reveal from "../../components/common/Reveal";
import { projectsData } from "../../../data/projectsData";
import { SiGithub } from "react-icons/si";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiSlideshowLine } from "react-icons/ri";
import { TiMediaPlayOutline } from "react-icons/ti";
import "../../pages/About.css";
import "./Projects.css";

function normalizeLink(href) {
    if (!href) return null;
    if (typeof href !== "string") return null;
    const trimmed = href.trim();
    if (!trimmed || trimmed === "#") return null;
    return trimmed;
}

function isExternalLink(href) {
    return /^https?:\/\//i.test(href);
}

function ProjectItem({ title, org, duration, description, tags, links, image }) {
    const linkButtons = [
        { key: "github", Icon: SiGithub, aria: "GitHub repository" },
        { key: "reports", Icon: HiOutlineDocumentReport, aria: "View report" },
        { key: "ppt", Icon: RiSlideshowLine, aria: "View slides" },
        { key: "demo", Icon: TiMediaPlayOutline, aria: "Open live demo" },
    ];

    const renderedLinks = linkButtons
        .map(({ key, Icon, aria }) => {
            const href = normalizeLink(links?.[key]);
            if (!href) return null;
            const external = isExternalLink(href);
            return (
                <a
                    key={key}
                    href={href}
                    target={external ? "_blank" : "_self"}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="pill-btn icon-only"
                    aria-label={aria}
                >
                    {Icon && <Icon />}
                </a>
            );
        })
        .filter(Boolean);

    return (
        <div className="project-item">
            <div className="project-header">
                <h3 className="project-title">{title}</h3>
                {org && <span className="project-org">@ {org}</span>}
            </div>

            {duration && <p className="project-duration">{duration}</p>}

            {description && (
                Array.isArray(description) ? (
                    <ul className="project-highlights">
                        {description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p className="project-desc">{description}</p>
                )
            )}

            {image && (
                <div className="project-image-container">
                    <img src={image} alt={title} className="project-image" />
                </div>
            )}

            {Array.isArray(tags) && tags.length > 0 && (
                <ul className="project-tags">
                    {tags.map((t, i) => (
                        <li key={i} className="tag">{t}</li>
                    ))}
                </ul>
            )}

            {renderedLinks.length > 0 && (
                <div className="project-links">{renderedLinks}</div>
            )}
        </div>
    );
}

function Projects() {
    return (
        <Reveal>
            <section className="about-page-section" id="projects">
                <div className="about-page-section-header">
                    <span className="about-page-eyebrow">Projects</span>
                    <h2 className="about-page-section-title">
                        Things <span className="about-page-title-glow">I've Built</span>
                    </h2>
                </div>

                <div className="projects-grid">
                    {projectsData.map((p, i) => (
                        <ProjectItem key={i} {...p} />
                    ))}
                </div>
            </section>
        </Reveal>
    );
}

export default Projects;
