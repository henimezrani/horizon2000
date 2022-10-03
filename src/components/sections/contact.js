import * as React from "react"
import IconSuccess from "../icons/icon-success"
import IconFailed from "../icons/icon-failed"
import IconPin from "../icons/icon-pin"
import IconEmail from "../icons/icon-email"
import IconPhone from "../icons/icon-phone"
import axios from "axios"

const Contact = () => {
  const [formSuccess, setFormSuccess] = React.useState(false)

  // determined if page has scrolled and if the view is on mobile
  const [formError, setFormError] = React.useState(false)

  const [values, setValues] = React.useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  })

  const sendMail = event => {
    event.preventDefault()
    console.log(values)
    axios
      .post("http://localhost:3030/send", values)
      .then(() => {
        setFormSuccess(true)
        console.log("sent")
      })
      .catch(() => {
        setFormSuccess(false)
        console.log("error")
      })
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
          <div className="max-w-5xl">
            <h2 className="text-3xl md:text-5xl py-8 font-title italic w-full">
              Contact
            </h2>
            <div className="flex text-xl md:text-2xl font-body font-extralight tracking-wider py-2">
              Depuis plus de 35 ans les ateliers Horizon ont collaboré avec les
              plus grands acteurs du monde pour Hommes, Femmes et Enfants. Cela
              a permis à nos équipes d’acquérir un savoir-faire unique et donc
              de proposer une palette de services riche et variée.
            </div>
            <div className="flex flex-col md:flex-row mb-3 w-full text-xl md:text-2xl font-body font-extralight tracking-wider py-2">
              <div className="md:pr-3 w-full md:w-1/2">
                <h3 className="text-xl md:text-3xl py-8 font-title italic w-full">
                  Notre adresse
                </h3>
                <iframe
                  className="h-80 w-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12776.695513038529!2d10.1742005!3d36.8143531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56e13bcccb5d8c35!2sHorizon%202000!5e0!3m2!1sen!2stn!4v1663455462942!5m2!1sen!2stn"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex flex-col md:pl-3 w-full md:w-1/2 h-auto">
                <h3 className="text-xl md:text-3xl py-8 font-title italic w-full">
                  Nous contacter
                </h3>
                <div className="h-full grid grid-cols-1 content-between md:py-8">
                  <div className="flex justify-between py-2">
                    <span className="flex items-center justify-center w-1/5">
                      <IconPin />
                    </span>
                    <p className="flex content-center w-4/5">
                      103 rue Aboubaker Essedik, 2040, Tunis, Tunisie
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="flex items-center justify-center w-1/5">
                      <IconEmail />
                    </span>
                    <p className="flex content-center w-4/5">
                      henimezrani@gmail.com
                    </p>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="flex items-center justify-center w-1/5">
                      <IconPhone />
                    </span>
                    <p className="flex content-center w-4/5">+216 55 740 255</p>
                  </div>
                </div>
                {/* <div>
                  <h3>Adresse</h3>
                  <p></p>
                </div> */}
              </div>
            </div>
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
                        htmlFor="name"
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
                        htmlFor="name"
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
                        htmlFor="subject"
                      >
                        Objet
                      </label>
                      <input
                        className="border py-3 px-4 mb-3 text-gray-700 font-extralight tracking-wider text-xl focus:outline-none font-body w-full"
                        type="text"
                        name="subject"
                        id="subject"
                        value={values.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="flex mb-3">
                    <div className="w-full">
                      <label
                        className="uppercase font-body text-lg md:text-xl font-extralight tracking-wider"
                        htmlFor="message"
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
