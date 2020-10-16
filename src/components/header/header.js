import React, { useEffect } from "react"
import { useSpring, animated as a } from "react-spring"
import headerStyles from "./header.module.scss"


const Header = ({ scroll }) => {


  // useEffect(() => {
  //   const script = document.createElement("script")
  //   script.src = "https://apis.google.com/js/platform.js"
  //   script.async = true
  //   document.body.appendChild(script)

  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // }, [])

  const animate = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },

    delay: 1500,
  })

  //const src = "https://apis.google.com/js/platform.js"


  return (
    <a.header style={animate} className={headerStyles.pageHeader}>
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
          {/* <li className={headerStyles.navItem}>
            <div
              className={`${headerStyles.youtubeBtn} g-ytsubscribe`}
              data-channelid="UCADSoOuc1_VD4qxgIJVZtZA"
              data-layout="default"
              data-theme="dark"
              data-count="default"
            ></div>
          </li> */}
        </ul>
      </nav>
      <div></div>
    </a.header>
  )
}

export default Header
