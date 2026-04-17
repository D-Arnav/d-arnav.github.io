import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./Blogs.css";

const blogs = [
  {
    to: "/blogs/scada",
    title: "Ø Source Models Leak What They Shouldn't ↛: Unlearning Zero-Shot Transfer in Domain Adaptation Through Adversarial Optimization",
    date: "Jan 2, 2026",
  },
  {
    to: "/blogs/scripture",
    title: "Scripture Text-Line Segmentation",
    date: "June 2, 2023",
  },
];

export default function Blogs() {
  return (
    <Reveal>
      <section id="blogs" className="section">
        <div className="section-header">
          <span className="section-eyebrow">Writing</span>
          <h2 className="section-title">
            Recent <span className="section-title-glow">Blogs</span>
          </h2>
        </div>

        <div className="blog-list">
          {blogs.map(({ to, title, date }) => (
            <div key={to} className="blog-link-item">
              <Link to={to} className="blog-link" target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
                <span className="blog-date">{date}</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
