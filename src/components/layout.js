/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="p-4 lg:ml-[35%] bg-primary-700 text-white">
        <p>
          This site is built with the Jamstack. The Jam in Jamstack stands for
          JavaScript, APIs, and HTML markup. Gatsby JS generates these files
          during the build process and Netlify provides continuous deployments
          triggered by Git. This site is blazing fast and secure. Yeah, it's
          pretty awesome.
        </p>
        <a href="#">View Site Performance</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
