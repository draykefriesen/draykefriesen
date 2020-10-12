import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundCircles from "../../media/svg/background-circles.svg"
import BackgroundChevron from "../../media/svg/background-chevron.svg"
import { IoIosPin } from "react-icons/io"
import aboutStyles from "./about.module.scss"

const About = ({ aboutSectionRef }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(
  //       limit: 1
  //       filter: { relativeDirectory: { eq: "about-section" } }
  //       sort: { fields: birthtime, order: DESC }
  //     ) {
  //       edges {
  //         node {
  //           name
  //           birthTime(formatString: "YYYY MMMM DD")
  //           childImageSharp {
  //             fluid(maxWidth: 350) {
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const portraitImage = data.allFile.edges[0].node.childImageSharp.fluid
  return (
    <section className={aboutStyles.aboutWrapper}>
      <div ref={aboutSectionRef} style={{ marginBottom: "145px" }}></div>
      <div className={aboutStyles.titleImageWrapper}>
        <h2 className={aboutStyles.aboutHeader}>About</h2>
        {/* <Img fluid={portraitImage} className={aboutStyles.portraitImage} /> */}
        <BackgroundCircles className={aboutStyles.backgroundCircles} />
        <BackgroundChevron className={aboutStyles.backgroundChevron} />
      </div>
      <div className={aboutStyles.aboutCard}>
        <div className={aboutStyles.cardBorderTop}></div>
        <div className={aboutStyles.textBlockWrapper}>
          <p className={aboutStyles.aboutText}>
            I'm Drayke Friesen, a web developer and designer living in Winnipeg,
            Manitoba. When I'm not working on the web I like to spend time with
            friends and family. I enjoy playing hockey, going camping, cooking,
            and playing guitar.
          </p>
        </div>
        <div className={aboutStyles.textBlockWrapper}>
          <p className={aboutStyles.aboutText}>
            I also make videos sharing some of my work process, illustrations,
            code, and general tips relating to web deveoplment and web design.
            check them out below.
          </p>
        </div>
      </div>
      <div className={aboutStyles.backgroundStripes}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  )
}

export default About
