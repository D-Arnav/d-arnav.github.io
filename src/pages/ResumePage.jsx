import { MdOutlineFileDownload } from "react-icons/md";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoGlobeOutline } from "react-icons/io5";
import "./ResumePage.css";

const RESUME_PATH = "/resume.pdf";
const UPLOADED_DATE = "June 2026";

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-page-topbar">
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
            <p className="rv-tagline">Perception ML Research Engineer</p>
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
                <li>Coursework: Advanced Computer Vision, Self-Driving Cars, Robot Kinematics &amp; Dynamics, Control Systems</li>
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
                <li>GPA: <strong>3.9/4.0</strong> (President's Silver Medalist)</li>
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
                  {["ROS2", "CUDA", "Isaac Sim", "TensorRT", "Docker", "SLURM", "AWS", "Linux", "Git"].map(s => <span key={s} className="rv-tag">{s}</span>)}
                </span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Perception</span>
                <span className="rv-skill-tags">
                  {["PyTorch", "OpenCV", "Open3D", "Domain Adaptation", "3D Object Detection", "Sensor Fusion", "Occupancy Mapping", "CLIP", "DINOv2", "Grounding DINO", "NeRF", "Point Clouds"].map(s => <span key={s} className="rv-tag">{s}</span>)}
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
                  <h3 className="rv-org">Parsons Corporation</h3>
                  <p className="rv-role">Perception ML Research Engineering Intern</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-date">May 2026 - Present</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Build perception systems that detect <strong>15+</strong> roadway assets and defects (potholes, cracks, worn and fallen signs) from raw camera and LiDAR data across two client deployments.</li>
                <li>Own an end-to-end road-sign pipeline: detection, multi-view association and clustering, prediction pooling, and zero-shot classification with foundation models (Grounding DINO, DINOv2, CLIP).</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">University of Michigan <span className="rv-org-sep">|</span> <span className="rv-advisor">Advisor: Alan Papalia</span></h3>
                  <p className="rv-role">Research Assistant, Perception &amp; Simulation</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Ann Arbor, MI</span>
                  <span className="rv-date">Mar 2026 - May 2026</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Built a detailed Isaac Sim environment with a payload-equipped Boston Dynamics Spot (Ouster OS0 LiDAR, ZED 2i stereo, VN-100 IMU) to generate synthetic training data.</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">IIT Hyderabad <span className="rv-org-sep">|</span> <span className="rv-advisor">Advisor: Vineeth N. Balasubramanian</span></h3>
                  <p className="rv-role">Computer Vision Researcher (Part-time)</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">May 2024 - Feb 2026</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Designed a domain-adaptation framework that unlearns sensitive classes; benchmarked leakage with membership-inference attacks: <strong>22%</strong> lower attack success than the source model, beating 5+ baselines on DomainNet-126.</li>
                <li>Ran <strong>500+</strong> experiments on a SLURM cluster to produce 30+ tables of ablations and baselines.</li>
                <li>First-author paper accepted to <strong>CVPR 2026</strong>.</li>
              </ul>
            </div>

            <div className="rv-entry">
              <div className="rv-entry-header">
                <div>
                  <h3 className="rv-org">PXP Financial &amp; Payintelli</h3>
                  <p className="rv-role">ML Systems Engineer, FinTech</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Hyderabad, India</span>
                  <span className="rv-date">Feb 2025 - Aug 2025</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Built fraud-detection models on 1M+ transactions, raising fraud recall <strong>50%</strong> while keeping false positives under 1% with calibrated thresholds.</li>
                <li>Served models at under <strong>100 ms</strong> latency across 500k+ transactions.</li>
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
                  <p className="rv-role">Perception — Maverick, Autonomous Robot (IGVC)</p>
                </div>
                <div className="rv-meta">
                  <span className="rv-location">Ann Arbor, MI</span>
                  <span className="rv-date">Jan 2026 - Apr 2026</span>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Fused two ZED 2i stereo cameras into one occupancy grid, removing blind spots and expanding coverage <strong>~20%</strong>.</li>
                <li>Cut perception latency from ~160 ms to <strong>~30 ms</strong> with GPU acceleration (PyTorch + CUDA), and built a calibration UI for tuning the 3-DoF camera poses.</li>
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
