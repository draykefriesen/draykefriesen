import React from "react"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import styles from "./textSection.module.scss"

const TextHeader = ({ aboutRef }) => {
  return (
    <>
      <div className={styles.mainTextSection}>
        <div className={styles.mainTextWrapper}>
          <h2 className={styles.textSectionTitle} ref={aboutRef}>
            What <span>I Do</span>
          </h2>
          <p className={styles.description}>
            I
            <mark>
              <b>design</b>
            </mark>
            <mark>
              <b>code</b>
            </mark>
            and
            <mark>
              <b>illustrate</b>
            </mark>
            for the web.
            <br />
          </p>
          <p className={styles.descriptionSubText}>
            I work with small businesses to build the best performing and best
            looking projects. This helps to bring more customers to their sites,
            and more revenue to their business.
          </p>
        </div>
        {/* <ul className={styles.list}>
          <li className={styles.listItem}>
            <IoIosCheckmarkCircleOutline className={styles.listIcon} />
            <p className={styles.listItemText}>
              custom designs and mockups.
            </p>
          </li>
          <li className={styles.listItem}>
            <IoIosCheckmarkCircleOutline className={styles.listIcon} />
            <p className={styles.listItemText}>
              bring designs to life through practical code.
            </p>
          </li>
          <li className={styles.listItem}>
            <IoIosCheckmarkCircleOutline className={styles.listIcon} />
            <p className={styles.listItemText}>
              illustrations, icons, and logos.
            </p>
          </li>
        </ul> */}
      </div>
    </>
  )
}

export default TextHeader
