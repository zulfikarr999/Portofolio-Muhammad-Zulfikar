import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/content';

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title-wrapper"
                    style={{ marginBottom: '60px', textAlign: 'center' }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginTop: '10px' }}>
                        Blending the art of web development with the science of data.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="glass"
                            style={{ padding: '40px', borderRadius: '24px' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                                <div style={{ padding: '12px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--primary-color)' }}>
                                    <category.icon size={32} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{category.title}</h3>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {category.items.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            padding: '10px 20px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            borderRadius: '50px',
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            fontSize: '0.95rem',
                                            color: 'var(--text-primary)',
                                            transition: 'all 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = 'var(--primary-color)';
                                            e.currentTarget.style.borderColor = 'var(--primary-color)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
                                        {skill.icon && <skill.icon size={16} />}
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
