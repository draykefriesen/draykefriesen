import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiGit,
  DiIllustrator,
} from "react-icons/di"
import BackgroundChevron from "../../media/svg/background-chevron.svg"
import techListStyles from "./techListSection.module.scss"

const TechListSection = () => {
  return (
    <div className={techListStyles.techListWrapper}>
      <div className={techListStyles.techListCard}>
        <div className={techListStyles.borderTop}></div>
        <h3 className={techListStyles.techTitle}>Front End</h3>
        <ul className={techListStyles.techList}>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiHtml5 className={techListStyles.techIcon} />
            </div>
            <p>HTML</p>
          </li>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiCss3 className={techListStyles.techIcon} />
            </div>
            <p>CSS</p>
          </li>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiJavascript1 className={techListStyles.techIcon} />
            </div>
            <p>JavaScript</p>
          </li>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiReact className={techListStyles.techIcon} />
            </div>
            <p>React</p>
          </li>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiSass className={techListStyles.techIcon} />
            </div>
            <p>Scss</p>
          </li>
        </ul>
        <h3 className={techListStyles.techTitle}>Tools</h3>
        <ul className={techListStyles.techList}>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiIllustrator className={techListStyles.techIcon} />
            </div>
            <p>Illustrator</p>
          </li>
          <li className={techListStyles.techListItem}>
            <div className={techListStyles.iconWrapper}>
              <DiGit className={techListStyles.techIcon} />
            </div>
            <p>Git</p>
          </li>
        </ul>
      </div>
      <BackgroundChevron className={techListStyles.backgroundChevron} />
    </div>
  )
}

export default TechListSection
