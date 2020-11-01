import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { DiReact, DiSass, DiIllustrator } from "react-icons/di"
import { FiExternalLink } from "react-icons/fi"
import { IoIosLink } from "react-icons/io"
import ExpressvgIcon from "../../media/svg/expressvg-e-logo-pink.svg"
import {
  BackgroundGradientTop,
  BackgroundGradientBottom,
} from "../background-gradient/BackgroundGradient"
import { BackgroundStripes5 } from "../background-stripes/BackgroundStripes"
import styles from "./projects.module.scss"

const Projects = ({ projectsSectionRef }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "project-images" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={styles.projectsSection}>
      <BackgroundGradientTop section="projects" />
      <h2
        className={`section-header ${styles.sectionHeader}`}
        ref={projectsSectionRef}
      >
        Projects
      </h2>
      <div className={styles.projectsSlider}>
        <div className={styles.card}>
          <OutboundLink
            href="https://www.expressvg.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.projectLink}
          >
            <div className={styles.overlay} />
            <IoIosLink className={styles.linkIcon} />
            <Img
              fluid={allFile.edges[0].node.childImageSharp.fluid}
              objectFit="contain"
              className={styles.projectImage}
            />
          </OutboundLink>
          <h3 className={styles.projectTitle}>
            <ExpressvgIcon className={styles.projectIcon} />
            Expressvg
            <a
              href="https://www.expressvg.com/"
              target="_blank"
              rel="noreferrer"
              className={styles.externalLink}
            >
              <FiExternalLink className={styles.externalLinkIcon} />
            </a>
          </h3>
          <p className={styles.projectDescription}>
            Expressvg allows you to customize SVG files to your specifications
            through color, effects, sizing and positioning. Download as SVG or
            PNG file formats! Made with Gatsbyjs.
          </p>
          <div className={styles.techIconsWrapper}>
            <DiReact className={styles.techIcon} />
            <DiSass className={styles.techIcon} />
            <DiIllustrator className={styles.techIcon} />
          </div>
        </div>
      </div>
      <BackgroundStripes5 />
      <BackgroundGradientBottom section="projects" />
    </section>
  )
}

export default Projects
