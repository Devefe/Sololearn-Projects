import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons'
import style from './Intro.module.css'

export default function Intro() {
  const textToShow = ["I am a Web Developer who likes to write clean and simple code. I like to focus on accessibility and making products easy to use. ",
    "I'm also a Professional Brewer with more than 7 years of experience, in case you want some beer too "]

  return (
    <section className={`${style.introSection} ${style.slideInFwdCenter}`}>
      <h2 className={style.h2}>Who is {'{'} Ariel {'}'} ?</h2>

      <div className={style.divPre}>

        <p>
          <span className={style.highlight0}>const</span> <span className={style.arie}>Ariel</span> = <span className={style.highlight3}> {'{'} </span>  <br />
          <span className={style.highlight1}>location:</span><span className={style.highlight2}>'San José, Costa Rica'</span>,<br />
          <span className={style.highlight1}>age:</span><span className={style.highlight2}> 31</span>,<br />
          <span className={style.highlight1}>occupation:</span> <span className={style.highlight3}>[</span>  <span className={style.highlight2}>'Brewer'</span>,<span className={style.highlight2}> 'Web Developer Student'</span> <span className={style.highlight3}>]</span>,<br />
          <span className={style.highlight1}>favoriteLanguage:</span><span className={style.highlight2}>'JavaScript'</span><br />
          <span style={{ marginLeft: '8rem', color: 'rgb(254, 246, 153)' }}> {'}'} </span>
        </p>
      </div>


      <p>{textToShow[0]}<FontAwesomeIcon icon={faLaptopCode} /><br /><br />
        {textToShow[1]}<FontAwesomeIcon icon={faBeerMugEmpty} /></p>
    </section>
  )
}