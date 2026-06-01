import { IoOpenOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import Reveal from "../components/Reveal";
import "./AboutMe.css";

const RESUME_PATH = "/resume.pdf";
const EMAIL = "darnav@umich.edu";

export default function AboutMe() {
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
                <a
                  href="/#/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn resume-btn-primary"
                >
                  <IoOpenOutline />
                  View Résumé
                </a>
                <a
                  href={RESUME_PATH}
                  download
                  className="resume-btn resume-btn-icon"
                  title="Download résumé"
                >
                  <MdOutlineFileDownload />
                </a>
              </div>
            </div>

            <div className="about-content">
              <div className="content-block">
                <span className="block-lead">Now</span>
                <p>
                  CSE Masters student at the <span>University of Michigan</span> and a
                  <span> Perception ML Research Engineer</span>. Currently interning at
                  <span> Parsons</span>, building camera + LiDAR perception systems that detect roadway
                  assets and defects across client deployments.
                </p>
              </div>

              <div className="content-block">
                <span className="block-lead">Research</span>
                <p>
                  First author paper at <span>CVPR 2026</span> on unlearning zero-shot transfer in domain adaptation.
                  At UM I built <span>Isaac Sim</span> environments with a Boston Dynamics Spot to generate
                  synthetic perception data, alongside semantic mapping for industrial environments.
                  Earlier work on text-line segmentation in rock inscriptions.{" "}
                  <a
                    className="read-more"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("blog-showcase")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    See Blogs
                  </a>
                </p>
              </div>

              <div className="content-block">
                <span className="block-lead">Previous</span>
                <p>
                  Founding member of team TEQQ Televisors, winning the Robofest 2019 and 2020 world championships
                  (18 competitions, 15 awards over 6 years).{" "}
                  <a className="read-more" href="/#/blogs/robotics" target="_blank" rel="noopener noreferrer">
                    Award list
                  </a>
                </p>
                <p>
                  Also worked in software, building <span>ML-powered systems</span> for fraud detection
                  and payment routing.
                </p>
              </div>

              <div className="content-block contact-block">
                <span className="block-lead">Contact me</span>
                <p className="contact-email">
                  <IoMailOutline />
                  {EMAIL}
                </p>
                <div className="resume-actions resume-actions-mobile">
                  <a
                    href="/#/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-btn resume-btn-primary"
                  >
                    <IoOpenOutline />
                    View Résumé
                  </a>
                  <a
                    href={RESUME_PATH}
                    download
                    className="resume-btn resume-btn-icon"
                    title="Download résumé"
                  >
                    <MdOutlineFileDownload />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
