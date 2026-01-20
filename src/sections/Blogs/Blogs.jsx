import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../components/common/Reveal";
import "./Blogs.css";
import "../../pages/About.css";

function Blogs() {
    return (
        <Reveal>
            <section id="blogs" className="about-page-section" style={{ marginTop: "4rem", maxWidth: "1200px", margin: "4rem auto", padding: "0 24px" }}>
                <div className="about-page-section-header">
                    <span className="about-page-eyebrow">Writing</span>
                    <h2 className="about-page-section-title">
                        Recent <span className="about-page-title-glow">Blogs</span>
                    </h2>
                </div>
                <div className="blog-list">
                    <div className="blog-link-item">
                        <Link to="/blogs/iit-blog" className="blog-link" target="_blank" rel="noopener noreferrer">
                            <h3>Ø Source Models Leak What They Shouldn't ↛: Unlearning Zero-Shot Transfer in Domain Adaptation Through Adversarial Optimization</h3>
                            <span className="blog-date">Jan 2, 2026</span>
                        </Link>
                    </div>
                    <div className="blog-link-item">
                        <Link to="/blogs/iiit-blog" className="blog-link" target="_blank" rel="noopener noreferrer">
                            <h3>Scripture Text-Line Segmentation</h3>
                            <span className="blog-date">June 2, 2023</span>
                        </Link>
                    </div>
                </div>
            </section>
        </Reveal>
    );
}

export default Blogs;
