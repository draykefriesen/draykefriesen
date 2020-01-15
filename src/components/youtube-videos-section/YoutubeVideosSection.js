import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import videoSectionStyles from "./youtubeVideosSection.module.scss"

const YoutubeVideosSection = ({ videoSectionRef }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        limit: 4
        filter: { relativeDirectory: { eq: "youtube" } }
        sort: { fields: birthtime, order: DESC }
      ) {
        edges {
          node {
            name
            birthTime(formatString: "YYYY MMMM DD")
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const thumbnails = data.allFile.edges

  return (
    <div className={videoSectionStyles.videoSectionWrapper}>
      <div className={videoSectionStyles.videoSectionContent}>
        <h2
          className={videoSectionStyles.videoSectionHeader}
          ref={videoSectionRef}
        >
          Latest Videos
        </h2>
        <ul className={videoSectionStyles.listWrapper}>
          <li className={videoSectionStyles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[1].node.childImageSharp.fluid}
              className={videoSectionStyles.thumbnail}
            />
          </li>
          <li className={videoSectionStyles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[2].node.childImageSharp.fluid}
              className={videoSectionStyles.thumbnail}
            />
          </li>
          <li className={videoSectionStyles.videoContainer}>
            <h6>Graphic Design</h6>
            <h4>Abstract Background Tutorial - Affinity Design</h4>
            <Img
              fluid={thumbnails[3].node.childImageSharp.fluid}
              className={videoSectionStyles.thumbnail}
            />
          </li>
        </ul>
        <div className={videoSectionStyles.backgroundStripes}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default YoutubeVideosSection
