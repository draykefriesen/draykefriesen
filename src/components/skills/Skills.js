import React from "react"
import TechListSection from "./tech-list-section/TechListSection"
import {BackgroundGradientTop, BackgroundGradientBottom} from '../background-gradient/BackgroundGradient'
import {BackgroundStripes2} from '../background-stripes/BackgroundStripes'
import styles from "./skills.module.scss"

const Skills = ({ skillsSectionRef }) => {

  return (
    <section className={styles.skillsSectionWrapper}>
      <BackgroundGradientTop section='skills'/>
        <h2
          className={styles.skillsSectionHeader}
          ref={skillsSectionRef}
        >Skills
        </h2>
      <TechListSection />
      <BackgroundStripes2 />
      <BackgroundGradientBottom section='skills' />
    </section>
  )
}

export default Skills
