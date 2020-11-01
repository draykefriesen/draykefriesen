import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  BackgroundGradientTop,
  BackgroundGradientBottom,
} from "../background-gradient/BackgroundGradient"
import { BackgroundStripes2 } from "../background-stripes/BackgroundStripes"
import styles from "./illustrationShowcase.module.scss"

const IllustrationShowcase = ({ illustrationShowcaseRef }) => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "illustration-showcase" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={styles.sectionWrapper}>
      <BackgroundGradientTop section="illustration-showcase" />
      <h2
        className={`section-header ${styles.sectionHeader}`}
        ref={illustrationShowcaseRef}
      >
        Illustrations
      </h2>
      <div className={styles.illustrationsContainer}>
        {allFile.edges.map(edge => (
          <Img
            fluid={edge.node.childImageSharp.fluid}
            objectFit="contain"
            className={`${styles.illustrationImage} ${edge.node.childImageSharp
              .fluid.aspectRatio > 1 && styles.illustrationImageSpan2}`}
          />
        ))}
      </div>
      <BackgroundStripes2 />
      <BackgroundGradientBottom section="illustration-showcase" />
    </section>
  )
}

export default IllustrationShowcase
