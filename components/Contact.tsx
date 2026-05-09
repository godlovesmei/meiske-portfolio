import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container clip-diagonal">
        <div className="contact-header">
          <h2 className="neon-text-pink glitch-hover" data-text="TRANSMISSION">TRANSMISSION</h2>
          <div className="contact-status">SECURE CHANNEL // OPEN</div>
        </div>
        
        <div className="contact-body">
          <div className="contact-info">
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
            </div>
          </div>
          
          <div className="contact-terminal">
            <div className="terminal-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="terminal-title">term.exe</span>
            </div>
            <div className="terminal-body">
              <p className="terminal-line"><span className="prompt">meiske@polytechnic:~$</span> ping potential_client</p>
              <p className="terminal-line">PING potential_client (192.168.1.1): 56 data bytes</p>
              <p className="terminal-line">64 bytes from 192.168.1.1: icmp_seq=0 ttl=64 time=0.042 ms</p>
              <p className="terminal-line"><span className="prompt">meiske@polytechnic:~$</span> <span className="cursor">_</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
