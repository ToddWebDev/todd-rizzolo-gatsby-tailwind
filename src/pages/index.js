import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div id="top">
    <Layout>
      <div className="p-4 lg:ml-[35%]">
        <h1>Main Content</h1>
        <section>
          <a href="#top">
            <i aria-hidden className="fas fa-angle-double-up"></i> Back to top
          </a>
        </section>
      </div>
    </Layout>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
