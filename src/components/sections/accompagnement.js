import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Accompagnement = () => (
  <section id="accompagnement" className="py-8">
    <div className="">
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
    </div>
  </section>
)

export default Accompagnement
