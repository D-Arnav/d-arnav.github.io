import './Blog.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';

export const BlogTitle = ({ title, author, date, highlight, children }) => {
    if (children) return <h1>{children}</h1>;
    if (!title) return null;

    let content = title;
    if (highlight) {
        const idx = title.indexOf(highlight);
        if (idx !== -1) {
            const before = title.slice(0, idx);
            const after = title.slice(idx + highlight.length);
            content = (
                <>
                    {before}
                    <span>{highlight}</span>
                    {after}
                </>
            );
        }
    }

    return (
        <div className="blog-title">
            <div className="blog-title-top">
                <h1>{content}</h1>
            </div>
            {(author || date) && (
                <div className="blog-title-meta">
                    {author && <span className="blog-author">{author}</span>}
                    {date && <span className="blog-date">{date}</span>}
                </div>
            )}
        </div>
    );
};

export const BlogImage = ({ src, alt, scale = 90, caption }) => {
    return (
        <div className="blog-image-container">
            <img
                src={src}
                alt={alt}
                style={{ maxWidth: `${scale}%` }}
            />
            {caption && <p className="blog-image-caption">{caption}</p>}
        </div>
    );
};

export const Math = ({ children, display = false }) => {
    const mathRef = useRef(null);
    const content = children?.toString() || '';

    useEffect(() => {
        if (mathRef.current && content) {
            try {
                katex.render(content, mathRef.current, {
                    displayMode: display,
                    throwOnError: false,
                });
            } catch (e) {
                console.error('KaTeX render error:', e);
            }
        }
    }, [content, display]);

    return <span ref={mathRef} className={`blog-math ${display ? 'blog-math-display' : ''}`} />;
};