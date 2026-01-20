import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import SocialRail from "./components/SocialRail/SocialRail";

import Hero from "./sections/Hero/Hero";
import AboutMe from "./sections/AboutMe/AboutMe";
import Projects from "./sections/Projects/Projects";
import Tools from "./sections/Tools/Tools";
import Blogs from "./sections/Blogs/Blogs";
import Consistency from "./sections/Consistency/Consistency";

import IITBlog from "./pages/IITBlog";
import IIITBlog from "./pages/IIITBlog";
import Robotics from "./pages/Robotics";

function App() {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="home-page-divider" />
              <AboutMe />
              <div className="home-page-divider" />
              <Projects />
              <div className="home-page-divider" />
              <Tools />
              <div className="home-page-divider" />
              <Blogs />
              <div className="home-page-divider" />
              <Consistency />
            </>
          } />
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

export default App;
