import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header className="text-white flex flex-col p-4 relative text-center bg-primary-900 lg:fixed lg:text-right lg:min-h-screen lg:w-[35%]">
    <div>
      <StaticImage
        src="../images/profile-image.jpg"
        loading="eager"
        alt="Profile Image"
        placeholder="blurred"
        width={250}
        height={250}
        className="rounded-md rotate-[-3deg] after:content-['Todd'] after:font-serif after:text-sm"
      />
    </div>
    <h1 className="text-3xl">Todd Rizzolo</h1>
    <h2 className="text-2xl text-primary-100">
      {" "}
      Half Stack Developer. Front-End Coder.
      <br />
      UX. User Interface Builder.
    </h2>
    <h4>
      <i aria-hidden className="fas fa-map-pin"></i> Salt Lake City, Utah
    </h4>
    <p className="text-xs">© {new Date().getFullYear()}</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
