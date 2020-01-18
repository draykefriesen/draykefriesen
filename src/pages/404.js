import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Styles from "../styles/404.module.scss"

const NotFoundPage = () => (
  <div className={Styles.wrapper}>
    <SEO title="404: Not found" />
    <h1 className={Styles.title}>Page not found!</h1>

    <p className={Styles.text}>
      Head over to my{" "}
      <Link to="/" className={Styles.link}>
        homepage
      </Link>
    </p>
  </div>
)

export default NotFoundPage
