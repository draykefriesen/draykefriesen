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
            looking projects, which helps bring in new customers and more
            revenue to their business.
          </p>
        </div>
      </div>
    </>
  )
}

export default TextHeader
