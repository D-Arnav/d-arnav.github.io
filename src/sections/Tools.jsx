import {
  SiPython, SiPytorch, SiOpencv, SiFastapi,
  SiDocker, SiGit, SiLinux, SiCplusplus, SiNvidia, SiRos,
  SiAmazonwebservices, SiJavascript, SiGnubash, SiKubernetes,
  SiPostgresql, SiApachekafka, SiScikitlearn, SiGithubactions,
  SiPytest, SiHuggingface,
} from "react-icons/si";
import Reveal from "../components/Reveal";
import SlurmIcon from "../assets/SlurmIcon";
import MatlabIcon from "../assets/MatlabIcon";
import Open3dIcon from "../assets/Open3dIcon";
import SimulinkIcon from "../assets/SimulinkIcon";
import NerfIcon from "../assets/NerfIcon";
import SensorFusionIcon from "../assets/SensorFusionIcon";
import SlamIcon from "../assets/SlamIcon";
import SqlIcon from "../assets/SqlIcon";
import "./Tools.css";

const groups = [
  {
    category: "Languages",
    items: [
      { name: "Python", Icon: SiPython },
      { name: "C++", Icon: SiCplusplus },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "MATLAB", Icon: MatlabIcon },
      { name: "SQL", Icon: SqlIcon },
      { name: "Bash", Icon: SiGnubash },
    ],
  },
  {
    category: "ML & Perception",
    items: [
      { name: "PyTorch", Icon: SiPytorch },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "Open3D", Icon: Open3dIcon },
      { name: "CUDA", Icon: SiNvidia },
      { name: "Transformers", Icon: SiHuggingface },
      { name: "scikit-learn", Icon: SiScikitlearn },
      { name: "NeRF", Icon: NerfIcon },
      { name: "Sensor Fusion", Icon: SensorFusionIcon },
      { name: "Semantic SLAM", Icon: SlamIcon },
    ],
  },
  {
    category: "Robotics & Systems",
    items: [
      { name: "ROS2", Icon: SiRos },
      { name: "Simulink", Icon: SimulinkIcon },
      { name: "Linux", Icon: SiLinux },
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "SLURM", Icon: SlurmIcon },
      { name: "Git", Icon: SiGit },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "FastAPI", Icon: SiFastapi },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Kafka", Icon: SiApachekafka },
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "CI/CD", Icon: SiGithubactions },
      { name: "pytest", Icon: SiPytest },
    ],
  },
];

export default function Tools() {
  return (
    <Reveal>
      <section className="section" id="tools">
        <div className="section-header">
          <span className="section-eyebrow">Skills</span>
          <h2 className="section-title">
            Tools <span className="section-title-glow">I Use</span>
          </h2>
        </div>

        <div className="skills-container">
          {groups.map(({ category, items }) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-badges">
                {items.map((item) => (
                  <div key={item.name} className="skill-pill">
                    {item.Icon && (
                      <span className="skill-pill-icon"><item.Icon /></span>
                    )}
                    <span className="skill-pill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
