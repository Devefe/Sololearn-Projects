import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={`${styles.bounceInRight} ${styles.slideInRight} ${styles.navBar}`}>
      <ul className={styles.ul}>
        <li className={styles.li}><NavLink aria-label='link' to='/projects' className={styles.a} >/Projects</NavLink></li>
        <li className={styles.li}><NavLink aria-label='link' to='/aboutMe' className={styles.a} >/+About Me</NavLink></li>
        <li className={styles.li}><NavLink aria-label='link' to='/contact' className={styles.a} >/Contact</NavLink></li>
      </ul>
    </nav>
  )

}
