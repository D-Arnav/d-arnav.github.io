import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import "./BlogShowcase.css";

const blogs = [
  {
    to: "/blogs/scada",
    title: "Unlearning Zero-Shot Transfer in Domain Adaptation",
    subtitle: "CVPR 2026 — Adversarial optimization for source-free domain adaptation",
    image: "/blog/scada/method.png",
  },
  {
    to: "/blogs/scripture",
    title: "Scripture Text-Line Segmentation",
    subtitle: "OCR pipeline for degraded South Asian manuscripts",
    image: "/blog/scripture/intro.png",
  },
];

export default function BlogShowcase() {
  return (
    <Reveal>
      <section className="section" id="blog-showcase">
        <div className="section-header">
          <span className="section-eyebrow">Writing</span>
          <h2 className="section-title">
            Research <span className="section-title-glow">Blogs</span>
          </h2>
        </div>

        <div className="blog-showcase-grid">
          {blogs.map(({ to, title, subtitle, image }) => (
            <Link key={to} to={to} className="blog-showcase-card" target="_blank" rel="noopener noreferrer">
              <div className="blog-showcase-img-wrap">
                <img src={image} alt={title} loading="lazy" decoding="async" />
              </div>
              <div className="blog-showcase-info">
                <h3 className="blog-showcase-title">{title}</h3>
                <p className="blog-showcase-subtitle">{subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
