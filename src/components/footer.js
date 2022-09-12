import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="bg-chestnut-50 py-0">
    <div>
      <h2>chestnut</h2>
      <div class="h-8 bg-chestnut-50">bg-chestnut-50: Blanc</div>
      <div class="h-8 bg-chestnut-100">bg-chestnut-100: GB clair top</div>
      <div class="h-8 bg-chestnut-200">
        bg-chestnut-200: Personal - H1 sur fond dark
      </div>
      <div class="h-8 bg-chestnut-300">bg-chestnut-300: </div>
      <div class="h-8 bg-chestnut-400">bg-chestnut-400: P sur fond dark</div>
      <div class="h-8 bg-chestnut-500">bg-chestnut-500: Button</div>
      <div class="h-8 bg-chestnut-600">bg-chestnut-600: </div>
      <div class="h-8 bg-chestnut-700">bg-chestnut-700: P sur fond clair</div>
      <div class="h-8 bg-chestnut-800">bg-chestnut-800: H1 sur fond clair</div>
      <div class="h-8 bg-chestnut-900">bg-chestnut-900: Dark BG</div>
    </div>
    <div>
      <h2>gray</h2>
      <div class="h-8 bg-gray-200">bg-gray-200: Travel</div>
    </div>
    <div>
      <h2>cyan</h2>
      <div class="h-8 bg-cyan-100">bg-cyan-100: Meditation</div>
    </div>
    <div>
      <h2>beaver</h2>
      <div class="h-8 bg-beaver-100">bg-beaver-100: Work</div>
    </div>
    <div>
      © {new Date().getFullYear()} &middot; Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Horizon 2000</a>
    </div>
  </footer>
)

export default Footer
