import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundCircles from "../../media/svg/background-circles.svg"
import BackgroundChevron from "../../media/svg/background-chevron.svg"
import { IoIosPin, IoIosSchool, IoIosVideocam } from "react-icons/io"
import aboutStyles from "./about.module.scss"

const About = ({ aboutSectionRef }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        limit: 2
        filter: { relativeDirectory: { eq: "about-section" } }
        sort: { fields: birthtime, order: DESC }
      ) {
        edges {
          node {
            name
            birthTime(formatString: "YYYY MMMM DD")
            childImageSharp {
              fixed(width: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const portraitImage = data.allFile.edges[0].node.childImageSharp.fixed
  return (
    <section className={aboutStyles.aboutWrapper}>
      <div ref={aboutSectionRef} style={{ marginBottom: "145px" }}></div>
      <div className={aboutStyles.titleImageWrapper}>
        <h2 className={aboutStyles.aboutHeader}>About</h2>
        <Img fixed={portraitImage} className={aboutStyles.portraitImage} />
        <BackgroundCircles className={aboutStyles.backgroundCircles} />
        <BackgroundChevron className={aboutStyles.backgroundChevron} />
      </div>
      <div className={aboutStyles.aboutCard}>
        <div className={aboutStyles.cardBorderTop}></div>

        <div className={aboutStyles.textBlockWrapper}>
          <div className={aboutStyles.iconWrapper}>
            <IoIosPin size={26} className={aboutStyles.aboutIcon} />
          </div>
          <p className={aboutStyles.aboutText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            iure cupiditate corporis nostrum quo nam! Dolore accusamus veniam,
            perferendis, tenetur explicabo, mollitia dignissimos beatae
            repudiandae impedit exercitationem officia sed placeat!
          </p>
        </div>
        <div className={aboutStyles.textBlockWrapper}>
          <div className={aboutStyles.iconWrapper}>
            <IoIosSchool size={26} className={aboutStyles.aboutIcon} />
          </div>
          <p className={aboutStyles.aboutText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            iure cupiditate corporis nostrum quo nam! Dolore accusamus veniam,
            perferendis, tenetur explicabo, mollitia dignissimos beatae
            repudiandae impedit exercitationem officia sed placeat!
          </p>
        </div>
        <div className={aboutStyles.textBlockWrapper}>
          <div className={aboutStyles.iconWrapper}>
            <IoIosVideocam size={26} className={aboutStyles.aboutIcon} />
          </div>
          <p className={aboutStyles.aboutText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
            iure cupiditate corporis nostrum quo nam! Dolore accusamus veniam,
            perferendis, tenetur explicabo, mollitia dignissimos beatae
            repudiandae impedit exercitationem officia sed placeat!
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
