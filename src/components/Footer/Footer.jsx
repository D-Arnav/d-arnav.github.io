import { FiArrowUp } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { motion as Motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Motion.footer
      className="footer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="footer-inner">
        <div className="footer-left">
          {/* <p className="footer-built">
            Built with <FaReact className="footer-icon react-icon" /> React + <TbBrandVite className="footer-icon vite-icon" /> Vite
          </p> */}
          <p className="footer-text">© Arnav 2025. All rights reserved.</p>
        </div>

        <button
          className="to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
          <span className="to-top-text">Back to top</span>
        </button>
      </div>
    </Motion.footer>
  );
}

export default Footer;