import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from "./Header"
import CookieConsent from "react-cookie-consent";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  
// Initialise the Animations for fade up and in
useEffect(() => {
  AOS.init();
}, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>

      </div>
      <CookieConsent
        acceptOnScroll={true}
        acceptOnScrollPercentage={15}
      >
        This website uses cookies to anonymously enhance the user experience.
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
