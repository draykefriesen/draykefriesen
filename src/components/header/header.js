import React, { useState } from "react"
import { IoIosMenu, IoIosClose, IoIosAdd } from "react-icons/io"
import styles from "./header.module.scss"

const Header = ({ scroll }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  return (
    <header className={styles.pageHeader}>
      <nav className={styles.headerNav}>
        <button
          className={styles.mobileMenuButton}
          onClick={() => toggleMenu(prev => !prev)}
        >
          <IoIosMenu className={styles.mobileMenuIcon} />
        </button>
        <div
          className={`${styles.mobileMenu} ${isMenuOpen &&
            styles.activeMobileMenu}`}
        >
          <div className={styles.mobileMenuCard}>
            <IoIosClose
              className={styles.mobileMenuClose}
              onClick={() => toggleMenu(false)}
            />
            <ul className={styles.mobileNavList}>
              <li className={styles.mobileNavItem}>
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
              <li className={styles.mobileNavItem}>
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
              <li className={styles.mobileNavItem}>
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
              <li className={styles.mobileNavItem}>
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
              <li className={styles.mobileNavItem}>
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
        </div>
        <ul className={styles.navListWrapper}>
          <li className={styles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="aboutLink"
              className={styles.navButton}
            >
              About
            </button>
          </li>{" "}
          <li className={styles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="pricingLink"
              className={styles.navButton}
            >
              Pricing
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="projectsLink"
              className={styles.navButton}
            >
              Projects
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="skillsLink"
              className={styles.navButton}
            >
              Skills
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="contactLink"
              className={styles.navButton}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
