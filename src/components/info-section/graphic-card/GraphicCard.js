import React from "react"
import WebDevIcon from "../../../media/svg/web-dev-card.svg"
import MobileIcon from "../../../media/svg/mobile-card.svg"
import WebDesignIcon from "../../../media/svg/web-design-card.svg"
import styles from "./graphicCard.module.scss"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

const GraphicCard = ({ type, headerText, cardText, cardNumber }) => {
  return (
    <div className={`${styles.cardWrapper} ${styles[cardNumber]}`}>
      <div className={`card ${styles.card}`}>
        <div className={`border-top`}></div>
        <h2 className={styles.cardHeader}>{headerText}</h2>
        <p className={styles.cardText}>{cardText}</p>
        <ul className={styles.textList}>
          {type === "web-dev" && (
            <>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Cutting Edge Technology</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Pixel Perfect Precision</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Custom Design</p>
              </li>
            </>
          )}
          {type === "mobile" && (
            <>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Mobile First Design</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>High Performance</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Tested Accross Devices</p>
              </li>
            </>
          )}

          {type === "web-design" && (
            <>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Blog Templates</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>E-commerce integrations</p>
              </li>
              <li className={`list-item-flex ${styles.listItemFlex}`}>
                <IoIosCheckmarkCircleOutline className={styles.icon} />
                <p>Databases &amp; Serverless Functions </p>
              </li>
            </>
          )}
        </ul>
      </div>
      {type === "web-dev" && <WebDevIcon className={styles.svgIllustration} />}
      {type === "mobile" && <MobileIcon className={styles.svgIllustration} />}
      {type === "web-design" && (
        <WebDesignIcon className={styles.svgIllustration} />
      )}
    </div>
  )
}

export default GraphicCard
