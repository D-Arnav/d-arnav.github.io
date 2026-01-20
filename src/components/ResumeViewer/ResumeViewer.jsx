import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { IoOpenOutline, IoRemove, IoAdd, IoChevronBack, IoChevronForward } from "react-icons/io5";
import "./ResumeViewer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function ResumeViewer({ file, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.4);

  // Disable body scroll when resume viewer is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Close when clicking outside modal
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('resume-overlay')) {
      onClose();
    }
  };

  return (
    <div className="resume-overlay" onClick={handleOverlayClick}>
      <div className="resume-modal">
        {/* Header */}
        <div className="resume-toolbar">
          <span className="resume-title">Résumé</span>

          <div className="controls">
            <div className="zoom-controls">
              <button 
                className="zoom-btn"
                onClick={() => setScale(s => Math.max(0.8, s - 0.1))}
                title="Zoom out"
              >
                <IoRemove />
              </button>
              <span className="zoom-indicator">{Math.round(scale * 100)}%</span>
              <button 
                className="zoom-btn"
                onClick={() => setScale(s => Math.min(2, s + 0.1))}
                title="Zoom in"
              >
                <IoAdd />
              </button>
            </div>
            <button className="action-btn" onClick={() => window.open(file, "_blank")}>
              <IoOpenOutline className="btn-icon" />
              Open
            </button>
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          </div>
        </div>

        {/* PDF */}
        <div className="resume-content">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(error) => console.error("Error loading PDF:", error)}
            loading={<div style={{ color: "white", padding: "20px" }}>Loading PDF...</div>}
            error={<div style={{ color: "white", padding: "20px" }}>Failed to load PDF file.</div>}
          >
            <Page 
              pageNumber={page} 
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {/* Footer */}
        <div className="resume-footer">
          <button 
            className="nav-btn"
            disabled={page <= 1} 
            onClick={() => setPage(p => p - 1)}
            title="Previous page"
          >
            <IoChevronBack /> Previous
          </button>
          <span className="page-indicator">
            Page <strong>{page}</strong> of <strong>{numPages || '—'}</strong>
          </span>
          <button 
            className="nav-btn"
            disabled={page >= numPages} 
            onClick={() => setPage(p => p + 1)}
            title="Next page"
          >
            Next <IoChevronForward />
          </button>
        </div>
      </div>
    </div>
  );
}
