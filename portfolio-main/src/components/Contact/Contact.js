import React from 'react'
import styles from './Contact.module.css'

import github from '../Technologies/icons/github.svg'
import linkedin from '../Technologies/icons/linkedin.svg'
import gmail from '../Technologies/icons/gmail.svg'

export default function Contact() {
  return (
    <>
      <section id='contact' className={`${styles.contactSection} ${styles.slideInFwdCenter}`}>
        <h2 className={styles.contactH2}>Contact</h2>
        <div>
          I would love to work alongside you and your team.<br />
          I can work alone or work shoulder to shoulder with great people.<br />
          You can count on me to write code, perform UX research, do manual and basic unit tests. In general, to solve problems and achieve objectives in a creative and specific way.<br />
          I can work in person (depending on location) or remotely, full-time, part-time or on a project basis.<br />
          Working together, I know we can achieve something sharp and beautiful.
        </div>

        <div className={styles.contactLinks}>
          <a href="https://github.com/Ariel-GonzAguer" target="_blank" rel="noreferrer"><img src={github} alt="GitHub logo"
            className={styles.githubImg} /></a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ariegonzaguer@gmail.com" target="_blank" rel="noreferrer"><img
            src={gmail} alt="Gmail logo" className={styles.gmailImg} /></a>

          <a href="https://www.linkedin.com/in/ariel-gonzales-ag%C3%BCero-959293276/" target="_blank" rel="noreferrer"><img
            src={linkedin} alt="Linkedin logo" className={styles.linkedinImg} /></a>
        </div>

      </section>
    </>
  )
}