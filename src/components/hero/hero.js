import React, { useEffect } from "react"
import { useSpring, animated as a, config } from "react-spring"
import heroStyles from "./hero.module.scss"

const HeroSection = () => {
  useEffect(() => {
    const timer = window.setInterval(lineAnimation, 2200)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

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

  const animateSvgText = useSpring({
    from: {
      a: "459",
      b: "377",
      c: "327",
      d: "858",
      e: "307",
      opacity: 0,
      strokeOpacity: 1,
      slide1Y: "-200",
      slide2X: "-500",
    },
    to: async next => {
      await next({
        a: "0",
        b: "0",
        c: "0",
        d: "0",
        e: "0",
        f: "0",
        slide1Y: "0",
        slide2X: "0",
      })
      await next({ strokeOpacity: 0, opacity: 1 })
    },
    delay: 200,
    config: config.slow,
  })

  const AnimatePath = a("path")

  return (
    <header className={heroStyles.heroSection}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className={heroStyles.svgShapes}
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 721 420"
        className={heroStyles.svgText}
        overflow="visible"
      >
        <a.text
          fontFamily="FormaDJRDisplay-Bold,Forma DJR Display"
          fontWeight="700"
          fontSize="150px"
          fill="#000"
          fillOpacity={animateSvgText.opacity}
          stroke="#000"
          strokeOpacity={animateSvgText.strokeOpacity}
          strokeLinecap="round"
          letterSpacing="0em"
          textRendering="geometricPrecision"
          overflow="visible"
        >
          <a.tspan
            strokeDashoffset={animateSvgText.a}
            strokeDasharray="459"
            overflow="visible"
          >
            Designed
          </a.tspan>

          <a.tspan
            x="648.89"
            y={animateSvgText.slide1Y}
            fontSize="105"
            fill="#718096"
            fillOpacity={animateSvgText.opacity}
            stroke="#718096"
          >
            &amp;
          </a.tspan>
          <a.tspan
            x="0"
            y="148"
            strokeDashoffset={animateSvgText.b}
            strokeDasharray="377"
          >
            Developed
          </a.tspan>
          <a.tspan
            x={animateSvgText.slide2X}
            y="296"
            fill="#718096"
            stroke="#718096"
            fontSize="105"
            strokeDashoffset={animateSvgText.c}
            strokeDasharray="327"
          >
            for the
          </a.tspan>
          <a.tspan
            x="331.91"
            y="296"
            fontFamily="FormaDJRDisplay-BoldItalic,Forma DJR Display"
            fontStyle="italic"
            fontSize="150"
            strokeDashoffset={animateSvgText.d}
            strokeDasharray="858"
          >
            Web
          </a.tspan>
        </a.text>
      </svg>
    </header>
  )
}
export default HeroSection
