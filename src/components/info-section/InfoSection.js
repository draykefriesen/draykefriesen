import React from "react"
import TextSection from "./TextSection"
import GraphicCard from "./GraphicCard"
import TechListSection from "./TechListSection"
import infoStyles from "./infoSection.module.scss"

const InfoSection = ({ scroll }) => {
  return (
    <div className={infoStyles.infoWrapper}>
      <TextSection scroll={scroll} />
      <GraphicCard type={"web-dev"} />
      <GraphicCard type={"web-design"} />
      <TechListSection />
      <div className={infoStyles.backgroundStripes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default InfoSection
