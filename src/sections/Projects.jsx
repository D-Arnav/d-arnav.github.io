import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiSlideshowLine, RiArticleLine } from "react-icons/ri";
import { TiMediaPlayOutline } from "react-icons/ti";
import { IoDocumentTextOutline, IoChevronBack, IoChevronForward } from "react-icons/io5";
import Reveal from "../components/Reveal";
import "./Projects.css";
const projects = [
  {
    title: "SCADA Unlearning",
    org: "IIT Hyderbad, CVPR 2026",
    duration: "Mar 2026",
    description: "Machine unlearning for source-free domain adaptation — selectively erasing source-exclusive class knowledge without access to source data.",
    tags: ["Domain Adaptation", "Unlearning", "PyTorch", "CVPR"],
    image: "/blog/iit-blog/method.png",
    links: {
      paper: "https://arxiv.org/abs/2604.08238",
      github: "https://github.com/D-Arnav/SCADA",
      blog: "/#/blogs/iit-blog",
    },
  },
  {
    title: "Scripture Text Segmentation",
    org: "IIIT Hyderbad",
    duration: "Jun 2023",
    description: "OCR preprocessing pipeline for degraded South Asian manuscripts using seam carving, projection profiles, and transfer learning with DocEnTr.",
    tags: ["Computer Vision", "Transfer Learning", "Python"],
    image: "/blog/iiit-blog/1-intro.png",
    links: {
      blog: "/#/blogs/iiit-blog",
    },
  },
  {
    title: "3D Pipe Segmentation",
    duration: "Mar 2026",
    description: "Segmenting pipes from colored point clouds by lifting 2D segmentation masks into 3D and fitting cylinder axes with SVD.",
    tags: ["Point Clouds", "3D Vision", "Segmentation", "Python"],
    image: "/pipe.jpg",
    links: {
      github: "https://github.com/D-Arnav/3D-Pipe-Segmentation"
    }
  },
  {
    title: "3D Novel Object View",
    duration: "Nov 2025",
    description: "Novel view synthesis using Neural Radiance Fields (NeRF) for 3D scene reconstruction from sparse multi-view images.",
    tags: ["3D Vision", "NeRF", "Deep Learning", "Python"],
    image: "/nerf.jpg",
    links: {
      github: "https://github.com/D-Arnav/Novel-View-Synthesis-with-NeRF"
    }
  },
  {
    title: "4D Human Reconstruction",
    duration: "Nov 2025",
    description: "Recovering time-varying 3D human body meshes from monocular video using the 4DHumans pipeline.",
    tags: ["3D Vision", "Deep Learning", "Python"],
    image: "/human_mesh.png",
    links: {
      github: "https://github.com/D-Arnav/3D-4D-Human-Mesh-Reconstruction"
    }
  },
  {
    title: "PsyCred",
    org: "Mathademia 2024 - Hackathon",
    duration: "May 2024",
    description: "Psychometric Test-based Credit Scoring System",
    tags: ["Python", "HTML", "CSS", "GenAI", "LLMs"],
    image: "/psycred.jpg",
    links: {
      github: "https://github.com/D-Arnav/PsyCred",
      ppt: "https://drive.google.com/file/d/1pyxTOgBn69p3HnrU7M4LoHEnBMgz8LeH/view?usp=sharing",
      demo: "https://drive.google.com/file/d/1g6qGwY4n59WsqaHQLtq64A4PTQh8qDpF/view",
    },
  },
  {
    title: "WaveWear",
    org: "World Robot Olympiad 2023",
    duration: "Sep 2023",
    description: "Lightweight wristband prototype for locating children in crowded environments.",
    tags: ["Python", "Flask", "Arduino"],
    image: "/wavewear.jpg",
    links: {
      reports: "https://drive.google.com/file/d/1TeGL-5e88uChCbVvkm7KELehCuKnsWX3/view",
    },
  },
  {
    title: "Chess in JS",
    duration: "Oct 2022",
    description: "Chess move validation from scratch with 0 external libraries.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "chess.png",
    links: {
      github: "https://github.com/D-Arnav/Chess-in-JS",
      ppt: "https://drive.google.com/file/d/1NA-eakVaDxWJLL8YOlAaX-Fd3Agzg-Qu/view",
    },
  },
  {
    title: "Object Trajectory Estimation",
    duration: "Mar 2023",
    description: "Predicts projectile trajectories in real time by segmenting the object, tracking its centroid, and least-squares fitting a parabola to the last K samples.",
    tags: ["Computer Vision", "Python", "OpenCV"],
    image: "/trajectory.png",
  },
];

const LINK_ICONS = {
  github: { Icon: SiGithub, label: "Code" },
  reports: { Icon: HiOutlineDocumentReport, label: "Report" },
  ppt: { Icon: RiSlideshowLine, label: "Slides" },
  demo: { Icon: TiMediaPlayOutline, label: "Video" },
  paper: { Icon: IoDocumentTextOutline, label: "Arxiv" },
  blog: { Icon: RiArticleLine, label: "Blog" },
};

function ProjectLink({ href, type }) {
  const meta = LINK_ICONS[type];
  if (!meta || !href) return null;
  const { Icon, label } = meta;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="pill-btn icon-only"
      aria-label={label}
    >
      {label}
      <Icon />
    </a>
  );
}

function ProjectItem({ title, org, duration, description, tags, links, image }) {
  return (
    <div className="project-item">
      {image && (
        <div className="project-image-container">
          <img
            src={image}
            alt={title}
            className="project-image"
            loading="lazy"
            decoding="async"
          />
          <div className="project-image-overlay">
            <div className="project-title-row">
              <h3 className="project-title">{title}</h3>
              {org && <span className="project-org">@ {org}</span>}
            </div>
          </div>
          {duration && <span className="project-duration">{duration}</span>}
        </div>
      )}

      <div className="project-body">

        {description && <p className="project-desc">{description}</p>}

        <div className="project-spacer" />

        <ul className="project-tags">
          {tags?.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <div className="project-links">
          {links &&
            Object.entries(links).map(([type, href]) => (
              <ProjectLink key={type} type={type} href={href} />
            ))}
        </div>
      </div>
    </div>
  );
}

const PAGE_SIZE = 6;
const totalPages = Math.ceil(projects.length / PAGE_SIZE);

export default function Projects() {
  const [page, setPage] = useState(0);

  return (
    <Reveal>
      <section className="section" id="projects">
        <div className="section-header">
          <span className="section-eyebrow">Projects</span>
          <h2 className="section-title">
            Things <span className="section-title-glow">I've Built</span>
          </h2>
        </div>

        <div className="projects-paginated">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
            aria-label="Previous projects"
          >
            <IoChevronBack />
          </button>

          <div className="projects-viewport">
            <div
              className="projects-slider"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: totalPages }, (_, i) => (
                <div key={i} className="projects-grid">
                  {projects.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE).map((p) => (
                    <ProjectItem key={p.title} {...p} />
                  ))}
                  {Array.from(
                    { length: PAGE_SIZE - projects.slice(i * PAGE_SIZE, (i + 1) * PAGE_SIZE).length },
                    (_, j) => <div key={`placeholder-${j}`} className="project-item-placeholder" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages - 1}
            aria-label="More projects"
          >
            <IoChevronForward />
          </button>
        </div>

        {totalPages > 1 && (
          <div className="page-dots">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-dot ${i === page ? "active" : ""}`}
                onClick={() => setPage(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </section>
    </Reveal>
  );
}
