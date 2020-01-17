import React from "react"
import WebDevIcon from "../../media/svg/web-dev-card.svg"
import WebDesignIcon from "../../media/svg/web-design-card.svg"
import graphicCardStyles from "./graphicCard.module.scss"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

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
          {type === "web-dev" && (
            <>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>Blogs</p>
              </li>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>Portfolios</p>
              </li>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>E-commerce</p>
              </li>
            </>
          )}

          {type === "web-design" && (
            <>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>Custom Web-Design</p>
              </li>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>SVG Illustration & Animiation</p>
              </li>
              <li className={graphicCardStyles.listItem}>
                <IoIosCheckmarkCircleOutline
                  className={graphicCardStyles.icon}
                />
                <p>Brand Identity</p>
              </li>
            </>
          )}
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
