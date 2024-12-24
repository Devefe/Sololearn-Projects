import React from 'react'
import TechnologiesContainer from '../Technologies/Technologies'
import styles from './MoreAboutMe.module.css'

export default function AboutMe() {
  return (
    <section className={`${styles.aboutMeSection} ${styles.slideInFwdCenter}`}>
      <div className={styles.aboutMeDiv}>
        <h2 className={styles.h2}>+ About Me</h2>
        <p>Hello again. I would like to tell you a little more about who I am.<br />
          After several years as a professional brewer, winning medals at a local and international level, always focused on meeting objectives and extreme cleanliness in my processes, I wanted to look for new directions for my creativity and desire to help other people, and that is how I found the web development, becoming a new joy.<br /><br />
          I love creating minimalist and super user-friendly projects, always keeping in mind accessibility, clean design and good practices when writing code.<br />
          I have been studying this new Front End Development Engineering career at CodeCademy for approximately 9 months, and currently (4/20/24) I am learning/working with React.<br />
          I love React, by the way!<br /><br />
          I have basic knowledge of unit testing with Jest and Mocha, I use Git Bash without problems when creating projects and uploading them to Github, I also know how to make API calls to obtain or send information to third parties. In addition to the above, I have obtained certificates in Design Thinking, Emojicode, Interaction Design, Open Source, UI & UX Design and User Research. Parallel to my education as a Web Developer, I have also certified myself as a Lean Six Sigma White Belt and Remote Work Professional Certification.
        </p>
      </div>
      <TechnologiesContainer />

    </section>
  )
}