import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import History from "../components/sections/history"
import Accompagnement from "../components/sections/accompagnement"
import Ambitions from "../components/sections/ambitions"
import Contact from "../components/sections/contact"
import Engagements from "../components/sections/engagements"
import Equipments from "../components/sections/equipments"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <History />
    <Engagements />
    <Equipments />
    <Accompagnement />
    <Ambitions />
    <Contact />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Horizon 2000" />

export default IndexPage
