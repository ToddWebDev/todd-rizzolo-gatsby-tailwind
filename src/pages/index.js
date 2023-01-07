import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import OverviewSection from "../components/overviewSection"

const IndexPage = () => (
  <div id="top">
    <Layout>
      <div className="p-10 lg:ml-[35%] max-w-3xl space-y-14">
        <OverviewSection />
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
