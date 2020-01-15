import React from "react"
import WebDevIcon from "../../media/svg/web-dev-card.svg"
import WebDesignIcon from "../../media/svg/web-design-card.svg"
import graphicCardStyles from "./graphicCard.module.scss"
import { IoIosAnalytics } from "react-icons/io"

const GraphicCard = ({ type }) => {
  return (
    <div
      className={`${graphicCardStyles.cardWrapper} ${
        type === "web-dev"
          ? graphicCardStyles.cardOne
          : graphicCardStyles.cardTwo
      }`}
    >
      <div className={graphicCardStyles.card}>
        <div className={graphicCardStyles.borderTop}></div>
        <ul className={graphicCardStyles.textList}>
          <li className={graphicCardStyles.listItem}>
            <IoIosAnalytics size={16} className={graphicCardStyles.icon} />
            <p>Accessible & Performant</p>
          </li>
          <li className={graphicCardStyles.listItem}>
            <IoIosAnalytics size={16} className={graphicCardStyles.icon} />
            <p>Accessible & Performant</p>
          </li>
          <li className={graphicCardStyles.listItem}>
            <IoIosAnalytics size={16} className={graphicCardStyles.icon} />
            <p>Accessible & Performant</p>
          </li>
        </ul>
      </div>
      {type === "web-dev" && (
        <WebDevIcon className={graphicCardStyles.svgIllustration} />
      )}
      {type === "web-design" && (
        <WebDesignIcon className={graphicCardStyles.svgIllustration} />
      )}
    </div>
  )
}

export default GraphicCard
