import React from "react"
import TechListSection from "./TechListSection"
import {BackgroundGradientTop, BackgroundGradientBottom} from '../BackgroundGradient'
import {BackgroundStripes2} from '../BackgroundStripes'
import styles from "./skills.module.scss"

const Skills = ({ skillsSectionRef }) => {

  return (
    <section className={styles.videoSectionWrapper}>
      {/* <div className={styles.videoSectionContent}> */}
      <BackgroundGradientTop section='skills'/>

        <h2
          className={styles.videoSectionHeader}
          ref={skillsSectionRef}
        >
          Skills
        </h2>
        <TechListSection />
        {/* <ul className={styles.listWrapper}>
          <li className={styles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[1].node.childImageSharp.fluid}
              className={styles.thumbnail}
            />
          </li>
          <li className={styles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[2].node.childImageSharp.fluid}
              className={styles.thumbnail}
            />
          </li>
          <li className={styles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[3].node.childImageSharp.fluid}
              className={styles.thumbnail}
            />
          </li>
        </ul> */}
        {/* <div className={styles.backgroundStripes}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      {/* </div> */}
      <BackgroundStripes2 />
      <BackgroundGradientBottom section='skills' />
    </section>
  )
}

export default Skills
