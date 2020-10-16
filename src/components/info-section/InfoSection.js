import React from "react"
import TextSection from "./TextSection"
import GraphicCard from "./GraphicCard"
import {BackgroundGradientTop, BackgroundGradientBottom} from '../BackgroundGradient'
import {BackgroundStripes2} from '../BackgroundStripes'
import styles from "./infoSection.module.scss"

const InfoSection = ({ scroll }) => {
  return (
    <div className={styles.infoWrapper}>
    <BackgroundGradientTop section='info-section' />
      <TextSection scroll={scroll} />
      <div className={styles.graphicCardWrapper}>
      <GraphicCard type={"web-dev"} />
      <GraphicCard type={"web-design"} />
      </div>
      <BackgroundStripes2 />
      {/* <TechListSection /> */}
      {/* <div className={styles.backgroundStripes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <BackgroundGradientBottom section='info-section'/>
    </div>

  )
}

export default InfoSection
