import React, { useState } from "react"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import { useSpring, animated as a } from "react-spring"
import styles from "./mobileNav.module.scss"

const MobileNav = ({ scroll }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const { opacity, transform } = useSpring({
    opacity: isMenuOpen ? 1 : 0,
    transform: `scale(${isMenuOpen ? 1 : 0})`,
    config: {
      tension: 190,
    },
  })
  return (
    <>
      <button
        className={styles.mobileMenuButton}
        onClick={() => toggleMenu(prev => !prev)}
        aria-label="Close"
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
                onClick={() => {
                  scroll("aboutLink")
                  toggleMenu(false)
                }}
                className={styles.mobileNavButton}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroll("pricingLink")
                  toggleMenu(false)
                }}
                className={styles.mobileNavButton}
              >
                Pricing
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroll("projectsLink")
                  toggleMenu(false)
                }}
                className={styles.mobileNavButton}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroll("illustrationLink")
                  toggleMenu(false)
                }}
                className={styles.mobileNavButton}
              >
                Illustrations
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroll("skillsLink")
                  toggleMenu(false)
                }}
                className={styles.mobileNavButton}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroll("contactLink")
                  toggleMenu(false)
                }}
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
