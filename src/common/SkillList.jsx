import styles from '../sections/skills/SkillsStyles.module.css';

function SkillList({ src, skill }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt={`${skill} icon`} className={styles.icon} />
      <p className={styles.skillName}>{skill}</p>
    </div>
  );
}

export default SkillList;
