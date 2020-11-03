import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import Footer from "./Footer/Footer"
import "../styles/normalize.scss"
import "../styles/main.scss"

const Layout = ({ children, scroll }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header scroll={scroll} siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
