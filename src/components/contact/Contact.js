import React, { useEffect, useRef } from "react"
import { useSpring, animated as a } from "react-spring"
import {
  IoIosMail,
  IoIosCall,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoYoutube,
  IoLogoReddit,
} from "react-icons/io"
import { AiOutlineBehance } from "react-icons/ai"
import { DiCodepen } from "react-icons/di"
import contactStyles from "./contact.module.scss"

const Contact = ({ contactCardRef }) => {
  const ref = useRef()

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = posY / window.innerHeight <= 0.65 ? 0 : 100
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calcOffset = o => `translateX(${o}%)`

  return (
    <section className={contactStyles.contactWrapper}>
      <h2 className={contactStyles.contactHeader}>Contact</h2>
      <div className={contactStyles.cardWrapper} ref={ref}>
        <a.div
          style={{ transform: offset.interpolate(calcOffset) }}
          className={contactStyles.contactInfoCard}
        >
          <div className={contactStyles.contactInfoCardBorderTop}></div>
          <h6 className={contactStyles.contactInfoCardHeader}>
            looking for info on
          </h6>
          <ul className={contactStyles.contactInfoCardList}>
            <li className={contactStyles.contactInfoCardListItem}>pricing</li>
            <li className={contactStyles.contactInfoCardListItem}>
              availability
            </li>
            <li className={contactStyles.contactInfoCardListItem}>
              general inquiries
            </li>
          </ul>
        </a.div>

        <div className={contactStyles.contactCard}>
          <div className={contactStyles.contactCardBorderTop}></div>
          <h3 className={contactStyles.contactCardTitle}>Reach me here</h3>
          <div className={contactStyles.textBlockWrapper}>
            <div className={contactStyles.iconWrapper}>
              <IoIosMail className={contactStyles.contactIcon} />
              <a
                href="mailto:draykefriesen@gmail.com"
                className={contactStyles.contactLink}
              >
                draykefriesen@gmail.com
              </a>
            </div>
          </div>
          <div className={contactStyles.textBlockWrapper}>
            <div className={contactStyles.iconWrapper}>
              <IoIosCall className={contactStyles.contactIcon} />
              <a
                href="tel:+1-204-232-2967"
                className={contactStyles.contactLink}
              >
                (204)-232-2967
              </a>
            </div>
          </div>
          <div className={contactStyles.textBlockWrapper}>
            <div className={contactStyles.iconWrapper}>
              <IoLogoInstagram className={contactStyles.contactIcon} />
              <a
                href="https://instagram.com/draykefriesen"
                className={contactStyles.contactLink}
              >
                @draykefriesen
              </a>
            </div>
          </div>

          <div className={contactStyles.textBlockWrapper}>
            <div className={contactStyles.iconWrapper}>
              <IoLogoTwitter className={contactStyles.contactIcon} />
              <a
                href="https://twitter.com/draykefriesen"
                className={contactStyles.contactLink}
              >
                @draykefriesen
              </a>
            </div>
          </div>

          <div className={contactStyles.secondaryMediaSection}>
            <h6 className={contactStyles.secondaryContactHeader}>
              some other places you can find me
            </h6>
            <div className={contactStyles.secondaryLogoBlock}>
              <a
                href="https://www.youtube.com/channel/UCADSoOuc1_VD4qxgIJVZtZA"
                className={contactStyles.secondaryContactIconLink}
              >
                <IoLogoYoutube className={contactStyles.secondaryContactIcon} />
              </a>

              <a
                href="https://dribbble.com/draykefriesen"
                className={contactStyles.secondaryContactIconLink}
              >
                <IoLogoDribbble
                  className={contactStyles.secondaryContactIcon}
                />
              </a>
              <a
                href="https://www.behance.net/draykefriesen"
                className={contactStyles.secondaryContactIconLink}
              >
                <AiOutlineBehance
                  className={contactStyles.secondaryContactIcon}
                />
              </a>
              <a
                href="https://codepen.io/draykefriesen"
                className={contactStyles.secondaryContactIconLink}
              >
                <DiCodepen className={contactStyles.secondaryContactIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <span ref={contactCardRef} style={{ marginTop: "90px" }}></span>
      <div className={contactStyles.backgroundStripes}>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default Contact
