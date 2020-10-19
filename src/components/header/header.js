import React from "react"
import headerStyles from "./header.module.scss"


const Header = ({ scroll }) => {
  
  return (
    <header className={headerStyles.pageHeader}>
      <nav className={headerStyles.headerNav}>
        <ul className={headerStyles.navListWrapper}>
          <li className={headerStyles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="aboutLink"
              className={headerStyles.navButton}
            >
              Projects
            </button>
          </li>
          <li className={headerStyles.navItem}>
              <button
                onClick={e => scroll(e.target.dataset.type)}
                data-type="skillsLink"
                className={headerStyles.navButton}
              >
                Skills
              </button>
          </li>

          <li className={headerStyles.navItem}>
            <button
              onClick={e => scroll(e.target.dataset.type)}
              data-type="contactLink"
              className={headerStyles.navButton}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </ header>
  )
}

export default Header
