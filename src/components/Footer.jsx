import React from 'react';
import { personalInfo } from '../data/content';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', background: '#0f172a' }}>
            <div className="container">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 700 }}>{personalInfo.name}</h3>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    <a href={personalInfo.social.github} className="hover:text-primary transition-colors flex items-center gap-2">
                        <FaGithub /> GitHub
                    </a>
                    <a href={personalInfo.social.linkedin} className="hover:text-primary transition-colors flex items-center gap-2">
                        <FaLinkedin /> LinkedIn
                    </a>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    © 2025 {personalInfo.name}. Made with <Heart size={16} fill="var(--primary-color)" stroke="none" />
                </p>
            </div>
        </footer>
    );
};

export default Footer;
