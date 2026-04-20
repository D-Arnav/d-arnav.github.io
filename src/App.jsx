import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SocialRail from "./components/SocialRail";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";

import Consistency from "./sections/Consistency";
import BlogShowcase from "./sections/BlogShowcase";

const ScadaBlog = lazy(() => import("./pages/ScadaBlog"));
const ScriptureBlog = lazy(() => import("./pages/ScriptureBlog"));
const Robotics = lazy(() => import("./pages/Robotics"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const PptViewer = lazy(() => import("./pages/PptViewer"));

const homeSections = [Hero, AboutMe, Projects, Tools, BlogShowcase, Consistency];

function Home() {
  return homeSections.map((Section, i) => (
    <div key={i} className="snap-section">
      <Section />
      {i === homeSections.length - 1 && <Footer />}
    </div>
  ));
}

export default function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/scada" element={<><ScadaBlog /><Footer /></>} />
            <Route path="/blogs/scripture" element={<><ScriptureBlog /><Footer /></>} />
            <Route path="/blogs/robotics" element={<><Robotics /><Footer /></>} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/ppt/:name" element={<PptViewer />} />
          </Routes>
        </Suspense>
      </div>
      <SocialRail />
    </HashRouter>
  );
}
