import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useSpring, animated as a, config } from "react-spring"
import styles from "./hero.module.scss"

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  console.log(data)
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

  const animateSvgText = useSpring({
    from: {
      d: "858",
      d2: "465.14",
      d3: "504.8",
      e: "564.82",
      e2: "458.85",
      e3: "455.05",
      e4: "281.96",
      e5: "592.8",
      e6: "414.5",
      e7: "458.8",
      e8: "499.26",
      f: "564.81",
      f2: "458.76",
      f3: "354.89",
      f4: "458.8",
      f5: "252.41",
      f6: "395.49",
      f7: "493.25",
      f8: "458.78",
      f9: "499.32",
      opacity: 0,
      strokeOpacity: 1,
      slide1Y: "translate(0 -1000)",
      slide2X: "translate(-1000 0)",
    },
    to: async next => {
      await next({
        d: "0",
        d2: "0",
        d3: "0",
        e: "0",
        e2: "0",
        e3: "0",
        e4: "0",
        e5: "0",
        e6: "0",
        e7: "0",
        e8: "0",
        f: "0",
        f2: "0",
        f3: "0",
        f4: "0",
        f5: "0",
        f6: "0",
        f7: "0",
        f8: "0",
        f9: "0",
        slide1Y: "translate(0 0)",
        slide2X: "translate(0 0)",
      })
      await next({ strokeOpacity: 0, opacity: 1 })
    },
    delay: 200,
    config: config.slow,
  })

  return (
    <header className={styles.heroSection}>
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
      <section className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.imageTextWrapper}>
            <Img
              fluid={data.allImageSharp.edges[1].node.fluid}
              objectFit="contain"
              className={styles.portraitImage}
            />
          </div>

          <div className={styles.textContainer}>
            <div className={styles.borderTop} />
            <div className={styles.textContainerContent}>
              <Img
                fluid={data.allImageSharp.edges[0].node.fluid}
                objectFit="contain"
                className={styles.nameTextImage}
              />
              <p className={styles.bioText}>
                I’m a JavaScript developer, web designer, and illustrator. I
                create custom web-apps, illustrations, logos, and a whole lot of
                in-between. Feel free to reach out if you have any questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 708.14 407.56"
        className={styles.svgText}
      >
        <a.g
          fillOpacity={animateSvgText.opacity}
          strokeOpacity={animateSvgText.strokeOpacity}
          strokeLinecap="round"
        >
          <a.g
            transform={animateSvgText.slide2X}
            fill="#718096"
            stroke="#718096"
          >
            <path d="M23.79,382l.53,22.89a.94.94,0,0,1-.95.94H8.88a.94.94,0,0,1-.94-.94L8.36,382V362.89H1.11A.94.94,0,0,1,.17,362v-9.24a.94.94,0,0,1,.94-.95H8.36v-3.57c0-12.28,8.61-16.9,17.64-16.9a66.93,66.93,0,0,1,9.76.94,1,1,0,0,1,1,1v9.14a.78.78,0,0,1-1,.73,24,24,0,0,0-6.09-.63c-3.46,0-5.88,1.68-5.88,7.14v2.1h12a.94.94,0,0,1,1,.95V362a.94.94,0,0,1-1,.94h-12Z" />
            <path d="M64.22,407.2c-17.64,0-27.83-11-27.83-28.24S46.58,350.4,64.22,350.4s27.61,11,27.61,28.24S81.85,407.2,64.22,407.2Zm0-10.5c7.77,0,11.44-5.35,11.44-17.74,0-12.18-3.78-18.06-11.55-18.06-8,.1-11.65,6-11.65,18.16S56.34,396.7,64.22,396.7Z" />
            <path d="M96.56,405.83a.94.94,0,0,1-1-.94L96,378.75l-.42-26a.94.94,0,0,1,1-.95h13.86a.94.94,0,0,1,.94.95l-.42,8.19c4.2-6.41,11.45-9.56,19.32-9.56a17.87,17.87,0,0,1,2.41.21,1.24,1.24,0,0,1,1,1.16v9.76a.86.86,0,0,1-1,.84,13.27,13.27,0,0,0-2-.1c-11.13,0-19.42,6.19-19.32,18.58v23.1a.94.94,0,0,1-.94.94Z" />
            <path d="M187.38,403.84a1.56,1.56,0,0,1-.84,1.26,31,31,0,0,1-9.87,1.78c-9.14,0-17.85-4.62-17.85-16.9l.1-27.09h-6.09a.94.94,0,0,1-.94-.94v-9.24a.94.94,0,0,1,.94-.95h6.09l-.1-12.6a.94.94,0,0,1,.94-.94h14a.94.94,0,0,1,.94.94l-.1,12.6h12a.94.94,0,0,1,.94.95V362a.94.94,0,0,1-.94.94H174.46l.11,26.67c0,4.62,2.31,6.09,5.77,6.09a18.82,18.82,0,0,0,6.09-.95.79.79,0,0,1,.95.74Z" />
            <path d="M218.35,362.05c-5,0-10.5,3.89-12.28,11.55l.42,31.29a.94.94,0,0,1-1,.94H191.79a.94.94,0,0,1-.95-.94l.42-35.91-.42-35.7a.94.94,0,0,1,.95-.94h13.75a.94.94,0,0,1,1,.94l-.32,24.47q5.67-7.25,16.38-7.25c12.18,0,19.64,7.25,19.32,23.1v11.55l.32,19.74a.94.94,0,0,1-.95.94H227.07a.94.94,0,0,1-.95-.94l.32-19.53-.11-13.65C226.23,365.2,222.66,362.05,218.35,362.05Z" />
            <path d="M298.26,387.56a.81.81,0,0,1,.84.95c-1.37,9.87-10.82,18.69-25.94,18.69-18.06,0-27.82-11.87-27.82-28.24,0-17.22,10.29-28.56,27.51-28.56,17.74,0,27.61,11.76,27.92,30.66a.94.94,0,0,1-.94.94H261.19c.63,10.19,4.62,14.7,12.18,14.7,5.25,0,9-2.42,10.5-8.19a1.24,1.24,0,0,1,1.16-.95ZM273,360.79c-6.3,0-10.08,3.78-11.34,11.24h22.16C283.14,366.25,279.88,360.79,273,360.79Z" />
          </a.g>
          <a.g
            x="331.91"
            y="296"
            fill="#000"
            stroke="#000"
            strokeLinecap="round"
          >
            <AnimatePath
              strokeDashoffset={animateSvgText.d}
              strokeDasharray="858"
              d="M396.24,405.61a1.34,1.34,0,0,1-1.35-1.35l-.15-72-31.5,72.14a2.34,2.34,0,0,1-1.95,1.2H335.64a1.34,1.34,0,0,1-1.35-1.35L334,302a1.34,1.34,0,0,1,1.35-1.35h19.35A1.34,1.34,0,0,1,356,302l-3.15,84.14,35.25-84.29a2,2,0,0,1,1.8-1.2h23.85a1.34,1.34,0,0,1,1.35,1.35l-3.45,85.94,36.45-86.09a2.34,2.34,0,0,1,1.95-1.2h20.55a.82.82,0,0,1,.75,1.2l-48.3,102.59a2.16,2.16,0,0,1-1.95,1.2Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.d2}
              strokeDasharray="465.14"
              d="M525.84,379.52a1,1,0,0,1,1,1.34c-3.9,14.1-16.65,26.7-40.65,26.7-23.55,0-34.95-13.95-34.95-32.84,0-22.35,13.35-48.3,46.5-48.3,25.35,0,39.15,16.8,32.7,43.8a1.75,1.75,0,0,1-1.65,1.34H473.49v3c0,11.85,4.2,18,13.8,18,8.85,0,15.3-3.45,18-11.7a1.6,1.6,0,0,1,1.65-1.34Zm-30.15-38.25c-9.6,0-16.2,6.3-19.65,16.05h33.15C510.84,349.22,505.89,341.27,495.69,341.27Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.d3}
              strokeDasharray="504.8"
              d="M577,407.11c-11.1,0-20-4.65-24.45-13.5l-2.1,10.65a1.76,1.76,0,0,1-1.65,1.35H529a1.05,1.05,0,0,1-1-1.35l12.15-51.14L551.64,302a1.76,1.76,0,0,1,1.65-1.35h20a1.05,1.05,0,0,1,1,1.35l-7.95,33a30.43,30.43,0,0,1,20.85-8.1c20.7,0,33.3,18.75,26.85,46.05C610,390.46,598.59,407.11,577,407.11Zm-5-15c9.6,0,16.05-7.2,19.35-21.75,4.35-18.59-1.5-28.49-12.9-28.49-9.6,0-16.2,7.2-19.5,21.3C554.64,382.21,560.79,392.11,572,392.11Z"
            />
          </a.g>
          <a.g fill="#000" stroke="#000" strokeLinecap="round">
            <AnimatePath
              strokeDashoffset={animateSvgText.e}
              strokeDasharray="564.82"
              d="M1.35,105A1.34,1.34,0,0,1,0,103.65L.75,52.5,0,1.35A1.34,1.34,0,0,1,1.35,0H38.4C68.55,0,94.05,16.2,94.05,53.25c0,37.2-25.8,51.75-55.35,51.75Zm21.9-17H39.9c17,0,30.6-10,30.6-34.95S57,17,39.3,17h-16c0,.15-.6,17.7-.6,35.1C22.65,69.9,23.25,87.9,23.25,88.05Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e2}
              strokeDasharray="458.85"
              d="M173.4,78.9a1.15,1.15,0,0,1,1.2,1.35c-1.95,14.1-15.45,26.7-37,26.7C111.75,107,97.8,90,97.8,66.6c0-24.6,14.7-40.8,39.3-40.8,25.35,0,39.45,16.8,39.9,43.8A1.34,1.34,0,0,1,175.65,71h-55.2c.9,14.55,6.6,21,17.4,21,7.5,0,12.9-3.45,15-11.7a1.76,1.76,0,0,1,1.65-1.35ZM137.25,40.65c-9,0-14.4,5.4-16.2,16.05H152.7C151.8,48.45,147.15,40.65,137.25,40.65Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e3}
              strokeDasharray="455.05"
              d="M216.45,106.8c-22.5,0-36.9-9.15-37.65-26.4a1.34,1.34,0,0,1,1.35-1.35h19.2a1.34,1.34,0,0,1,1.35,1.35c.6,8.7,6.3,12.45,16.8,12.45,8.85,0,13.65-3.45,13.65-9.45,0-14.7-50.55-.45-50.55-32.85,0-16,12.9-24.6,33.75-24.6,20.25,0,33.9,8.1,35.25,24.3a1.15,1.15,0,0,1-1.2,1.35H230.1a1.6,1.6,0,0,1-1.5-1.35c-1.2-6.6-5.4-10.65-14.55-10.65-7.35,0-12,2.7-12,9.3,0,14.7,50.55-.3,50.55,32.55C252.6,97.65,237.3,106.8,216.45,106.8Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e4}
              strokeDasharray="281.96"
              d="M259.8,20.25a1.34,1.34,0,0,1-1.35-1.35V1.35A1.34,1.34,0,0,1,259.8,0h20.1a1.34,1.34,0,0,1,1.35,1.35V18.9a1.34,1.34,0,0,1-1.35,1.35Zm0,84.75a1.34,1.34,0,0,1-1.35-1.35l.45-37.2-.45-37.35a1.34,1.34,0,0,1,1.35-1.35h20.25a1.34,1.34,0,0,1,1.35,1.35L281,66.45l.45,37.2a1.34,1.34,0,0,1-1.35,1.35Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e5}
              strokeDasharray="592.8"
              d="M327,135c-20.25.29-35.7-8-36.9-24.9a1.34,1.34,0,0,1,1.35-1.35H310.8a1.63,1.63,0,0,1,1.65,1.35c1.05,6.3,6.15,10.05,15.3,10.05,9.75,0,16.5-5.4,16.5-17.55V93.75c-5.1,6.75-12.6,10.8-22.2,10.8-22.95,0-34.95-17-34.95-38.7,0-21.6,12.9-39.15,33.9-39.15,9.6,0,17.1,3.3,22.35,9.45l-.45-7a1.34,1.34,0,0,1,1.35-1.35h19.8a1.34,1.34,0,0,1,1.35,1.35l-.3,38.4.15,35.4C365.25,122.4,352.5,135,327,135Zm-.15-45.15c10.95,0,16.8-7.8,16.95-23.4.15-16.05-5.7-24.9-16.5-25.05-11.4-.3-17.25,8.1-17.25,23.55C310.05,81.6,316.05,90,326.85,89.85Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e6}
              strokeDasharray="414.5"
              d="M374,105a1.34,1.34,0,0,1-1.35-1.35l.45-35.7L372.9,29.1a1.34,1.34,0,0,1,1.35-1.35H393.3a1.34,1.34,0,0,1,1.35,1.35l-.45,8.4C399.45,30.75,408.3,26,419.1,26,435.45,26,446,37.05,446,56v16.2l.45,31.5a1.34,1.34,0,0,1-1.35,1.35H425a1.34,1.34,0,0,1-1.35-1.35l.3-31.5V56.25c0-8.4-4.95-13.8-11.7-13.8-8.1,0-16.8,7.5-16.8,24v5.7l.3,31.5a1.34,1.34,0,0,1-1.35,1.35Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e6}
              strokeDasharray="458.8"
              d="M526.49,78.9a1.14,1.14,0,0,1,1.2,1.35c-2,14.1-15.44,26.7-37,26.7-25.8,0-39.75-17-39.75-40.35,0-24.6,14.7-40.8,39.3-40.8,25.35,0,39.45,16.8,39.9,43.8A1.35,1.35,0,0,1,528.74,71H473.55c.9,14.55,6.6,21,17.4,21,7.5,0,12.9-3.45,15-11.7a1.76,1.76,0,0,1,1.65-1.35ZM490.35,40.65c-9,0-14.4,5.4-16.2,16.05H505.8C504.9,48.45,500.25,40.65,490.35,40.65Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.e6}
              strokeDasharray="499.26"
              d="M590.69,105a1.34,1.34,0,0,1-1.34-1.35L589.8,96c-5.4,6.6-13,10.5-22.8,10.5-21.9,0-33.45-17.4-33.45-39.9,0-22.35,12.9-40.35,33.9-40.35,9.45,0,16.95,3.3,22.2,9.6l-.15-34.5A1.34,1.34,0,0,1,590.85,0h19.94a1.34,1.34,0,0,1,1.35,1.35l-.3,51.15.3,51.15a1.34,1.34,0,0,1-1.35,1.35ZM573.3,91.65c11,0,16.8-8.25,17-24.6.15-16.65-5.7-25.8-16.5-25.95-11.4-.3-17.25,8.4-17.25,24.45C556.5,83,562.5,91.8,573.3,91.65Z"
            />
          </a.g>
          <a.g
            transform={animateSvgText.slide1Y}
            fill="#718096"
            stroke="#718096"
          >
            <path d="M690.87,104.94a2.46,2.46,0,0,1-1.58-.73l-3.46-4.31a36.65,36.65,0,0,1-21.1,6.41c-14.18,0-26.88-7.25-26.88-21.32,0-11.55,8.4-17.95,17.43-22.78-4.2-5.36-7.56-10.92-7.56-16.7,0-9,8.19-16.06,21.84-16.06,11.34,0,20.36,5.67,20.57,16.06,0,8.82-7.35,13.76-15.43,18.17,2.52,2.83,5.36,6.3,8.71,10.39L687,78.38a42.9,42.9,0,0,0,2.21-10.19,1.11,1.11,0,0,1,1-.94h12.7a.85.85,0,0,1,.84.94A52,52,0,0,1,696,89.51l12,14.7a.41.41,0,0,1-.31.73ZM666,95.6a19.18,19.18,0,0,0,12.7-4.73l-13.44-16.8c-.94-1.15-1.89-2.31-2.94-3.46-5.14,3.46-8.92,7.56-8.92,13.54C653.39,92.24,658.64,95.6,666,95.6Zm-3.47-49.77c0,2.62,1.58,5.14,5.46,9.87,5.36-2.84,9.14-5.78,9.14-10.08,0-4.52-2.84-7-7.56-7C665.36,38.58,662.52,41,662.52,45.83Z" />
          </a.g>

          <a.g fill="#000" stroke="#000" strokeLinecap="round">
            <AnimatePath
              strokeDashoffset={animateSvgText.f}
              strokeDasharray="564.81"
              d="M1.4,255.24a1.34,1.34,0,0,1-1.35-1.35L.8,202.74.05,151.59a1.34,1.34,0,0,1,1.35-1.35h37c30.15,0,55.65,16.2,55.65,53.25s-25.8,51.75-55.35,51.75Zm21.89-17H39.94c17,0,30.6-10,30.6-34.95S57,167.19,39.34,167.19H23.29c0,.15-.59,17.7-.59,35.1C22.7,220.14,23.29,238.14,23.29,238.29Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f2}
              strokeDasharray="458.76"
              d="M173.44,229.14a1.15,1.15,0,0,1,1.2,1.35c-1.95,14.1-15.45,26.7-37,26.7-25.79,0-39.74-16.95-39.74-40.35,0-24.6,14.7-40.8,39.29-40.8,25.35,0,39.45,16.8,39.9,43.8a1.34,1.34,0,0,1-1.35,1.35H120.5c.9,14.55,6.59,21,17.39,21,7.5,0,12.9-3.45,15-11.7a1.76,1.76,0,0,1,1.65-1.35Zm-36.15-38.25c-9,0-14.39,5.4-16.2,16.05h31.65C151.84,198.69,147.19,190.89,137.29,190.89Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f3}
              strokeDasharray="354.89"
              d="M226.24,254.19a2.22,2.22,0,0,1-1.8,1.2H200.59a2.22,2.22,0,0,1-1.8-1.2l-26.09-75c-.3-.6.15-1.2.9-1.2h21.59a2.1,2.1,0,0,1,1.8,1.35l16.5,57,18.15-57a2.1,2.1,0,0,1,1.8-1.35h18.45a.9.9,0,0,1,.9,1.2Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f4}
              strokeDasharray="458.8"
              d="M324.19,229.14a1.15,1.15,0,0,1,1.2,1.35c-1.95,14.1-15.45,26.7-37.05,26.7-25.8,0-39.75-16.95-39.75-40.35,0-24.6,14.7-40.8,39.3-40.8,25.35,0,39.45,16.8,39.9,43.8a1.34,1.34,0,0,1-1.35,1.35h-55.2c.9,14.55,6.6,21,17.4,21,7.5,0,12.9-3.45,15-11.7a1.76,1.76,0,0,1,1.65-1.35ZM288,190.89c-9,0-14.4,5.4-16.2,16.05h31.65C302.59,198.69,297.94,190.89,288,190.89Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f5}
              strokeDasharray="252.41"
              d="M335,255.24a1.34,1.34,0,0,1-1.35-1.35l.6-51.15-.6-51.15a1.34,1.34,0,0,1,1.35-1.35h19.65a1.34,1.34,0,0,1,1.35,1.35l-.6,51.15.6,51.15a1.34,1.34,0,0,1-1.35,1.35Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f6}
              strokeDasharray="395.49"
              d="M401.74,257.19c-25.2,0-39.75-15.75-39.75-40.35S376.54,176,401.74,176s39.45,15.75,39.45,40.35S426.94,257.19,401.74,257.19Zm0-15c11.1,0,16.35-7.65,16.35-25.35,0-17.4-5.4-25.8-16.5-25.8-11.4.15-16.65,8.55-16.65,26S390.49,242.19,401.74,242.19Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f7}
              strokeDasharray="493.25"
              d="M491.29,256.74c-9.3,0-16.8-3.3-22.05-9.45l.3,32.1a1.34,1.34,0,0,1-1.35,1.35H447.94a1.34,1.34,0,0,1-1.35-1.35l.45-55.5-.45-44.55a1.34,1.34,0,0,1,1.35-1.35H468a1.34,1.34,0,0,1,1.35,1.35l-.45,7.65c5.4-6.6,13.05-10.5,22.8-10.5,21.9,0,33.45,17.4,33.45,39.9S512.29,256.74,491.29,256.74ZM485,241.59c11.4,0,17.25-8.25,17.25-24,0-17.1-5.85-25.8-16.8-25.8s-16.8,8.25-16.95,24.3C468.34,232.44,474.19,241.59,485,241.59Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f8}
              strokeDasharray="458.78"
              d="M604.39,229.14a1.15,1.15,0,0,1,1.2,1.35c-2,14.1-15.45,26.7-37.05,26.7-25.8,0-39.75-16.95-39.75-40.35,0-24.6,14.7-40.8,39.3-40.8,25.35,0,39.45,16.8,39.9,43.8a1.34,1.34,0,0,1-1.35,1.35h-55.2c.9,14.55,6.6,21,17.4,21,7.5,0,12.9-3.45,15-11.7a1.76,1.76,0,0,1,1.65-1.35Zm-36.15-38.25c-9,0-14.4,5.4-16.2,16.05h31.65C582.79,198.69,578.14,190.89,568.24,190.89Z"
            />
            <AnimatePath
              strokeDashoffset={animateSvgText.f9}
              strokeDasharray="499.32"
              d="M668.59,255.24a1.34,1.34,0,0,1-1.35-1.35l.45-7.65c-5.4,6.6-13.05,10.5-22.8,10.5-21.9,0-33.45-17.4-33.45-39.9,0-22.35,12.9-40.35,33.9-40.35,9.45,0,16.95,3.3,22.2,9.6l-.15-34.5a1.34,1.34,0,0,1,1.35-1.35h20a1.34,1.34,0,0,1,1.34,1.35l-.3,51.15.3,51.15a1.34,1.34,0,0,1-1.34,1.35Zm-17.4-13.35c10.95,0,16.8-8.25,16.95-24.6.15-16.65-5.7-25.8-16.5-25.95-11.4-.3-17.25,8.4-17.25,24.45C634.39,233.19,640.39,242,651.19,241.89Z"
            />
          </a.g>
        </a.g>
      </svg> */}
      {/* </div> */}
    </header>
  )
}
export default HeroSection
