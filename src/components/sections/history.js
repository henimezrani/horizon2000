import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const History = () => (
  <section id="notre-histoire" className="py-0 bg-chestnut-50">
    <div className="w-full pb-0">
      <div className="relative">
        <StaticImage
          src="https://arp-paris.com/wp-content/uploads/2020/09/IMG_8597-Dark-1200x800.jpg"
          loading="eager"
          className="w-full h-96 object-cover"
          imgClassName="w-full h-96 object-cover"
          quality={100}
          alt="Horizon2000"
        />
        <div className="absolute text-2xl md:text-3xl lg:text-4xl text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-title tracking-widest leading-10">
            Produisez votre projet textile sans minimum de quantité, produits en
            Tunisie et avec un accompagnement personnalisé
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center mx-8 lg:mx-auto">
        <div className="max-w-5xl pt-24">
          <h2 className="text-3xl md:text-5xl py-8 font-title italic">
            Notre Histoire
          </h2>
          <p className="text-xl md:text-2xl font-body font-extralight tracking-wider py-2">
            L’histoire des ateliers <b>Horizon 2000</b> à commencer en 1988,
            lorsque deux frères passionnés par la confection de prêt à porter
            ont décidé de se lancer dans une aventure qui continue jusqu’à
            aujourd’hui.
          </p>
          <p className="text-xl md:text-2xl font-body font-extralight tracking-wider py-2">
            Depuis plus de 35 ans les ateliers Horizon ont collaboré avec les
            plus grands acteurs du monde pour Hommes, Femmes et Enfants. Cela a
            permis à nos équipes d’acquérir un savoir-faire unique et donc de
            proposer une palette de services riche et variée.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default History
