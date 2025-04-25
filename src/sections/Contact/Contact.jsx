import styles from './ContactStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

function Contact() {
  const { theme } = useTheme();

  return (
    <>
      <section id="contact" className={`${styles.container} ${styles[theme]}`}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <form action="https://formspree.io/f/mblgngok" method="post">
          <div className={styles.formGroup}>
            <label htmlFor="name" hidden>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" hidden>Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" hidden>Message</label>
            <textarea name="message" id="message" placeholder="Message" required></textarea>
          </div>
          <input className={styles.submitButton} type="submit" value="Submit" />
        </form>
      </section>

      <footer className={`${styles.footer} ${styles[theme]}`}>
        <p>
          &copy; 2025 Poorna Senthur. <br />
          All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Contact;
