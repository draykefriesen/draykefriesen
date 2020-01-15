import React, { useRef } from "react"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import InfoSection from "../components/info-section/InfoSection"
import About from "../components/about/about"
import YoutubeVideoSection from "../components/youtube-videos-section/YoutubeVideosSection"
import Contact from "../components/contact/Contact"
import SEO from "../components/seo"

const IndexPage = () => {
  const aboutRef = useRef()
  const videoRef = useRef()
  const contactRef = useRef()

  const handleScroll = datatype => {
    if (datatype === "aboutLink") {
      aboutRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "videoLink") {
      videoRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "contactLink") {
      contactRef.current.scrollIntoView({ block: "end", behavior: "smooth" })
    }
  }

  return (
    <Layout scroll={handleScroll}>
      <SEO title="Home" />
      <Hero />
      <InfoSection scroll={handleScroll} />
      <About aboutSectionRef={aboutRef} />
      <YoutubeVideoSection videoSectionRef={videoRef} />
      <Contact contactCardRef={contactRef} />
    </Layout>
  )
}

export default IndexPage
