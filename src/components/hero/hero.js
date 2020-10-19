import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated as a, config } from "react-spring"
import {BackgroundGradientTop, BackgroundGradientBottom} from '../background-gradient/BackgroundGradient'
import styles from "./hero.module.scss"

const HeroSection = () => {
  const {allFile} = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "hero-images"}}, sort: {order: ASC, fields: name}) {
        edges {
          node {
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
  const [{ points, points2, points3 }, set] = useSpring(() => ({
    points: [
      -10,
      97,
      55,
      22,
      -89,
      94,
      25,
      7,
      88,
      33,
      47,
      1,
      -87,
      59,
      2,
      48,
      32,
      26,
      15,
      91,
      88,
      -15,
    ],
    points2: [
      48,
      12,
      27,
      34,
      22,
      14,
      38,
      14,
      17,
      34,
      23,
      7,
      41,
      8,
      4,
      20,
      38,
      76,
      82,
      54,
      34,
      20,
    ],
    points3: [
      64,
      34,
      33,
      76,
      22,
      4,
      78,
      92,
      22,
      57,
      45,
      85,
      33,
      65,
      73,
      3,
      9,
      59,
      68,
      33,
      77,
      25,
    ],
    config: config.molasses,
  }))

  const AnimatePath = a("path")

  useEffect(() => {
    const lineAnimation = () => {
      const newPoints = []
      const newPoints2 = []
      const newPoints3 = []
      let i
      for (i = 0; i < 22; i++) {
        const isNegative = Math.random() <= 0.2
        if ((isNegative === true && i >= 0 && i <= 7) || (i >= 12 && i <= 15)) {
          const point = Math.random() * -60
          const point2 = Math.random() * -60
          const point3 = Math.random() * -60
          newPoints.push(point)
          newPoints2.push(point2)
          newPoints3.push(point3)
        } else {
          const point = Math.random() * 100
          const point2 = Math.random() * 100
          const point3 = Math.random() * 100
          newPoints.push(point)
          newPoints2.push(point2)
          newPoints3.push(point3)
        }

        if (newPoints3.length === 22) {
          set({ points: newPoints, points2: newPoints2, points3: newPoints3 })
        }
      }
    }

    const timer = window.setInterval(lineAnimation, 2200)

    return () => {
      window.clearInterval(timer)
    }
  }, [set])

  
  return (
    <section className={styles.heroSection}>
      <BackgroundGradientTop section='hero' />
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={styles.svgShapes}
      >
        <AnimatePath
          d={points.interpolate(
            (
              a,
              b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v
            ) => {
              return `M${a},${b}C${c},${d},${e},${f},${g},${h}s${i},${j},${k},${l},${m},${n},${o},${p}C${q},${r},${s},${t},${u},${v}Z`
            }
          )}
          fill="#D9DAFF55"
          stroke="none"
          strokeMiterlimit="10"
        />
        <AnimatePath
          d={points2.interpolate(
            (
              a,
              b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v
            ) => {
              return `M${a},${b}C${c},${d},${e},${f},${g},${h}s${i},${j},${k},${l},${m},${n},${o},${p}C${q},${r},${s},${t},${u},${v}Z`
            }
          )}
          fill="#D9DAFF55"
          stroke="none"
          strokeMiterlimit="10"
        />
        <AnimatePath
          d={points3.interpolate(
            (
              a,
              b,
              c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v
            ) => {
              return `M${a},${b}C${c},${d},${e},${f},${g},${h}s${i},${j},${k},${l},${m},${n},${o},${p}C${q},${r},${s},${t},${u},${v}Z`
            }
          )}
          fill="#D9DAFF55"
          stroke="none"
          strokeMiterlimit="10"
        />
      </svg>
      <div className={styles.heroContent}>
    
            <Img
              fluid={allFile.edges[0].node.childImageSharp.fluid}
              objectFit="contain"
              className={styles.portraitImage}
            />
          <div className={styles.textContainer}>
            <div className={styles.borderTop} />
            <Img
                fluid={allFile.edges[1].node.childImageSharp.fluid}
                objectFit="contain"
                className={styles.nameTextImage}
              />
            <div className={styles.textContainerContent}>
              <div className={styles.circle}/>
              <p className={styles.bioText}>
               I'm a <mark><b>JavaScript developer</b></mark>, <br/><mark><b>web designer</b></mark> and <mark><b>illustrator</b></mark>.<br/> I
                create custom web-apps, illustrations, logos, and a whole lot of
                in-between. Feel free to reach out if you have any questions.
              </p>
            </div>
          </div>
      </div>
      <BackgroundGradientBottom  section='hero'/>
    </section>
  )
}
export default HeroSection
