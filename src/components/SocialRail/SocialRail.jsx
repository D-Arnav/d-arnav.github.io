import { FiGithub, FiCode, FiLinkedin } from "react-icons/fi";
import "./SocialRail.css";

function SocialRail() {
  return (
    <div className="social-rail">
      <a
        href="https://github.com/d-arnav"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FiGithub />
      </a>

      <a
        href="https://leetcode.com/u/Darnav"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <FiCode />
      </a>

      <a
        href="https://www.linkedin.com/in/darnav/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin />
      </a>

      <span className="rail-line" />
    </div>
  );
}

export default SocialRail;