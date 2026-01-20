import Lottie from "lottie-react";
import rocketAnimation from "../../assets/lottie/rocket.json";
import "./HeroVisual.css";

function HeroVisual() {
  return (
    <div className="hero-visual">
      <Lottie
        animationData={rocketAnimation}
        loop={true}
        autoplay={true}
        speed={0.35}
      />
    </div>
  );
}

export default HeroVisual;
