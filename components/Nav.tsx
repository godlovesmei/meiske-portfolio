"use client";
import { useEffect, useState } from 'react';
import { useActiveSection } from '../hooks/useReveal';
import './nav.css';

const sections = ['home', 'bio', 'projects', 'tech', 'contact'];
const labels = ['HOME', 'BIO', 'PROJECTS', 'TECH', 'CONTACT'];

const Nav = () => {
    const active = useActiveSection(sections);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Desktop Nav */}
            <nav className={`nav-desktop ${scrolled ? 'scrolled' : ''}`}>
                <div className="nav-glass">
                    {sections.map((sec, i) => (
                        <button
                            key={sec}
                            onClick={() => scrollTo(sec)}
                            className={`nav-link ${active === sec ? 'active' : ''}`}
                        >
                            <span className="nav-label">{labels[i]}</span>
                            <span className="nav-indicator" />
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Bottom Dock */}
            <nav className="nav-mobile">
                <div className="nav-dock">
                    {sections.map((sec, i) => (
                        <button
                            key={sec}
                            onClick={() => scrollTo(sec)}
                            className={`nav-dock-item ${active === sec ? 'active' : ''}`}
                            aria-label={labels[i]}
                        >
                            <span className="nav-dock-icon">{labels[i][0]}</span>
                            <span className="nav-dock-label">{labels[i]}</span>
                            {active === sec && <span className="nav-dock-glow" />}
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Nav;