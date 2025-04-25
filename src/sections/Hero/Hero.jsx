import React from 'react'
import styles from "./HeroStyles.module.css"
import heroimg from "../../assets/portfolioo.png"
import sun from "../../assets/sun (1).svg"
import moon from "../../assets/moon (1).svg"
import twitterLight from "../../assets/twitter-light.svg"
import twitterDark from "../../assets/twitter-dark.svg"
import linkedinLight from  "../../assets/linkedin-light.svg"
import linkedinDark from  "../../assets/linkedin-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"


import CV from "../../assets/Poornasenthur_Resume .pdf"
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ?  linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
      <img className={styles.hero} src={heroimg} alt="Portfolio picture of PoornaSenthur" />
      <img className={styles.colorMode} src={themeIcon} alt="Color mode Icon" onClick={toggleTheme} />
    </div>
    <div className={styles.info}>
      <h1>Poornasenthur</h1>
      <h2>FrontEnd Developer</h2>
      <span>
        <a href="https://x.com/poorna75826" target="_blank">
        <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/poornasenthur-2002" target="_blank">
        <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://www.linkedin.com/in/poornasenthur02/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
      <p>
        With the passion for developing modern react web apps for commerial business.
      </p>
      <a href={CV} download>
        <button className="hover">
          Resume
        </button>
      </a>
  </div>
    </section>
  )
}

export default Hero 