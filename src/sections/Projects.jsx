import { useState, useEffect } from "react";
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
    org: "IIT Hyderabad, CVPR 2026",
    duration: "Mar 2026",
    description: "Machine unlearning for source-free domain adaptation, selectively erasing source-exclusive class knowledge without access to source data. CVPR 2026 poster.",
    tags: ["Domain Adaptation", "Unlearning", "PyTorch", "Research"],
    image: "/blog/scada/method.png",
    click: "/#/blogs/scada",
    links: {
      paper: "https://arxiv.org/abs/2604.08238",
      github: "https://github.com/D-Arnav/SCADA",
      blog: "/#/blogs/scada",
    },
  },
  {
    title: "Scripture Text Segmentation",
    org: "IIIT Hyderabad",
    duration: "Jun 2023",
    description: "OCR preprocessing pipeline for degraded South Asian manuscripts using seam carving, projection profiles, and transfer learning with DocEnTr.",
    tags: ["Computer Vision", "Transfer Learning", "Research"],
    image: "/blog/scripture/intro.png",
    click: "/#/blogs/scripture",
    links: {
      blog: "/#/blogs/scripture",
    },
  },
  {
    title: "3D Pipe Segmentation",
    org: "UM Robex Lab",
    duration: "Mar 2026",
    description: "Extracts pipe geometry from colored point clouds by lifting 2D segmentation masks into 3D space and fitting cylinder axes via SVD.",
    tags: ["Point Clouds", "3D Vision", "Segmentation", "Python"],
    image: "/projects/pipe-segmentation.jpg",
    click: "https://github.com/D-Arnav/3D-Pipe-Segmentation",
    links: {
      github: "https://github.com/D-Arnav/3D-Pipe-Segmentation"
    }
  },
  {
    title: "mARVin",
    org: "UM Autonomous Robot Vehicle Club",
    duration: "Mar 2026",
    description: "Stereo depth camera fusion pipeline merging dual ZED 2i point clouds and BEV occupancy grids for a wider field of view on an autonomous vehicle.",
    tags: ["Robotics", "3D Vision", "PyTorch", "CUDA", "ROS"],
    image: "/projects/camera-merge.jpg",
    click: "https://github.com/umigv/cv-depth-segmentation",
    links: {
      github: "https://github.com/umigv/cv-depth-segmentation",
      demo: "https://www.youtube.com/shorts/LlErjdI5gNo",
    },
  },
  {
    title: "Shipyard Semantic Mapping",
    org: "UM Robex Lab",
    duration: "Ongoing",
    description: "BIM-guided semantic SLAM for ship construction environments — leveraging door and column meshes as priors to identify and refine object representations within building scenes.",
    tags: ["SLAM", "Semantic Mapping", "3D Vision", "Research"],
    image: "/projects/bimslam.jpg",
  },
  {
    title: "3D Novel Object View",
    duration: "Nov 2025",
    description: "Synthesizes photorealistic novel views of a scene from sparse multi-view images using Neural Radiance Fields (NeRF).",
    tags: ["3D Vision", "NeRF", "Deep Learning", "Python"],
    image: "/projects/nerf-synthesis.jpg",
    click: "https://github.com/D-Arnav/Novel-View-Synthesis-with-NeRF",
    links: {
      github: "https://github.com/D-Arnav/Novel-View-Synthesis-with-NeRF"
    }
  },
  {
    title: "4D Human Reconstruction",
    duration: "Nov 2025",
    description: "Recovers time-varying 3D human body meshes from monocular video, producing frame-by-frame SMPL reconstructions via the 4DHumans pipeline.",
    tags: ["3D Vision", "Deep Learning", "Python"],
    image: "/projects/human-reconstruction.jpg",
    click: "https://github.com/D-Arnav/3D-4D-Human-Mesh-Reconstruction",
    links: {
      github: "https://github.com/D-Arnav/3D-4D-Human-Mesh-Reconstruction"
    }
  },
  {
    title: "PsyCred",
    org: "Mathademia 2024 - Hackathon",
    duration: "May 2024",
    description: "Credit scoring system that augments traditional financial signals with psychometric test results, using LLMs to generate and evaluate personality-driven risk profiles.",
    tags: ["Python", "HTML", "CSS", "GenAI", "LLMs"],
    image: "/projects/psycred.jpg",
    click: "/#/ppt/psycred",
    links: {
      github: "https://github.com/D-Arnav/PsyCred",
      ppt: "/#/ppt/psycred",
      demo: "https://drive.google.com/file/d/1g6qGwY4n59WsqaHQLtq64A4PTQh8qDpF/view",
    },
  },
  {
    title: "WaveWear",
    org: "World Robot Olympiad 2023",
    duration: "Sep 2023",
    description: "Lightweight wristband prototype to help locate children in crowded environments, with a live Flask dashboard and chat interface.",
    tags: ["Python", "Flask", "Arduino"],
    image: "/projects/wavewear.jpg",
    click: "https://drive.google.com/file/d/1TeGL-5e88uChCbVvkm7KELehCuKnsWX3/view",
    links: {
      reports: "https://drive.google.com/file/d/1TeGL-5e88uChCbVvkm7KELehCuKnsWX3/view",
    },
  },
  {
    title: "Chess in JS",
    duration: "Oct 2022",
    description: "Fully playable chess engine built from scratch including move validation, check/checkmate detection, and special rules (castling, enpassant, promotion) with 0 libraries.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/projects/chess.jpg",
    click: "/#/ppt/chess-in-js",
    links: {
      github: "https://github.com/D-Arnav/Chess-in-JS",
      ppt: "/#/ppt/chess-in-js",
    },
  },
  {
    title: "Object Trajectory Estimation",
    duration: "Mar 2023",
    description: "Predicts projectile trajectories in real time by segmenting the object, tracking its centroid, and least-squares fitting a parabola to the last K samples.",
    tags: ["Computer Vision", "Python", "OpenCV"],
    image: "/projects/trajectory-estimation.jpg",
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

function ProjectItem({ title, org, duration, description, tags, links, image, click }) {
  const handleClick = click
    ? () => window.open(click, "_blank", "noopener,noreferrer")
    : undefined;

  return (
    <div
      className={`project-item${click ? " project-item-clickable" : ""}`}
      onClick={handleClick}
      role={click ? "link" : undefined}
    >
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

        <div className="project-links" onClick={(e) => e.stopPropagation()}>
          {links &&
            Object.entries(links).map(([type, href]) => (
              <ProjectLink key={type} type={type} href={href} />
            ))}
        </div>
      </div>
    </div>
  );
}

function usePageSize() {
  const getSize = () => (window.innerWidth <= 600 ? 1 : 6);
  const [size, setSize] = useState(getSize);
  useEffect(() => {
    const onResize = () => setSize(getSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return size;
}

export default function Projects() {
  const pageSize = usePageSize();
  const totalPages = Math.ceil(projects.length / pageSize);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page >= totalPages) setPage(Math.max(0, totalPages - 1));
  }, [totalPages, page]);

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
                  {projects.slice(i * pageSize, (i + 1) * pageSize).map((p) => (
                    <ProjectItem key={p.title} {...p} />
                  ))}
                  {Array.from(
                    { length: pageSize - projects.slice(i * pageSize, (i + 1) * pageSize).length },
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
