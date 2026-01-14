import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const About = () => {
    return (
        <section id="about" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(to bottom, var(--bg-color), #1e293b)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass"
                        style={{ padding: '40px', maxWidth: '800px', borderRadius: '20px' }}
                    >
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            {personalInfo.bio}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                            Bachelor's degree in Informatics Engineering with a strong understanding of software development, system analysis, and the application of machine learning.
                            Skilled in Python programming, SQL database management, and using machine learning algorithms for data analysis and predictive modeling.
                            Able to work independently or in a team, solution-oriented, innovative, and quick to adapt to technological developments and new challenges.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
