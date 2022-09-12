import * as React from "react"
import IconSuccess from "../icons/icon-success"
import IconFailed from "../icons/icon-failed"

const Contact = () => {
  const [formSuccess, setFormSuccess] = React.useState(false)

  // determined if page has scrolled and if the view is on mobile
  const [formError, setFormError] = React.useState(false)

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const sendMail = event => {
    event.preventDefault()
    setFormError(false)
    setFormSuccess(false)
    const sent = true
    sent ? setFormSuccess(true) : setFormError(true)
  }

  const handleInputChange = event => {
    setValues(values => ({
      ...values,
      [event.target.id]: event.target.value,
    }))
  }

  return (
    <section id="contact" className="pt-24 py-0 bg-chestnut-50">
      <div className="w-full pb-0">
        <div className="flex items-center justify-center mx-8 lg:mx-auto">
          <div className="max-w-5xl" itemprop="articleBody">
            <h2 className="text-3xl md:text-5xl py-8 font-title italic">
              Contact
            </h2>
            <p className="text-xl md:text-2xl font-body font-extralight tracking-wider py-2">
              Depuis plus de 35 ans les ateliers Horizon ont collaboré avec les
              plus grands acteurs du monde pour Hommes, Femmes et Enfants. Cela
              a permis à nos équipes d’acquérir un savoir-faire unique et donc
              de proposer une palette de services riche et variée.
            </p>
            <div className="flex flex-col items-center my-8">
              {formSuccess ? (
                <div>
                  <div className="border p-5 bg-cyan-100 bg-opacity-20">
                    <div className="flex flex-row items-center w-full my-3">
                      <div className="text-green-500">
                        <IconSuccess />
                      </div>
                      <div className="text-sm text-lg md:text-xl font-extralight tracking-wider ml-3">
                        Votre message a été envoyé! Nous vous contactons
                        prochainement
                      </div>
                    </div>
                  </div>
                </div>
              ) : formError ? (
                <div>
                  <div className="border p-5 bg-chestnut-300 bg-opacity-20">
                    <div className="flex flex-row items-center w-full my-3">
                      <div className="text-red-500">
                        <IconFailed />
                      </div>
                      <div className="text-sm text-lg md:text-xl font-extralight tracking-wider ml-3">
                        Désolé, une erreur s'est produite. Veuillez réessayer!
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              <form className="w-full">
                <div className="w-full mx-auto justify-center flex-1 items-center">
                  <div className="flex flex-col md:flex-row mb-3">
                    <div className="md:pr-3 w-full md:w-1/2">
                      <label
                        className="uppercase font-body text-lg md:text-xl font-extralight tracking-wider"
                        for="name"
                      >
                        Nom
                      </label>
                      <input
                        className="border py-3 px-4 mb-3 text-gray-700 font-extralight tracking-wider text-xl focus:outline-none font-body w-full"
                        type="text"
                        name="name"
                        id="name"
                        value={values.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:pl-3 w-full md:w-1/2">
                      <label
                        className="uppercase font-body text-lg md:text-xl font-extralight tracking-wider"
                        for="name"
                      >
                        Email
                      </label>
                      <input
                        className="border py-3 px-4 mb-3 text-gray-700 font-extralight tracking-wider text-xl focus:outline-none font-body w-full"
                        type="email"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <div className="w-full">
                      <label
                        className="uppercase font-body text-lg md:text-xl font-extralight tracking-wider"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        className="border py-3 px-4 mb-3 text-gray-700 font-extralight tracking-wider text-xl focus:outline-none font-body w-full"
                        name="message"
                        id="message"
                        value={values.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <div className="w-full">
                      <button
                        className="w-full curstor-pointer px-4 py-2 border text-base text-lg md:text-xl font-extralight tracking-wider bg-chestnut-500 text-white hover:bg-chestnut-700 cursor-pointer"
                        onClick={sendMail}
                      >
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
