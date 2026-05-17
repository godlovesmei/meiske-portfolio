"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import './contact.css';

type Command = {
  type: 'input' | 'output' | 'error';
  text: string;
};

const INITIAL_HISTORY: Command[] = [
  { type: 'output', text: 'Meiske Terminal v2.6.0 [CYBER_EDITION]' },
  { type: 'output', text: 'Type "help" to see available commands.' },
  { type: 'input', text: 'whoami' },
  { type: 'output', text: 'Meiske Sahertian — Informatics Student & AI/SWE Enthusiast' },
];

const COMMANDS: Record<string, string | string[]> = {
  help: [
    'AVAILABLE COMMANDS:',
    '  help       — Show this help message',
    '  whoami     — About Meiske',
    '  contact    — Show contact methods',
    '  socials    — List social links',
    '  clear      — Clear terminal',
    '  resume     — Download CV link'
  ],
  whoami: 'Meiske Sahertian — Informatics Student at Batam State Polytechnic. Focused on AI, SWE, and scalable systems.',
  contact: [
    'EMAIL:    meiskesahertian7@gmail.com',
    'STATUS:   Open for collaborations & internships'
  ],
  socials: [
    'GITHUB:   github.com/godlovesmei',
    'LINKEDIN: linkedin.com/in/meiskesahertian/'
  ],
  resume: 'Opening resume download... (redirecting to /Meiske_CV.pdf)',
};

const Contact = () => {
  const { ref, visible } = useReveal(0.15);
  const [history, setHistory] = useState<Command[]>(INITIAL_HISTORY);
  const [input, setInput] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const execute = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newHistory: Command[] = [...history, { type: 'input', text: cmd }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'resume') {
      window.open('/Meiske_CV.pdf', '_blank');
    }

    const response = COMMANDS[trimmed];
    if (response) {
      if (Array.isArray(response)) {
        response.forEach(line => newHistory.push({ type: 'output', text: line }));
      } else {
        newHistory.push({ type: 'output', text: response });
      }
    } else {
      newHistory.push({ type: 'error', text: `Command not found: ${trimmed}. Type "help" for available commands.` });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    execute(input);
  };

  return (
    <section className="contact-section" ref={ref}>
      <div className={`contact-container clip-diagonal reveal-up ${visible ? 'visible' : ''}`}>
        <div className="contact-header">
          <h2 className="neon-text-pink glitch-hover" data-text="TRANSMISSION">TRANSMISSION</h2>
          <div className="contact-status">SECURE CHANNEL // OPEN</div>
        </div>

        <div className="contact-body">
          {/* Desktop: Interactive Terminal */}
          <div className="contact-terminal desktop-only">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">term.exe — interactive</span>
            </div>
            <div className="terminal-body" ref={terminalRef} onClick={() => inputRef.current?.focus()}>
              {history.map((cmd, i) => (
                <div key={i} className={`terminal-line ${cmd.type}`}>
                  {cmd.type === 'input' && <span className="prompt">meiske@polytechnic:~$ </span>}
                  <span>{cmd.text}</span>
                </div>
              ))}
              <form onSubmit={handleSubmit} className="terminal-input-line">
                <span className="prompt">meiske@polytechnic:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="terminal-input"
                  autoComplete="off"
                  spellCheck={false}
                />
                <span className="cursor">_</span>
              </form>
            </div>
          </div>

          {/* Mobile: Direct Action Cards */}
          <div className="mobile-actions mobile-only">
            <p className="contact-desc">
              Looking to build scalable systems or discuss artificial intelligence? Initialize a connection.
            </p>
            <div className="social-links">
              <a href="https://github.com/godlovesmei" className="social-link clip-cyber" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">GH</span>
                <span className="social-name">GITHUB</span>
              </a>
              <a href="https://www.linkedin.com/in/meiskesahertian/" className="social-link clip-cyber" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">IN</span>
                <span className="social-name">LINKEDIN</span>
              </a>
              <a href="mailto:meiskesahertian7@gmail.com" className="social-link clip-cyber">
                <span className="social-icon">@</span>
                <span className="social-name">EMAIL</span>
              </a>
              <a href="/Meiske_CV.pdf" className="social-link clip-cyber" target="_blank" rel="noopener noreferrer" style={{ borderLeftColor: 'var(--neon-yellow)' }}>
                <span className="social-icon" style={{ color: 'var(--neon-yellow)' }}>⬇</span>
                <span className="social-name" style={{ color: 'var(--neon-yellow)' }}>RESUME</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Resume Button (Mobile) */}
      <a href="/Meiske_CV.pdf" className="floating-resume mobile-only" target="_blank" rel="noopener noreferrer">
        <span>⬇</span>
      </a>
    </section>
  );
};

export default Contact;