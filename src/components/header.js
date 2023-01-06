import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => {
  const baseURL = "https://api.github.com"

  const fetchGithubData = async () =>
    await fetch(`${baseURL}/users/toddwebdev`)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err))

  React.useEffect(() => {
    fetchGithubData()
  }, [])
  return (
    <header className="flex flex-col justify-between p-10 relative text-center bg-hero-image bg-cover bg-no-repeat bg-scroll bg-[center_top_1rem] lg:fixed lg:text-right lg:min-h-screen lg:w-[35%]">
      <div className="mb-6">
        <StaticImage
          src="../images/profile-image.jpg"
          loading="eager"
          alt="Profile Image"
          placeholder="blurred"
          width={250}
          height={250}
          className="mb-10 rounded rotate-[-3deg] after:content-['Todd'] after:font-serif after:text-sm border-8 border-b-[64px] shadow-3xl"
        />
        <h1 className="mb-3 tracking-wide text-white">Todd Rizzolo</h1>
        <ul className="text-none list-inside text-base-50 text-2xl">
          <li>Half Stack Developer. </li>
          <li>Front-End Coder.</li>
          <li></li>
          <li>UX. User Interface Builder.</li>
        </ul>
        <h4 className="my-6 text-base-50">
          <i aria-hidden className="fas fa-map-pin"></i> Salt Lake City, Utah
        </h4>
      </div>
      <p className="text-base-100">© {new Date().getFullYear()}</p>
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
