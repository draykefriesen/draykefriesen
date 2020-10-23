import React from "react"
import TextSection from "./text-section/TextSection"
import GraphicCard from "./graphic-card/GraphicCard"
import {
  BackgroundGradientTop,
  BackgroundGradientBottom,
} from "../background-gradient/BackgroundGradient"
import { BackgroundStripes2 } from "../background-stripes/BackgroundStripes"
import styles from "./infoSection.module.scss"

const InfoSection = ({ scroll }) => {
  return (
    <div className={styles.infoWrapper}>
      <BackgroundGradientTop section="info-section" />
      <TextSection scroll={scroll} />
      <div className={styles.graphicCardWrapper}>
        <GraphicCard type="web-dev" cardNumber="cardOne" />
        <GraphicCard type="mobile" cardNumber="cardTwo" />
        <GraphicCard type="web-design" cardNumber="cardThree" />
      </div>
      <BackgroundStripes2 />
      <BackgroundGradientBottom section="info-section" />
    </div>
  )
}

export default InfoSection
