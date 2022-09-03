import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const History = () => (
  <section id="notre-histoire" className="py-0">
    <div className="w-full pb-6">
      <div className="relative">
        <StaticImage
          src="https://arp-paris.com/wp-content/uploads/2020/09/IMG_8597-Dark-1200x800.jpg"
          loading="eager"
          className="w-full h-96 object-cover"
          imgClassName="w-full h-96 object-cover"
          quality={100}
          alt=""
        />
        <div className="absolute text-2xl md:text-3xl lg:text-4xl text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="">
            Welcome to <b>Gatsby!</b> Welcome to <b>Gatsby!</b> Welcome to{" "}
            <b>Gatsby!</b> Welcome to <b>Gatsby!</b> Welcome to <b>Gatsby!</b>{" "}
            Welcome to <b>Gatsby!</b> Welcome to <b>Gatsby!</b> Welcome to{" "}
            <b>Gatsby!</b>
          </h1>
        </div>
      </div>
      <div class="flex items-center justify-center mx-8 lg:mx-auto">
        <div class="max-w-5xl py-16" itemprop="articleBody">
          <h2 className="text-3xl py-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tortor nunc, elementum eu odio aliquam, auctor facilisis tellus. Sed
            elit magna, efficitur ac varius sit amet, dictum sit amet ante.
            Fusce dignissim, dolor non laoreet convallis, ligula mi lobortis
            lacus, ac porta nisi urna sed ipsum. Phasellus lobortis sed sem ut
            efficitur. Donec quis nibh vitae arcu pharetra auctor non a quam.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Maecenas sit amet urna ut nunc efficitur semper in quis ipsum.
            Mauris maximus placerat velit in consectetur. Mauris blandit turpis
            sed eleifend rutrum. Maecenas at tortor eget quam lobortis
            tincidunt. Suspendisse vel turpis turpis. Duis luctus ligula sit
            amet nunc ullamcorper pretium. Fusce eu nisl metus. Sed sed dolor a
            ligula sollicitudin rhoncus. Ut nec condimentum augue, eu rutrum
            ligula. Nullam luctus sit amet tortor congue fermentum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            tortor nunc, elementum eu odio aliquam, auctor facilisis tellus. Sed
            elit magna, efficitur ac varius sit amet, dictum sit amet ante.
            Fusce dignissim, dolor non laoreet convallis, ligula mi lobortis
            lacus, ac porta nisi urna sed ipsum. Phasellus lobortis sed sem ut
            efficitur. Donec quis nibh vitae arcu pharetra auctor non a quam.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Maecenas sit amet urna ut nunc efficitur semper in quis ipsum.
            Mauris maximus placerat velit in consectetur. Mauris blandit turpis
            sed eleifend rutrum. Maecenas at tortor eget quam lobortis
            tincidunt. Suspendisse vel turpis turpis. Duis luctus ligula sit
            amet nunc ullamcorper pretium. Fusce eu nisl metus. Sed sed dolor a
            ligula sollicitudin rhoncus. Ut nec condimentum augue, eu rutrum
            ligula. Nullam luctus sit amet tortor congue fermentum.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default History
