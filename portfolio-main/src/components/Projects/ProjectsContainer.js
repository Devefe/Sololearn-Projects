import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// faUniversalAccess, faSeedling
import { faBurger, faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import styles from "./Projects.module.css";

const projects = [
  {
    icon: faBurger,
    name: "Porto Burger",
    href: " https://ariel-gonzaguer.github.io/Port-O-Burger/",
    text: `Port-O-Burger 🍔
    This is a fictional project about a vegan burger restaurant
    called Port-O-Burger, created as an internship in Front End Development learning. I've used HTML, CSS, and a bit of vanilla JavaScript.`,
  },

  {
    icon: faRedditAlien,
    name: "Red-dit",
    href: "red-dit.netlify.app/",
    text: `This web app is part of CodeCademy's Front End Development Engineering curriculum. For this project the objective is to create a web app that uses the Reddit API, React, Redux and OAuth 2.0. The application will allow users to view and search posts provided by the API.`,
  },

  {
    icon: faShieldCat,
    name: "Michi Cards",
    href: "https://michicards.netlify.app/",
    text: `With this web app You can create cards similar to other card games like Pokemon, but Cat based.
Take a screenshot and share it with your friends 😺`,
  },

  // {
  //   icon: faUniversalAccess,
  //   name: 'Accesibilidad',
  //   href: 'https://starter-kit-accessibility.netlify.app',
  //   text: `Accesibilidad, A web page that shows the accessibility of a website.`
  // }
];

export default function ProjectsContainer() {
  const [currentProject, setCurrentProject] = useState("more comming");
  // código para slider automático:
  // const [currentProject, setCurrentProject] = useState(0);
  // const src = imgProjects[currentProject]['src'];
  // const name = imgProjects[currentProject]['name'];
  // const href = imgProjects[currentProject]['href'];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {

  //     setCurrentProject(prevProject => {
  //       const nextProject = prevProject + 1;
  //       return nextProject % imgProjects.length;
  //     });
  //   }, 5000)
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <section className={`${styles.projectsSection} ${styles.slideInFwdCenter}`}>
      <Tooltip id="my-tooltip" className={styles.tooltip} />
      {/* <h2>Check out my favorites projects</h2> */}
      <p>{currentProject}</p>
      <div className={styles.vento}>
        {projects.map((project, index) => (
          <div className={styles.projectDiv} key={index}>
            <a
              aria-label="link"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={styles.projectLink}
              onMouseEnter={() => setCurrentProject(project.text)}
              onMouseLeave={() => setCurrentProject("more comming")}
              // data-tooltip-id="my-tooltip"
              // data-tooltip-content={project.text}
              // data-tooltip-place="top"
            >
              <FontAwesomeIcon
                icon={project.icon}
                src={project.src}
                alt={project.text}
                className={styles.projectIcon}
              />
            </a>
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
    </section>

    // <section id="projects">
    //   <SliderAuto src={src} name={name} href={href} rel="noreferrer"/>
    // </section>
  );
}
