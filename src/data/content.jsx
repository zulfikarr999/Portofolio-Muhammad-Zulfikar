import { Code2, Palette, Globe, Database, Smartphone, Zap } from 'lucide-react';
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaPython, FaDatabase, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPandas, SiNumpy, SiScikitlearn, SiJupyter } from 'react-icons/si';

import project1 from '../assets/images/proyek ta.jpg';
import project2 from '../assets/images/proyek biomedis.jpg';
import project3 from '../assets/images/proyek absensi.png';
import project4 from '../assets/images/portfolio-project.png';

export const personalInfo = {
  name: "Muhammad Zulfikar",
  role: "Web Developer",
  email: "fikarrr7890@gmail.com",
  social: {
    github: "https://github.com/zulfikarr999",
    linkedin: "http://www.linkedin.com/in/muhammad-zulfikar-2018b22a5",
    twitter: "https://twitter.com"
  }
};

export const skills = [
  {
    title: "Web Development",
    icon: Code2,
    items: [
      { name: "React", icon: FaReact, level: "Advanced" },
      { name: "JavaScript", icon: FaJs, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "Node.js", icon: FaNodeJs, level: "Intermediate" },
      { name: "PHP", icon: FaPhp, level: "Intermediate" },
      { name: "HTML/CSS", icon: FaHtml5, level: "Advanced" },
      { name: "REST APIs", icon: Globe, level: "Intermediate" }
    ]
  },
  {
    title: "Data Science & AI",
    icon: Database,
    items: [
      { name: "Python", icon: FaPython, level: "Advanced" },
      { name: "SQL / MySQL", icon: SiMysql, level: "Advanced" },
      { name: "Machine Learning", icon: SiScikitlearn, level: "Intermediate" },
      { name: "Data Analysis", icon: SiJupyter, level: "Advanced" },
      { name: "Pandas/NumPy", icon: SiPandas, level: "Intermediate" },
      { name: "Predictive Modeling", icon: FaDatabase, level: "Intermediate" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Solar Radiation Prediction",
    description: "Development of a long-term prediction model for solar irradiance intensity in the Java Island region using a Machine Learning approach based on Ensemble Learning.",
    image: project1,
    tech: ["Python", "Machine Learning", "Ensemble Learning", "Pandas", "Streamlit"],
    link: "https://github.com/zulfikarr999/Prediksi-Solar-Irradiance-Pada-Permukaan-Pulau-Jawa-Menggunakan-Ensemble-Learning"
  },
  {
    id: 2,
    title: "HealthCenter Biomedical",
    description: "Development of a web application for biomedical information systems designed to assist the process of managing patient data and medical services in clinics or health centers.",
    image: project2,
    tech: ["PHP", "MySql", "Bootstrap", "HealthCenter"],
    link: "https://github.com/zulfikarr999/zulfikar999_kelompok.sistembiomedisHealthCenter.id"
  },
  {
    id: 3,
    title: "School Attendance System",
    description: "Web based school attendance system with facial recognition technology (Face ID).",
    image: project3,
    tech: ["Laravel", "Laragon", "PHP"],
    link: "https://github.com/zulfikarr999/Sistem-Absensi-Sekolah"
  },
  {
    id: 4,
    title: "Portfolio",
    description: ", built with React and Vite.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/zulfikarr999/Portofolio-Muhammad-Zulfikar",
    image: project4
  }
];
