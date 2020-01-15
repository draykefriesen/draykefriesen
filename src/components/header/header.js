import React, { useEffect } from "react"
import { useSpring, animated as a } from "react-spring"
import headerStyles from "./header.module.scss"

const Header = ({ scroll }) => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://apis.google.com/js/platform.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
            <p
              onClick={e => scroll(e.target.dataset.type)}
              data-type="aboutLink"
              className={headerStyles.navText}
            >
              About
            </p>
          </li>
          <li className={headerStyles.navItem}>
            <p
              onClick={e => scroll(e.target.dataset.type)}
              data-type="videoLink"
              className={headerStyles.navText}
            >
              Videos
            </p>
          </li>

          <li className={headerStyles.navItem}>
            <p
              onClick={e => scroll(e.target.dataset.type)}
              data-type="contactLink"
              className={headerStyles.navText}
            >
              Contact
            </p>
          </li>
        </ul>
      </nav>
      <div className={headerStyles.youtubeBtn}>
        <div
          style={{ width: "100px" }}
          className="g-ytsubscribe"
          data-channelid="UCADSoOuc1_VD4qxgIJVZtZA"
          data-layout="default"
          data-theme="dark"
          data-count="default"
        ></div>
      </div>
    </a.header>
  )
}

export default Header
