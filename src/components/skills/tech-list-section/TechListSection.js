import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiSass,
  DiGit,
  DiIllustrator,
  DiVisualstudio,
} from "react-icons/di"
import { SiAdobexd } from "react-icons/si"
import styles from "./techListSection.module.scss"

const TechListSection = () => {
  return (
    <div className={`grid-card ${styles.gridCard}`}>
      <div className={`border-top`}></div>
      <h3 className={`card-header ${styles.cardHeader}`}>Web Development</h3>
      <ul className={`list-grid ${styles.listGrid}`}>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiHtml5 className={styles.icon} />
          <p>HTML</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiCss3 className={styles.icon} />
          <p>CSS</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiJavascript1 className={styles.icon} />
          <p>JavaScript</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiReact className={styles.icon} />
          <p>React</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiSass className={styles.icon} />
          <p>Scss</p>
        </li>
      </ul>
      <h3 className={`card-header ${styles.cardHeader}`}>Tools</h3>
      <ul className={`list-grid ${styles.listGrid}`}>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiIllustrator className={styles.icon} />
          <p>Illustrator</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <SiAdobexd className={styles.icon} />
          <p>Xd</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiVisualstudio className={styles.icon} />
          <p>VS Code</p>
        </li>
        <li className={`list-item-flex ${styles.listItemFlex}`}>
          <DiGit className={styles.icon} />
          <p>Git</p>
        </li>
      </ul>
    </div>
  )
}

export default TechListSection
