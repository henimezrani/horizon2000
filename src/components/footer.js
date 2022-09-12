import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="bg-chestnut-50 py-0">
    <div>
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Horizon 2000</a>
    </div>
  </footer>
)

export default Footer
