import React from "react"
import TextSection from "./text-section/TextSection"
import GraphicCard from "./graphic-card/GraphicCard"
import PricingSection from "./pricing-section/PricingSection"
import ContactButton from "./contact-button/ContactButton"
import {
  BackgroundGradientTop,
  BackgroundGradientBottom,
} from "../background-gradient/BackgroundGradient"
import { BackgroundStripes2 } from "../background-stripes/BackgroundStripes"
import styles from "./infoSection.module.scss"

const InfoSection = ({ scroll, aboutRef, pricingRef }) => {
  return (
    <section className={styles.infoWrapper}>
      <BackgroundGradientTop section="info-section" />
      <TextSection aboutRef={aboutRef} />
      <div className={styles.graphicCardWrapper}>
        <GraphicCard
          type="web-dev"
          headerText="Built By Hand"
          cardText="Every project is hand-coded, ensuring optimal site performance and
          responsive design."
          cardNumber="cardOne"
        />
        <GraphicCard
          type="mobile"
          headerText="Mobile First"
          cardText="Over half of internet traffic is coming from mobile devices. Thats why i stress good mobile performance and design."
          cardNumber="cardTwo"
        />
        <GraphicCard
          type="web-design"
          headerText="Feature Rich"
          cardText="No matter what features we include in your project, you can always add more when you need them."
          cardNumber="cardThree"
        />
      </div>
      <PricingSection pricingRef={pricingRef} />
      <ContactButton scroll={scroll} />
      <BackgroundStripes2 />
      <BackgroundGradientBottom section="info-section" />
    </section>
  )
}

export default InfoSection
