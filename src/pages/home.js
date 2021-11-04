import React from "react"
import Layout from "../components/layout/Layout"
import Seo from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import Linked from "../components/elements/Linked"

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        Content


        <StaticImage
          src={"../images/gatsby-icon.png"}
          alt="A dinosaur"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />


        <Linked linkTo="/some-page" >SOME TEXT</Linked>
        {/* Content goes here */}
      </Layout>
    </>
  )
}


export default IndexPage
