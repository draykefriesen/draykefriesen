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
