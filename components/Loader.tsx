"use client";
import React, { useState, useEffect } from 'react';
import './loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = '';
    }, 2000);

    document.body.style.overflow = 'hidden';
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${!loading ? 'hidden' : ''}`}>
      <div className="loader-logo">MEISKE.DEV</div>
      <div className="loader-bar">
        <div className="loader-bar-fill"></div>
      </div>
      <div className="loader-text">Loading System...</div>
    </div>
  );
};

export default Loader;