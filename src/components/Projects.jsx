import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/content';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(to bottom, #1e293b, var(--bg-color))' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid" style={{ display: 'grid', gap: '30px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass"
                            style={{ borderRadius: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
                        >
                            <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', zIndex: 1 }}></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </div>

                            <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.2 }}>{project.title}</h3>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <a href="#" className="icon-link">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.link} className="icon-link">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px', flex: 1, lineHeight: 1.6 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {project.tech.map((t, i) => (
                                        <span key={i} style={{
                                            padding: '4px 12px',
                                            background: 'rgba(255, 215, 0, 0.1)',
                                            border: '1px solid rgba(255, 215, 0, 0.2)',
                                            borderRadius: '15px',
                                            fontSize: '0.75rem',
                                            color: '#ffd700',
                                            fontWeight: 500
                                        }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <style>{`
                    .projects-grid {
                        grid-template-columns: repeat(1, 1fr);
                    }
                    @media (min-width: 640px) {
                        .projects-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (min-width: 1024px) {
                        .projects-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    .icon-link {
                        color: var(--text-secondary);
                        transition: color 0.3s ease;
                    }
                    .icon-link:hover {
                        color: var(--primary-color);
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Projects;
