"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useReveal } from '../hooks/useReveal';
import './projects.css';

const allProjects = [
  {
    id: 1,
    title: 'Signify AI',
    category: 'AI/ML',
    desc: <>Signify AI is a real-time Indonesian Sign Language (BISINDO) recognition web application that translates hand gestures into text directly in the browser. Built with Next.js and FastAPI, the system captures webcam frames on the frontend and performs inference using a fine-tuned YOLO11 object detection model on the backend. Achieved <strong>95% accuracy</strong> and <strong>&lt;130ms real-time latency</strong>.</>,
    tech: 'Next.js // FastAPI // YOLO11',
    image: '/pbl-sems4.png',
    imageAlt: 'Signify AI project cover',
    github: 'https://github.com/godlovesmei/signify-ai',
    demo: '#'
  },
  {
    id: 2,
    title: 'AlgoFun',
    category: 'AI/ML',
    desc: <>AlgoFun is an AI-powered educational web application built with Laravel and FastAPI that helps elementary school students improve logical and algorithmic thinking through interactive learning content. The system integrates a <strong>production-ready Retrieval-Augmented Generation (RAG) pipeline</strong>.</>,
    tech: 'Laravel // FastAPI // RAG',
    image: '/pbl-sems3.png',
    imageAlt: 'AlgoFun project cover',
    github: 'https://github.com/choccoo4/algofun',
    demo: 'https://youtu.be/yVI56K7BMmE?si=4_BlborjIg-Qn50s'
  },
  {
    id: 3,
    title: 'Venus Cars',
    category: 'WEB',
    desc: 'Venus Cars is a car marketplace platform built with Laravel that provides a modern and user-friendly experience for buyers and sellers. Features various car categories, search and filtering, user authentication, direct communication, and transaction support for both cash and credit payments.',
    tech: 'Laravel // MySQL',
    image: '/pbl-sems2.png',
    imageAlt: 'Venus Cars project cover',
    github: 'https://github.com/godlovesmei/PBL_Kelp3_IF2A_Pagi',
    demo: 'https://venuscars.vercel.app/home'
  },
  {
    id: 4,
    title: 'PureBeauty',
    category: 'WEB',
    desc: 'PureBeauty is a skincare e-commerce platform built with native PHP that allows customers to search, filter, and purchase products. The system includes user authentication, product CRUD operations, category-based search and filtering, automated feedback responses, and responsive interface.',
    tech: 'PHP // MySQL',
    image: '/pbl-sems1.png',
    imageAlt: 'PureBeauty project cover',
    github: '#',
    demo: 'https://youtu.be/ISdzcMD1hGY?si=cvIun0p0pVqWpUj8'
  }
];

const categories = ['ALL', 'AI/ML', 'WEB'];

const ProjectCard = ({ project, index }: { project: typeof allProjects[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setTilt({ x: -y, y: x });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      className={`project-card clip-cyber ${isExpanded ? 'expanded' : ''}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transitionDelay: `${index * 0.05}s`
      }}
    >
      <div className="project-thumbnail">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 25vw"
          className="project-cover-image"
          loading="eager"
        />
        <div className="thumb-gradient" />
        <span className="project-category">{project.category}</span>
      </div>

      <div className="card-top">
        <div className="project-id">DB_ENTRY_{project.id.toString().padStart(3, '0')}</div>
        <div className="project-tech neon-text-cyan">{project.tech}</div>
      </div>

      <h3 className="project-title">{project.title}</h3>
      <p className={`project-desc ${isExpanded ? 'expanded' : ''}`}>{project.desc}</p>

      {project.id === 1 && (
        <div className="ai-metrics">
          <div className="metric">
            <span className="label">ACCURACY</span>
            <span className="value neon-text-cyan">95.2%</span>
          </div>
          <div className="metric">
            <span className="label">LATENCY</span>
            <span className="value neon-text-pink">&lt;130ms</span>
          </div>
          <div className="metric">
            <span className="label">STATUS</span>
            <span className="value neon-text-yellow pulse">DEPLOYED</span>
          </div>
        </div>
      )}

      {/* FIXED: Hide read more di mobile via CSS */}
      <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '[ COLLAPSE ]' : '[ READ MORE ]'}
      </button>

      <div className="card-actions">
        <a href={project.demo} className="btn btn-demo" target="_blank" rel="noopener noreferrer">
          <span className="btn-icon">▶</span> DEPLOY // LIVE
        </a>
        <a href={project.github} className="btn btn-source" target="_blank" rel="noopener noreferrer">
          <span className="btn-icon">&lt;/&gt;</span> SOURCE // CODE
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, visible } = useReveal(0.1);
  const [filter, setFilter] = useState('ALL');
  const [mobileIndex, setMobileIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filtered = filter === 'ALL' ? allProjects : allProjects.filter(p => p.category === filter);

  // FIXED: Mobile carousel snap detection
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.offsetWidth * 0.85 + 16; // 85vw + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setMobileIndex(Math.min(newIndex, Math.max(0, filtered.length - 1)));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [filtered.length]);

  // FIXED: Scroll ke card tertentu
  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.offsetWidth * 0.85 + 16;
    carouselRef.current.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setMobileIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="projects-section" ref={ref}>
      <div className={`projects-header reveal-up ${visible ? 'visible' : ''}`}>
        <h2 className="neon-text-yellow glitch-hover" data-text="PROJECT ARCHIVE">PROJECT ARCHIVE</h2>
        <div className="header-line"></div>
      </div>

      <div className={`filter-tabs reveal-up ${visible ? 'visible' : ''}`}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => handleFilterChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid" ref={carouselRef}>
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* FIXED: Pagination dots */}
      <div className="mobile-dots">
        {filtered.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === mobileIndex ? 'active' : ''}`}
            onClick={() => scrollToCard(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
