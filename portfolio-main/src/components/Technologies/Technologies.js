import React from 'react'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import styles from './technologies.module.css'

import bootstrap from './icons/bootstrap.svg'
import ember from './icons/ember.svg'
import git from './icons/git.svg'
import javascript from './icons/javascript.svg'
import mocha from './icons/mocha.svg'
import react from './icons/react.svg'
import typescript from './icons/typeScript.svg'
import redux from './icons/redux.svg'


export default function TechnologiesContainer() {

  return (
    <section className={styles.technologiesSection}>
      <Tooltip id="my-tooltip" />

      <h2 className={styles.techTitle}>Technologies I have worked with</h2>
      <ul className={styles.technologiesUl}>
        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="JavaScript. Programming Language"
            data-tooltip-place="top"
            src={javascript}
            alt='JavaScript Logo'
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Mocha. Testing Framework"
            data-tooltip-place="top"
            src={mocha}
            alt='Mocha Logo'
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Git. Control version System"
            data-tooltip-place="top"
            src={git}
            alt='Git Logo'
          />
        </li>
      </ul>

      <h2 className={styles.techTitle}>Technologies that I am learning</h2>
      <ul className={styles.technologiesUl}>
        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React. Powerfull JavaScript Library"
            data-tooltip-place="top"
            src={react}
            alt='React Logo'
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Redux. State Management Library"
            data-tooltip-place="top"
            src={redux}
            alt='Redux Logo'
          />
        </li>

      </ul>

      <h2 className={styles.techTitle}>Technologies I want to learn soon</h2>
      <ul className={styles.technologiesUl}>
        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Ember. JavaScript Framework"
            data-tooltip-place="top"
            src={ember}
            alt='Ember Logo'
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Bootstrap. CSS Framework"
            data-tooltip-place="top"
            src={bootstrap}
            alt='Bootstrap Logo'
          />
        </li>

        <li className={styles.technologiesLi}>
          <img
            className={styles.technologiesImg}
            data-tooltip-id="my-tooltip"
            data-tooltip-content="TypeScript. Programming language"
            data-tooltip-place="top"
            src={typescript}
            alt='TypeScript Logo'
          />
        </li>
      </ul>
    </section>

  )

}


