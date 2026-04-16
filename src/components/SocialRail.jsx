import { FiGithub, FiCode, FiLinkedin } from "react-icons/fi";
import "./SocialRail.css";

const links = [
  { href: "https://github.com/d-arnav", label: "GitHub", Icon: FiGithub },
  { href: "https://leetcode.com/u/Darnav", label: "LeetCode", Icon: FiCode },
  { href: "https://www.linkedin.com/in/darnav/", label: "LinkedIn", Icon: FiLinkedin },
];

export default function SocialRail() {
  return (
    <div className="social-rail">
      {links.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
          <link.Icon />
        </a>
      ))}
      <span className="rail-line" />
    </div>
  );
}
