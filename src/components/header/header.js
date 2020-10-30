import React from "react"
import MobileNav from "./mobile-nav/MobileNav"
import styles from "./header.module.scss"

const Header = ({ scroll }) => {
  return (
    <header className={styles.pageHeader}>
      <nav className={styles.headerNav}>
        <MobileNav scroll={scroll} />
        <ul className={styles.navListWrapper}>
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("aboutLink")}
              className={styles.navButton}
            >
              About
            </button>
          </li>{" "}
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("pricingLink")}
              className={styles.navButton}
            >
              Pricing
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("projectsLink")}
              className={styles.navButton}
            >
              Projects
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("illustrationLink")}
              className={styles.navButton}
            >
              Illustrations
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("skillsLink")}
              className={styles.navButton}
            >
              Skills
            </button>
          </li>
          <li className={styles.navItem}>
            <button
              onClick={() => scroll("contactLink")}
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
