import styles from './SkillsStyles.module.css';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

import html from '../../assets/html-dark.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/JS.svg';
import react from '../../assets/react.svg';
import tailwindcss from '../../assets/css.svg';
import java from '../../assets/Java.svg';
import mySql from '../../assets/mysql.svg';
import git from '../../assets/git.svg';

function Skills() {
  const { theme } = useTheme();

  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'Tailwind CSS', icon: tailwindcss },
    { name: 'MySQL', icon: mySql },
    { name: 'Java', icon: java },
    { name: 'Git', icon: git },
  ];

  return (
    <section id="skills" className={`${styles.container} ${styles[theme]}`}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <SkillList key={index} src={skill.icon} skill={skill.name} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
