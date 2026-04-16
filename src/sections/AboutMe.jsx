import { useState } from "react";
import { IoOpenOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Reveal from "../components/Reveal";
import ResumeViewer from "../components/ResumeViewer";
import "./AboutMe.css";

const RESUME_PATH = "/resume.pdf";
const EMAIL = "darnav@umich.edu";

export default function AboutMe() {
  const [showResume, setShowResume] = useState(false);

  return (
    <Reveal>
      <section className="about-section">
        <div className="about-wrapper">
          <div className="about-title-section">
            <span className="section-eyebrow">Get to know me</span>
            <h2 className="section-title">
              About <span className="section-title-glow">Me</span>
            </h2>
          </div>

          <div className="about-content-grid">
            <div className="about-left-column">
              <div className="about-visual" />

              <div className="resume-actions">
                <button
                  className="resume-btn resume-btn-primary"
                  onClick={() => setShowResume(true)}
                >
                  <IoOpenOutline />
                  View Résumé
                </button>
                <a
                  href={RESUME_PATH}
                  download
                  className="resume-btn resume-btn-icon"
                  title="Download résumé"
                >
                  <MdOutlineFileDownload />
                </a>
              </div>

              {showResume && (
                <ResumeViewer
                  file={RESUME_PATH}
                  onClose={() => setShowResume(false)}
                />
              )}
            </div>

            <div className="about-content">
              <div className="content-block">
                <span className="block-lead">Now</span>
                <p>
                  I'm a CSE Masters student at the <span>University of Michigan</span>, specializing in
                  <span> robot perception</span>, with coursework on control systems, robotics,
                  and computer vision. I'm a member of the <span> Univeristy of Michigan Autonomous Robotic Vehicle Team</span> (UMARV)
                  where I design perception systems for our Robot competing in the IGVC Self-Drive competition.
                </p>
              </div>

              <div className="content-block">
                <span className="block-lead">Research</span>
                <p>
                  My research includes text-line segmentation in rock inscriptions, as well as a recent first author paper
                  accepted to CVPR 2026 on preserving source privacy in domain adaptation{" "}
                  <a
                    className="read-more"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See Blogs
                  </a>
                </p>
              </div>

              <div className="content-block">
                <span className="block-lead">Previous</span>
                <p>
                  I've built award-winning <span>competition robots</span> as a founding member of team TEQQ Televisors,
                  winning the Robofest 2019 and 2020 world championships. Over 5 years of activity, we participated
                  in 18 competitions, winning 15 awards in total.{" "}
                  <a className="read-more" href="/#/blogs/robotics" target="_blank" rel="noopener noreferrer">
                    Award list
                  </a>
                </p>
                <p>
                  I've also worked in software, building <span>ML-powered systems</span> for fraud detection,
                  and payment routing. I enjoy problems at the intersection of theory and deployment,
                  where models must be efficient, stable, and reproducible.
                </p>
              </div>

              <div className="content-block contact-block">
                <span className="block-lead">Contact me</span>
                <p className="contact-email">
                  <IoMailOutline />
                  {EMAIL}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
