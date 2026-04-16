import { motion as Motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-inner">
        <p className="footer-text">© Arnav 2025. All rights reserved.</p>

        <button
          className="to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
          <span className="to-top-text">Back to top</span>
        </button>
      </div>
    </Motion.footer>
  );
}
