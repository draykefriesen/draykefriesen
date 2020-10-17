import React, { useEffect, useRef } from "react"
import { useSpring, animated as a } from "react-spring"
import {
  IoIosMail,
  IoIosCall,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoYoutube,
  IoLogoLinkedin
} from "react-icons/io"
import { AiOutlineBehance } from "react-icons/ai"
import { DiCodepen } from "react-icons/di"
import {BackgroundGradientTop, BackgroundGradientBottom} from '../BackgroundGradient'
import styles from "./contact.module.scss"

const Contact = ({ contactCardRef }) => {
  // const ref = useRef()

  const handleScroll = () => {
    const posY = contactCardRef.current.getBoundingClientRect().top
    const offset = posY / window.innerHeight <= 0.65 ? 0 : 100
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[handleScroll])

  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))
  const calcOffset = o => `translateX(${o}%)`

  return (
    <section className={styles.contentWrapper}>
      <BackgroundGradientTop section='contact'/>
      <div className={styles.contactContent}>
      <h2 className={styles.sectionTitle} ref={contactCardRef}>Contact</h2>
      <div className={styles.cardWrapper} >
        <a.div
          style={{ transform: offset.interpolate(calcOffset) }}
          className={styles.contactInfoCard}
        >
          <div className={styles.contactInfoCardBorderTop}></div>
          <h6 className={styles.contactInfoCardHeader}>
            looking for info on
          </h6>
          <ul className={styles.contactInfoCardList}>
            <li className={styles.contactInfoCardListItem}>pricing</li>
            <li className={styles.contactInfoCardListItem}>
              availability
            </li>
            <li className={styles.contactInfoCardListItem}>
              general inquiries
            </li>
          </ul>
        </a.div>

        <div className={styles.contactCard}>
          <div className={styles.contactCardBorderTop}></div>
          <h3 className={styles.contactCardTitle}>Reach me here</h3>
          <div className={styles.textBlockWrapper}>
            <div className={styles.iconWrapper}>
              <IoIosMail className={styles.contactIcon} />
              <a
                href="mailto:draykefriesen@gmail.com"
                className={styles.contactLink}
              >
                draykefriesen@gmail.com
              </a>
            </div>
          </div>
          <div className={styles.textBlockWrapper}>
            <div className={styles.iconWrapper}>
              <IoIosCall className={styles.contactIcon} />
              <a
                href="tel:+1-204-232-2967"
                className={styles.contactLink}
              >
                (204)-232-2967
              </a>
            </div>
          </div>
          <div className={styles.textBlockWrapper}>
            <div className={styles.iconWrapper}>
              <IoLogoInstagram className={styles.contactIcon} />
              <a
                href="https://instagram.com/draykefriesen"
                className={styles.contactLink}
              >
                @draykefriesen
              </a>
            </div>
          </div>

          <div className={styles.textBlockWrapper}>
            <div className={styles.iconWrapper}>
              <IoLogoTwitter className={styles.contactIcon} />
              <a
                href="https://twitter.com/draykefriesen"
                className={styles.contactLink}
              >
                @draykefriesen
              </a>
            </div>
          </div>

          <div className={styles.secondaryMediaSection}>
            <h6 className={styles.secondaryContactHeader}>
              some other places you can find me
            </h6>
            <div className={styles.secondaryLogoBlock}>
         
              <a href="https://www.linkedin.com/in/drayke-friesen-0684b41a3/">
              <IoLogoLinkedin className={styles.secondaryContactIcon}  />
              </a>

              <a
                href="https://dribbble.com/draykefriesen"
                className={styles.secondaryContactIconLink}
              >
                <IoLogoDribbble
                  className={styles.secondaryContactIcon}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCADSoOuc1_VD4qxgIJVZtZA"
                className={styles.secondaryContactIconLink}
              >
                <IoLogoYoutube className={styles.secondaryContactIcon} />
              </a>
              {/* <a
                href="https://www.behance.net/draykefriesen"
                className={styles.secondaryContactIconLink}
              >
                <AiOutlineBehance
                  className={styles.secondaryContactIcon}
                />
              </a> */}
              {/* <a
                href="https://codepen.io/draykefriesen"
                className={styles.secondaryContactIconLink}
              >
                <DiCodepen className={styles.secondaryContactIcon} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      <BackgroundGradientBottom section='contact'/>
    </section>
  )
}

export default Contact
