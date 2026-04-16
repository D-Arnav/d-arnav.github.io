import { Fragment } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SocialRail from "./components/SocialRail";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";

import Consistency from "./sections/Consistency";
import IITBlog from "./pages/IITBlog";
import IIITBlog from "./pages/IIITBlog";
import Robotics from "./pages/Robotics";

const homeSections = [Hero, AboutMe, Projects, Tools, Consistency];

function Home() {
  return homeSections.map((Section, i) => (
    <Fragment key={i}>
      {i > 0 && <div className="section-divider" />}
      <Section />
    </Fragment>
  ));
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/iit-blog" element={<IITBlog />} />
          <Route path="/blogs/iiit-blog" element={<IIITBlog />} />
          <Route path="/blogs/robotics" element={<Robotics />} />
        </Routes>
      </div>
      <SocialRail />
      <Footer />
    </HashRouter>
  );
}
