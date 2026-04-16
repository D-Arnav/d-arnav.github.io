import { motion as Motion } from "framer-motion";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/lottie/rocket.json";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero-layout">
      <Motion.section
        className="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="hero-intro">
          Hi, I'm <span className="hero-name">Arnav.</span>
        </p>
        <h1 className="hero-title">
          <span className="hero-glow">
            I'm interested in Building perception systems for robots.
          </span>
        </h1>
        <p className="hero-description">
          My background spans award-winning competition robots, computer vision
          research, and real-world ML systems.
        </p>
      </Motion.section>

      <div className="hero-visual">
        <Lottie animationData={rocketAnimation} loop autoplay speed={0.35} />
      </div>
    </div>
  );
}
