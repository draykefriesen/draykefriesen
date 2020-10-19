import React from "react"
import { useSpring, animated as a, config } from "react-spring"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import textAreaStyles from "./textSection.module.scss"

const TextHeader = ({ scroll }) => {
  const [{ y, boxShadow }, set] = useSpring(() => ({
    y: 0,
    boxShadow: "0 9px 14px hsla(268, 100%, 85%, 1)",
    config: config.stiff,
  }))

  return (
    <>
      <div className={textAreaStyles.mainTextWrapper}>
        <h2 className={textAreaStyles.textSectionTitle}>What I do</h2>
        <p className={textAreaStyles.description}>
          I <mark><b>design</b></mark>, <mark><b>code</b></mark>, and <mark><b>illustrate</b></mark> for the web.
          <br /> My goal is to always create fast, usable, and visually
          appealing interfaces that work accross all devices.
        </p>
        <ul className={textAreaStyles.list}>
          <li className={textAreaStyles.listItem}>
            <IoIosCheckmarkCircleOutline className={textAreaStyles.listIcon} />
            <p className={textAreaStyles.listItemText}>
              custom designs and mockups.
            </p>
          </li>
          <li className={textAreaStyles.listItem}>
            <IoIosCheckmarkCircleOutline className={textAreaStyles.listIcon} />
            <p className={textAreaStyles.listItemText}>
              bring designs to life through practical code.
            </p>
          </li>
          <li className={textAreaStyles.listItem}>
            <IoIosCheckmarkCircleOutline className={textAreaStyles.listIcon} />
            <p className={textAreaStyles.listItemText}>
              illustrations, icons, and logos.
            </p>
          </li>
        </ul>
      </div>
      <div className={textAreaStyles.contactButtonWrapper}>
        <p className={textAreaStyles.buttonParagraph}>
          Interested in hiring me?
        </p>
        <a.button
          style={{
            transform: y.interpolate(v => `translateY(${v}px)`),
            boxShadow: boxShadow,
          }}
          className={textAreaStyles.contactButton}
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