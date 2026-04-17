import { MdOutlineFileDownload } from "react-icons/md";
import { IoArrowBack, IoMailOutline, IoCallOutline, IoLocationOutline, IoGlobeOutline } from "react-icons/io5";
import "./ResumePage.css";

const RESUME_PATH = "/resume.pdf";
const UPLOADED_DATE = "April 2026";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-page-topbar">
        <a href="/#/" className="resume-back-btn">
          <IoArrowBack />
          Back
        </a>
        <span className="resume-page-title">Résumé</span>
        <div className="resume-page-right">
          <span className="resume-page-date">Updated {UPLOADED_DATE}</span>
          <a href={RESUME_PATH} download className="resume-download-btn">
            <MdOutlineFileDownload />
            Download PDF
          </a>
        </div>
      </div>

      <div className="resume-page-body">
        <div className="rv">
          {/* Header */}
          <header className="rv-header">
            <h1 className="rv-name">Arnav Devalapally</h1>
            <div className="rv-contact">
              <span><IoMailOutline /> darnav@umich.edu</span>
              <span><IoCallOutline /> +1 (734) 596-7411</span>
              <span><IoGlobeOutline /> d-arnav.github.io</span>
              <span><IoLocationOutline /> Ann Arbor, MI</span>
            </div>
          </header>

          {/* Education */}
          <section className="rv-section">
            <h2 className="rv-section-title">Education</h2>
            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">University of Michigan</h3>
                  <p className="rv-role">M.S. in Computer Science and Engineering</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Ann Arbor, MI</span>
                  <span className="rv-date">Dec 2026</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>GPA: <strong>4.0/4.0</strong></li>
                <li>Coursework: Advanced Computer Vision, Robot Kinematics &amp; Dynamics, Control Systems, Microarchitecture</li>
              </ul>
            </div>
            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">K L University</h3>
                  <p className="rv-role">B.Tech (Honors) in Artificial Intelligence and Data Science</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">May 2025</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>GPA: <strong>9.8/10.0</strong> (Silver Medalist)</li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="rv-section">
            <h2 className="rv-section-title">Skills</h2>
            <div className="rv-skills">
              <div className="rv-skill-row">
                <span className="rv-skill-label">Languages</span>
                <span className="rv-skill-tags">
                  {["Python", "C++", "MatLab", "Bash"].map(s => <span key={s} className="rv-tag">{s}</span>)}
                </span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Systems & Tools</span>
                <span className="rv-skill-tags">
                  {["ROS2", "CUDA", "Linux", "Git", "Docker", "PostgreSQL", "SLURM", "Simulink"].map(s => <span key={s} className="rv-tag">{s}</span>)}
                </span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Perception</span>
                <span className="rv-skill-tags">
                  {["PyTorch", "OpenCV", "ViT", "NeRF", "Domain Adaptation", "Sensor Fusion", "Occupancy Grid", "Point Cloud", "Depth Camera"].map(s => <span key={s} className="rv-tag">{s}</span>)}
                </span>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="rv-section">
            <h2 className="rv-section-title">Work Experience</h2>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">IIT Hyderabad <span className="rv-org-sep">|</span> <span className="rv-advisor">Advisor: Vineeth N B</span></h3>
                  <p className="rv-role">Machine Learning Research Intern</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">May 2024 - Feb 2026</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Conducted research in domain adaptation for deep learning for perception (ViT, ResNet) under distribution shift.</li>
                <li>First-author paper accepted to <strong>CVPR 2026</strong>.</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">IIIT Hyderabad <span className="rv-org-sep">|</span> <span className="rv-advisor">Advisor: Ravi Kiran S</span></h3>
                  <p className="rv-role">Computer Vision Research Intern</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">May 2023 - July 2023</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Developed classical and deep learning models (ViT, CNN, U-Net) for segmentation in challenging visual conditions.</li>
                <li>Evaluated state-of-the-art binarization model, improving performance via Focal Loss (<strong>+1.3 PSNR</strong>).</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">Payintelli</h3>
                  <p className="rv-role">AI Consultant</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">June 2025 - Aug 2025</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Developed and evaluated fraud detection ML models on 1M+ real-world transactions at production scale.</li>
                <li>Implemented a client-centric static rule base and decision thresholds to manage the recall-false positive tradeoff.</li>
                <li>Delivered production-ready APIs integrated with frontend dashboards for performance monitoring.</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">PXP Financial</h3>
                  <p className="rv-role">Business Intelligence Intern</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">Feb 2025 - June 2025</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Trained ML-based classification models for deployment-critical systems under performance and latency constraints.</li>
                <li>Built reusable queries and reporting pipelines to track performance drift and trigger retraining.</li>
              </ul>
            </div>
          </section>

          {/* Publications */}
          <section className="rv-section">
            <h2 className="rv-section-title">Publications</h2>
            <ul className="rv-publications">
              <li>
                <strong>Devalapally, A.</strong>, Jain, P., Srinivas, K., Balasubramanian, V.N.,{" "}
                <em>Source Models Leak What They Shouldn't: Unlearning Zero-Shot Transfer in Domain Adaptation Through Adversarial Optimization</em>,{" "}
                <span className="rv-venue">CVPR 2026</span> (Accepted).
              </li>
              <li>
                <strong>Devalapally, A.</strong>, Valluri, G.,{" "}
                <em>A Simple Machine Unlearning Approach Using Elastic Weight Consolidation</em>,{" "}
                International Conference on Recent Trends in AI Enabled Technologies, 2023.
              </li>
            </ul>
          </section>

          {/* Activities */}
          <section className="rv-section">
            <h2 className="rv-section-title">Activities</h2>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">University of Michigan Autonomous Robot Vehicle Team (UMARV)</h3>
                  <p className="rv-role">Computer Vision Team Member</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Ann Arbor, MI</span>
                  <span className="rv-date">Jan 2026 - Present</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Built sensor calibration and perception tooling to fuse multiple depth-camera inputs (point clouds, occupancy grids) and communicate outputs via ROS2 (rclpy) for downstream planning and control in autonomous vehicle stack.</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">Team TEQQ Televisors</h3>
                  <p className="rv-role">Founding Member</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">Jan 2016 - Dec 2020</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Programmed autonomous robots for: (i) task solving (WRO, FLL), (ii) line following (RCJ), (iii) battling (Robofest).</li>
                <li>Won <strong>15+ awards</strong>, including 4 world championship titles at Robofest, and best strategy award at First LEGO League.</li>
              </ul>
            </div>
          </section>

          {/* Project Experience */}
          <section className="rv-section">
            <h2 className="rv-section-title">Project Experience</h2>
            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">Novel Object View Synthesis (NeRF)</h3>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Built 3D object representations and synthesized novel viewpoints using Neural Radiance Fields (NeRF) in PyTorch for AI vision and high-fidelity 3D scene reconstruction from sparse multi-view images.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
