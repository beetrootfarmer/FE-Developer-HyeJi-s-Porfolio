import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../data/types';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="project-detail-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-detail"
        layoutId={`card-${project.slug}`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-detail-close"
          data-cursor-hover
          onClick={onClose}
          aria-label="Close project detail"
        >
          ×
        </button>

        <motion.div className="project-detail-gallery" ref={galleryRef} data-cursor-hover>
          <motion.div
            className="project-detail-gallery-track"
            drag={project.images.length > 1 ? 'x' : false}
            dragConstraints={galleryRef}
            dragElastic={0.08}
          >
            {project.images.map((image, index) => (
              <motion.img
                key={image.src}
                src={image.src}
                alt={image.alt}
                draggable={false}
                layoutId={index === 0 ? `image-${project.slug}` : undefined}
              />
            ))}
          </motion.div>
        </motion.div>

        {project.images.length > 1 && (
          <span className="project-detail-gallery-hint">← Drag to see more →</span>
        )}

        <motion.div
          className="project-detail-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <div className="project-detail-heading">
            <span className="eyebrow">
              {project.role} · {project.year}
            </span>
            <h2>{project.title}</h2>
          </div>

          <p className="project-detail-text">{project.description}</p>

          <ul className="project-detail-tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {project.code && (
            <div className="project-detail-code">
              <span className="project-detail-code-label">{project.code.label}</span>
              <pre>
                <code>{project.code.code}</code>
              </pre>
            </div>
          )}

          {(project.liveUrl || project.repoUrl) && (
            <div className="project-detail-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" data-cursor-hover>
                  Live site ↗
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer" data-cursor-hover>
                  Source ↗
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
