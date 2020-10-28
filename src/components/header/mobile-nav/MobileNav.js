import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { useSpring, animated as a } from "react-spring"
import styles from "./mobileNav.module.scss"

const MobileNav = ({ scroll }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const { opacity, transform } = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: `scale(${isMenuOpen ? 1 : 0})`,
  })
  return (
    <>
      <button
        className={styles.mobileMenuButton}
        onClick={() => toggleMenu(prev => !prev)}
      >
        <IoIosMenu className={styles.mobileMenuIcon} />
      </button>
      <a.div
        className={`${styles.mobileMenu} ${isMenuOpen &&
          styles.activeMobileMenu}`}
        style={{ opacity: opacity, transform: transform }}
      >
        <div className={styles.mobileMenuCard}>
          <IoIosClose
            className={styles.mobileMenuClose}
            onClick={() => toggleMenu(false)}
          />
          <ul className={styles.mobileNavList}>
            <li>
              <button
                onClick={e => {
                  scroll(e.target.dataset.type)
                  toggleMenu(false)
                }}
                data-type="aboutLink"
                className={styles.mobileNavButton}
              >
                About
              </button>
            </li>{" "}
            <li>
              <button
                onClick={e => {
                  scroll(e.target.dataset.type)
                  toggleMenu(false)
                }}
                data-type="pricingLink"
                className={styles.mobileNavButton}
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={e => {
                  scroll(e.target.dataset.type)
                  toggleMenu(false)
                }}
                data-type="projectsLink"
                className={styles.mobileNavButton}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={e => {
                  scroll(e.target.dataset.type)
                  toggleMenu(false)
                }}
                data-type="skillsLink"
                className={styles.mobileNavButton}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={e => {
                  scroll(e.target.dataset.type)
                  toggleMenu(false)
                }}
                data-type="contactLink"
                className={styles.mobileNavButton}
              >
                Contact
              </button>
            </li>
          </ul>
          <div className={styles.borderBottom} />
        </div>
      </a.div>
    </>
  )
}

export default MobileNav
