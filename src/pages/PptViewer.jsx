import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { IoChevronBack, IoChevronForward, IoArrowBack } from "react-icons/io5";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "./PptViewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const TITLES = {
  "chess-in-js": "Chess in JS",
  psycred: "PsyCred",
};

export default function PptViewer() {
  const { name } = useParams();
  const file = `/ppt/${name}.pdf`;
  const title = TITLES[name] || name;

  const [numPages, setNumPages] = useState(null);
  const [slide, setSlide] = useState(1);

  const prev = useCallback(
    () => setSlide((s) => Math.max(1, s - 1)),
    []
  );
  const next = useCallback(
    () => setSlide((s) => (numPages ? Math.min(numPages, s + 1) : s)),
    [numPages]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev();
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <div className="ppt-viewer">
      <div className="ppt-topbar">
        <a href="/#/" className="ppt-back-btn">
          <IoArrowBack />
          Back
        </a>
        <span className="ppt-title">{title}</span>
        <span className="ppt-counter">
          {slide} / {numPages || "-"}
        </span>
      </div>

      <div className="ppt-stage">
        <button
          className="ppt-arrow ppt-arrow-left"
          onClick={prev}
          disabled={slide <= 1}
          aria-label="Previous slide"
        >
          <IoChevronBack />
        </button>

        <div className="ppt-slide-wrap">
          <Document
            file={file}
            onLoadSuccess={({ numPages: n }) => setNumPages(n)}
            loading={<div className="ppt-status">Loading presentation...</div>}
            error={<div className="ppt-status">Failed to load file.</div>}
          >
            <Page
              pageNumber={slide}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="ppt-slide"
            />
          </Document>
        </div>

        <button
          className="ppt-arrow ppt-arrow-right"
          onClick={next}
          disabled={slide >= numPages}
          aria-label="Next slide"
        >
          <IoChevronForward />
        </button>
      </div>

      <div className="ppt-progress">
        <div
          className="ppt-progress-fill"
          style={{ width: numPages ? `${(slide / numPages) * 100}%` : "0%" }}
        />
      </div>
    </div>
  );
}
