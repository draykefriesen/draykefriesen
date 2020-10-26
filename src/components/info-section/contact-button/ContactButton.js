import React from "react"
import { useSpring, animated as a, config } from "react-spring"
import styles from "./contactButton.module.scss"

const ContactButton = ({ scroll }) => {
  const [{ y, boxShadow }, set] = useSpring(() => ({
    y: 0,
    boxShadow: "0 9px 14px hsla(268, 100%, 85%, 1)",
    config: config.stiff,
  }))
  return (
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
  )
}

export default ContactButton
