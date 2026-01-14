import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import { Dribbble, Linkedin, Instagram, Facebook } from 'lucide-react';
import profileImg from '../assets/images/fikar.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-section" style={{ overflow: 'hidden' }}>
            {/* Background Decor */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '400px', height: '400px', background: 'var(--primary-color)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.2 }}></div>
            <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', background: 'var(--secondary-color)', borderRadius: '50%', filter: 'blur(120px)', opacity: 0.2 }}></div>

            <div className="container hero-container">

                <div className="hero-content" style={{ alignItems: 'flex-start', textAlign: 'left' }}>
                    <motion.h4
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}
                    >
                        Hi, I'm <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Muhammad Zulfikar</span>
                    </motion.h4>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                            background: 'linear-gradient(to right, var(--primary-color), var(--secondary-color))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            filter: 'drop-shadow(0 0 10px rgba(255, 0, 0, 0.5))'
                        }}
                    >
                        Software Engineering <br />
                        <span style={{ color: 'var(--text-primary)', WebkitTextFillColor: 'var(--text-primary)' }}>& Data Enthusiast</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '450px', marginBottom: '2rem', lineHeight: 1.6 }}
                    >
                        A dedicated Information Technology graduate from Sultan Agung Islamic University. My primary focus is developing high performance web applications, as well as exploring the use of Big Data & AI for future digital solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h5 style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-secondary)' }}>Find Me on</h5>
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
                            {[Linkedin, Instagram, Facebook, Dribbble].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.2, color: 'var(--primary-color)', filter: 'drop-shadow(0 0 8px var(--primary-color))' }}
                                    style={{ cursor: 'pointer', color: 'var(--text-primary)' }}
                                >
                                    <Icon size={24} />
                                </motion.div>
                            ))}
                        </div>

                        <a href="#contact" className="btn btn-primary" style={{
                            padding: '12px 35px',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            boxShadow: '0 10px 25px rgba(255, 0, 0, 0.3)'
                        }}>
                            Hire me
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hero-image"
                    style={{ position: 'relative' }}
                >
                    {/* Glowing Circle Background */}
                    <div style={{ position: 'absolute', inset: '10%', background: 'var(--primary-color)', borderRadius: '50%', zIndex: 0, opacity: 0.5, filter: 'blur(30px)' }}></div>
                    <div style={{ position: 'absolute', inset: '10%', border: '2px solid var(--primary-color)', borderRadius: '50%', zIndex: 1, opacity: 0.8 }}></div>

                    <img
                        src={profileImg}
                        alt="Profile"
                        style={{ position: 'relative', width: '350px', height: '350px', objectFit: 'cover', borderRadius: '50%', zIndex: 2, border: '5px solid transparent' }}
                        className="profile-img-lg"
                    />

                </motion.div>

            </div>
            <style>{`
        @media (max-width: 900px) {
           .profile-img-lg { width: 300px !important; height: 300px !important; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
