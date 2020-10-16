import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiGit,
  DiIllustrator,
  DiVisualstudio
} from "react-icons/di"
import { SiAdobexd } from "react-icons/si"
import BackgroundChevron from "../../media/svg/background-chevron.svg"
import styles from "./techListSection.module.scss"

const TechListSection = () => {
  return (
    <div className={styles.techListWrapper}>
      <div className={styles.techListCard}>
        <div className={styles.borderTop}></div>
        <h3 className={styles.techTitle}>Web Development</h3>
        <ul className={styles.techList}>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiHtml5 className={styles.techIcon} />
            </div>
            <p>HTML</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiCss3 className={styles.techIcon} />
            </div>
            <p>CSS</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiJavascript1 className={styles.techIcon} />
            </div>
            <p>JavaScript</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiReact className={styles.techIcon} />
            </div>
            <p>React</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiSass className={styles.techIcon} />
            </div>
            <p>Scss</p>
          </li>
        </ul>
        <h3 className={styles.techTitle}>Tools</h3>
        <ul className={styles.techList}>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiIllustrator className={styles.techIcon} />
            </div>
            <p>Illustrator</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <SiAdobexd className={styles.techIcon} />
            </div>
            <p>Xd</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiVisualstudio className={styles.techIcon} />
            </div>
            <p>VS Code</p>
          </li>
          <li className={styles.techListItem}>
            <div className={styles.iconWrapper}>
              <DiGit className={styles.techIcon} />
            </div>
            <p>Git</p>
          </li>
        </ul>
      </div>
      <BackgroundChevron className={styles.backgroundChevron} />
    </div>
  )
}

export default TechListSection
