import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import IconMenu from "./icons/icon-menu"
import IconClose from "./icons/icon-close"
import scrollTo from "gatsby-plugin-smoothscroll"
import { StaticImage } from "gatsby-plugin-image"

const menuLinks = [
  { text: "Notre Histoire", url: "#notre-histoire" },
  { text: "Nos Engagements", url: "#nos-engagements" },
  { text: "Nos équipements", url: "#nos-equipements" },
  { text: "Accompagnement", url: "#accompagnement" },
  { text: "Nos ambitions", url: "#nos-ambitions" },
  { text: "Contact", url: "#contact" },
]

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false)

  // determined if page has scrolled and if the view is on mobile
  const [scrolled, setScrolled] = React.useState(false)

  // change state on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className="w-full" data-active={scrolled}>
      <div className={`bg-chestnut-100 ${scrolled ? "shadow-lg" : "py-4"}`}>
        {/* x-data="{ mobileMenuOpen: false}" */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-center items-center py-2 lg:justify-start lg:space-x-10">
            {/* Logo on the left */}
            <div className="flex justify-start lg:flex-1 truncate">
              <Link to="/">
                <div className="flex items-center justify-center">
                  <StaticImage
                    src="../images/horizon-900-sm.png"
                    loading="eager"
                    className="w-12 mx-2"
                    imgClassName="h-24 w-24 object-cover"
                    quality={100}
                  />
                  <h1 className="uppercase font-header text-3xl font-bold trucate text-chestnut-900 mx-2">
                    Horizon
                  </h1>
                </div>
              </Link>
            </div>
            {/* Mobile Menu if small screen */}
            <div className="-mr-2 -my-2 ml-3 lg:hidden">
              <button
                onClick={e => setNavOpen(true)}
                type="button"
                className="bg-chestnut-100 inline-flex p-2 intems-center justify-center focus:outline-none"
              >
                <IconMenu />
              </button>
            </div>
            {/* Nav Menu */}
            <nav className="hidden lg:flex space-x-10">
              {menuLinks.map((link, i) => (
                <React.Fragment key={link.url}>
                  <div className="text-sm text-chestnut-700 hover:text-chestnut-900">
                    {/* <Link to={link.url}>{link.text}</Link> */}
                    <button onClick={() => scrollTo(link.url)}>
                      <span className="font-couture uppercase">
                        {link.text}
                      </span>
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </nav>
            {/* Mobile Menu Container */}
            {navOpen ? (
              <div className="absolute z-10 top-0 inset-x-0 p-2 transform origin-top-left lg:hidden">
                <div className="shadow-lg rounded-lg ring-1 ring-black ring-opacity-5 bg-white w-full">
                  <div className="p-5 divide-y-2 divide-gray-50">
                    {/* Mobile Menu Header title + Close logo */}
                    <div className="flex items-center justify-between pb-3">
                      <div>
                        <h1 className="text-lg text-gray-500">Horizon 2000</h1>
                      </div>
                      <div className="-mr-2">
                        <button
                          onClick={e => setNavOpen(false)}
                          type="button"
                          className="bg-white rounded-lg p-2 text-gray-500"
                        >
                          <IconClose />
                        </button>
                      </div>
                    </div>
                    {/* Nav links for mobile menu */}
                    <div className="pt-3">
                      <nav className="grid gap-y-7">
                        {menuLinks.map((link, i) => (
                          <React.Fragment key={link.url}>
                            <div>
                              {/* <Link to={link.url}>{link.text}</Link> */}
                              <button onClick={() => scrollTo(link.url)}>
                                {link.text}
                              </button>
                            </div>
                          </React.Fragment>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
