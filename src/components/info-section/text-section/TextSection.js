import React from "react"
import { useSpring, animated as a, config } from "react-spring"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import styles from "./textSection.module.scss"

const TextHeader = ({ scroll }) => {
  const [{ y, boxShadow }, set] = useSpring(() => ({
    y: 0,
    boxShadow: "0 9px 14px hsla(268, 100%, 85%, 1)",
    config: config.stiff,
  }))

  return (
    <>
      <div className={styles.mainTextSection}>
        <div className={styles.mainTextWrapper}>
          <h2 className={styles.textSectionTitle}>
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
      <div className={styles.contactButtonWrapper}>
        <p className={styles.buttonParagraph}>Interested in hiring me?</p>
        <a.button
          style={{
            transform: y.interpolate(v => `translateY(${v}px)`),
            boxShadow: boxShadow,
          }}
          className={styles.contactButton}
          data-type="contactLink"
          onClick={e => scroll(e.target.dataset.type)}
          onMouseEnter={() =>
            set({
              y: -4,
              boxShadow: "0 18px 16px hsla(268, 60%, 85%, 0.95)",
            })
          }
          onMouseLeave={() =>
            set({
              y: 0,
              boxShadow: "0 9px 14px hsla(268, 100%, 85%, 1)",
            })
          }
        >
          Contact
        </a.button>
      </div>
    </>
  )
}

export default TextHeader
