import { FiGithub, FiCode, FiLinkedin, FiMail } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import "./SocialRail.css";

const links = [
  { href: "https://github.com/d-arnav", label: "GitHub", Icon: FiGithub },
  { href: "https://leetcode.com/u/Darnav", label: "LeetCode", Icon: FiCode },
  { href: "https://www.linkedin.com/in/darnav/", label: "LinkedIn", Icon: FiLinkedin },
  { href: "https://scholar.google.com/citations?user=MnnRfHgAAAAJ&hl=en", label: "Google Scholar", Icon: SiGooglescholar },
  { href: "mailto:darnav@umich.edu", label: "Email", Icon: FiMail },
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
