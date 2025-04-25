import React from 'react';
import styles from './ProjectStyles.module.css';
import tiles from '../../assets/icons.png';
import { useTheme } from '../../common/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  return (
    <section id="projects" className={`${styles.container} ${styles[theme]}`}>
      <h1 className={styles.sectionTitle}>My Project</h1>
      <p className={styles.sectionSubtitle}>A glimpse into what I've been building</p>
      <div className={styles.projectsContainer}>
        <a href="https://poornasenthur-2002.github.io/Webproject/index.html" target="_blank" rel="noopener noreferrer" className={styles.card}>
          <img className={styles.projectImage} src={tiles} alt="Tiles logo" />
          <h3 className={styles.projectTitle}>Tiles</h3>
          <p className={styles.projectDescription}>A modern streaming website UI with responsive design.</p>
        </a>
      </div>
    </section>
  );
};

export default Projects;

