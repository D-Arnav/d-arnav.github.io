import { motion as Motion } from "framer-motion";
import "./Hero.css";
import { heroData } from "../../../data/home";
import HeroVisual from "../../components/HeroVisual/HeroVisual";

function Hero() {
  return (
    <div className="hero-layout">
      <Motion.section
        className="hero"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="hero-intro">{heroData.intro} <span className="hero-name">{heroData.name}</span>.</p>

        <h1 className="hero-title">
          <span className="hero-glow">
            {heroData.title}
          </span>
        </h1>

        <p className="hero-description">
          {heroData.description}
        </p>
      </Motion.section>
      <HeroVisual />
    </div>
  );
}

export default Hero;