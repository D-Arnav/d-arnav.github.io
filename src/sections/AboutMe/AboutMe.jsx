import './AboutMe.css';
import Reveal from '../../components/common/Reveal';
import ResumeViewer from '../../components/ResumeViewer/ResumeViewer';
import { IoOpenOutline, IoMailOutline } from 'react-icons/io5';
import { MdOutlineFileDownload } from 'react-icons/md';
import { useState } from 'react';
import { aboutMeData } from '../../../data/home';

function AboutMe() {
  const [showResume, setShowResume] = useState(false);

  return (
    <Reveal>
      <section className="about-section">
        <div className="about-wrapper">
          {/* Title Section */}
          <div className="about-title-section">
            <div className="about-eyebrow">{aboutMeData.eyebrow}</div>
            <h2 className="about-title">
              {aboutMeData.title} <span className="about-title-glow">{aboutMeData.titleGlow}</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="about-content-grid">
            <div className="about-left-column">
              <div className="about-visual" />
              <div className="resume-actions">
                <button
                  className="resume-btn resume-btn-primary"
                  onClick={() => setShowResume(true)}
                >
                  <IoOpenOutline />
                  {aboutMeData.resume.viewText}
                </button>
                <a
                  href={aboutMeData.resume.filePath}
                  download
                  className="resume-btn resume-btn-icon"
                  title={aboutMeData.resume.downloadText}
                >
                  <MdOutlineFileDownload />
                </a>
              </div>

              <div className="about-email">
                <a href="mailto:darnav@umich.edu" className="email-link">
                  <IoMailOutline />
                  darnav@umich.edu
                </a>
              </div>

              {showResume && (
                <ResumeViewer
                  file={aboutMeData.resume.filePath}
                  onClose={() => setShowResume(false)}
                />
              )}
            </div>

            {/* Right content */}
            <div className="about-content">
              {/* Block 1 - Identity */}
              <div className="content-block">
                <span className="block-lead">Now</span>
                <p>
                  I'm a CSE Masters student at the <span>University of Michigan</span>, specializing in
                  <span> robot perception</span>, with coursework on control systems, robotics,
                  and computer vision. I'm a member of the <span> Univeristy of Michigan Autonomous Robotic Vehicle Team</span> (UMARV)
                  where I design perception systems for our Robot competing in the IGVC Self-Drive competition.
                </p>
              </div>

              {/* Block 2 - Credibility */}
              <div className="content-block">
                <span className="block-lead">Research</span>
                <p>
                  My research includes text-line segmentation in rock inscriptions, as well as a recent first author paper
                  submitted to CVPR 2026 on preserving source privacy in domain adaptation {" "}
                  <a className="read-more" href='#blogs'>See Blogs</a>

                </p>
              </div>

              {/* Block 3 - Direction */}
              <div className="content-block">
                <span className="block-lead">Previous</span>
                <p>
                  I've built award-winning <span>competition robots</span> as a founding member of team TEQQ Televisors,
                  winning the Robofest 2019 and 2020 world championships. Over 5 years of activity, we participated
                  in 18 competitions, winning 15 awards in total. <a className="read-more" href='/#/blogs/robotics' target="_blank" rel="noopener noreferrer">Award list</a>
                </p>
                <p>
                  I've also worked in software, building <span>ML-powered systems</span> for fraud detection,
                  and payment routing. I enjoy problems at the intersection of theory and deployment,
                  where models must be efficient, stable, and reproducible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal >
  );
}

export default AboutMe;
