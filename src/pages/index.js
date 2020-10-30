import React, { useRef } from "react"
import Layout from "../components/layout"
import Hero from "../components/hero/hero"
import InfoSection from "../components/info-section/InfoSection"
import Projects from "../components/projects/Projects"
import IllustrationShowcase from "../components/illustration-showcase/IllustrationShowcase"
import Skills from "../components/skills/Skills"
import Contact from "../components/contact/Contact"
import SEO from "../components/seo"

const IndexPage = () => {
  const aboutRef = useRef()
  const pricingRef = useRef()
  const projectsRef = useRef()
  const illustrationShowcaseRef = useRef()
  const skillsRef = useRef()
  const contactRef = useRef()

  const handleScroll = datatype => {
    if (datatype === "aboutLink") {
      aboutRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "pricingLink") {
      pricingRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "projectsLink") {
      projectsRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "illustrationLink") {
      illustrationShowcaseRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      })
    }
    if (datatype === "skillsLink") {
      skillsRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
    if (datatype === "contactLink") {
      contactRef.current.scrollIntoView({ block: "start", behavior: "smooth" })
    }
  }

  return (
    <Layout scroll={handleScroll}>
      <SEO title="Home" />
      <Hero />
      <InfoSection
        scroll={handleScroll}
        aboutRef={aboutRef}
        pricingRef={pricingRef}
      />
      <Projects projectsSectionRef={projectsRef} />
      <IllustrationShowcase illustrationShowcaseRef={illustrationShowcaseRef} />
      <Skills skillsSectionRef={skillsRef} />
      <Contact contactCardRef={contactRef} />
    </Layout>
  )
}

export default IndexPage
