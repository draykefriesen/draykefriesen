import React from "react"
import { useSpring, animated as a, config } from "react-spring"
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
        <h2 className={textAreaStyles.textSectionTitle}>
          Web solutions for all people and businesses
        </h2>
        <p className={textAreaStyles.description}>
          I aim to create web sites and web apps that meet the specific needs of
          your business or project. I specialize in custom interfaces that
          extends your brand or personality onto the web.
        </p>
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
