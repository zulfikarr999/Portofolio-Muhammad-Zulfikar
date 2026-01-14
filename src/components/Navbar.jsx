import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo">
                    PORTOFOLIO
                </a>

                {/* Desktop Menu - Centered */}
                <ul className="desktop-menu" style={{ flex: 1, justifyContent: 'center' }}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Contact Button - Right Aligned */}
                <div className="desktop-cta">
                    <a href="#contact" className="btn btn-primary" style={{ padding: '10px 25px', borderRadius: '5px' }}>
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-cta { display: none; }
        }
      `}</style>

            {isOpen && (
                <div className="mobile-menu glass">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="mobile-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="mobile-link" onClick={() => setIsOpen(false)} style={{ color: 'var(--primary-color)' }}>Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
