import { useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import Lottie from "lottie-react";
import rocketAnimation from "../assets/lottie/rocket.json";
import "./Hero.css";

export default function Hero() {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const api = lottieRef.current;
        if (!api) return;
        if (entry.isIntersecting) api.play();
        else api.pause();
      },
      { threshold: 0 }
    );
    io.observe(el);

    const onVis = () => {
      const api = lottieRef.current;
      if (!api) return;
      if (document.hidden) api.pause();
      else if (el.getBoundingClientRect().bottom > 0 && el.getBoundingClientRect().top < window.innerHeight) api.play();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

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
            I'm interested in Building perception ML systems for real-world robots.
          </span>
        </h1>
        <p className="hero-description">
          My background spans award-winning competition robots, computer vision and robotics
          research, and real-world ML systems.
        </p>
      </Motion.section>

      <div className="hero-visual" ref={containerRef}>
        <Lottie
          lottieRef={lottieRef}
          animationData={rocketAnimation}
          loop
          autoplay
          speed={0.35}
          rendererSettings={{ progressiveLoad: true }}
        />
      </div>
    </div>
  );
}
