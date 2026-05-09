"use client";

import React, { useState } from 'react';
import './projects.css';

const projects = [
  {
    id: 1,
    title: 'Signify AI',
    desc: 'Signify AI is a real-time Indonesian Sign Language (BISINDO) recognition web application that translates hand gestures into text directly in the browser. Built with Next.js and FastAPI, the system captures webcam frames on the frontend and performs inference using a fine-tuned YOLO11 object detection model on the backend. Detection results, including bounding boxes and gesture labels, are streamed in real time and rendered directly on the video feed to provide an interactive and responsive user experience.',
    tech: 'Next.js // FastAPI // YOLO11',
    github: 'https://github.com/godlovesmei/signify-ai',
    demo: '#'
  },
  {
    id: 2,
    title: 'AlgoFun',
    desc: 'AlgoFun is an AI-powered educational web application built with Laravel and FastAPI that helps elementary school students improve logical and algorithmic thinking through interactive learning content. The system integrates a production-ready Retrieval-Augmented Generation (RAG) pipeline to automatically process and generate study materials from multiple document formats using advanced natural language processing and vector search technologies.',
    tech: 'Laravel // FastAPI // RAG',
    github: 'https://github.com/choccoo4/algofun',
    demo: 'https://youtu.be/yVI56K7BMmE?si=4_BlborjIg-Qn50s'
  },
  {
    id: 3,
    title: 'Venus Cars',
    desc: 'Venus Cars is a car marketplace platform built with Laravel that provides a modern and user-friendly experience for buyers and sellers to buy or sell vehicles safely and efficiently. The platform features various car categories such as SUV, MPV, Sedan, and Sport, along with detailed vehicle information, search and filtering features, user authentication, direct communication with sellers or dealers, and transaction support for both cash and credit payments. The system is integrated with a database and designed with a responsive interface for seamless access across desktop and mobile devices.',
    tech: 'Laravel // MySQL',
    github: 'https://github.com/godlovesmei/PBL_Kelp3_IF2A_Pagi',
    demo: 'https://youtu.be/90eOflVbOpo?si=0be726b5FgLSk8Kz'
  },
  {
    id: 4,
    title: 'PureBeauty',
    desc: 'PureBeauty is a skincare e-commerce platform built with native PHP that allows customers to search, filter, and purchase products such as sunscreen, serum, face masks, and moisturizers, while sellers can manage products and monitor orders and sales. The system includes user authentication, product CRUD operations, category-based search and filtering, automated feedback responses, MySQL database integration, and a responsive interface optimized for desktop and mobile devices.',
    tech: 'PHP // MySQL',
    github: '#',
    demo: 'https://youtu.be/ISdzcMD1hGY?si=cvIun0p0pVqWpUj8'
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="project-card clip-cyber">
      <div className="card-top">
        <div className="project-id">DB_ENTRY_{project.id.toString().padStart(3, '0')}</div>
        <div className="project-tech neon-text-cyan">{project.tech}</div>
      </div>
      
      <h3 className="project-title">{project.title}</h3>
      <p className={`project-desc ${isExpanded ? 'expanded' : ''}`}>{project.desc}</p>
      
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
  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2 className="neon-text-yellow glitch-hover" data-text="PROJECT ARCHIVE">PROJECT ARCHIVE</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
