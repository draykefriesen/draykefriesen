import React from "react"
import TechListSection from "./tech-list-section/TechListSection"
import {
  BackgroundGradientTop,
  BackgroundGradientBottom,
} from "../background-gradient/BackgroundGradient"
import { BackgroundStripes5 } from "../background-stripes/BackgroundStripes"
import styles from "./skills.module.scss"

const Skills = ({ skillsSectionRef }) => {
  return (
    <section className={`section-grid ${styles.sectionGrid}`}>
      <BackgroundGradientTop section="skills" />
      <h2 className="section-header" ref={skillsSectionRef}>
        Skills
      </h2>
      <TechListSection />
      <BackgroundStripes5 />
      <BackgroundGradientBottom section="skills" />
    </section>
  )
}

export default Skills
