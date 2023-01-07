import React, { useState } from "react"

const Overview = () => {
  const [readMore, setReadMore] = useState(false)

  const descriptionText =
    "I'm a front-end software developer with a strong focus on javascript, user interface design and implementation. I help conceptualize, facilitate, design, prototype and build digital products. My experience includes writing functional, well thought-out and production-ready code, that is unit tested and meets the design requirements of detailed prototypes and mockups. I'm a self starter, a team player and have many years of experience working in a scrum and agile oriented system. I have strong communication skills, enjoy solving complex problems and most of all, I enjoy building great digital products."

  const handleClick = e => {
    e.preventDefault()
    setReadMore(true)
  }
  return (
    <section>
      <h2>Front-End Web Developer</h2>
      <blockquote className="relative text-base-900 dark:text-white p-2 m-0 text-lg">
        {readMore ? descriptionText : descriptionText.slice(0, 311) + "..."}
        <br />
        {!readMore && (
          <a href="#" onClick={e => handleClick(e)} className="text-lg">
            Read More
          </a>
        )}
      </blockquote>

      <h3>Toolbox</h3>
      <ul className="my-2 list-none flex flex-wrap content-center items-start space-x-2">
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Javascript
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          React
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          AngularJS
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Webpack
        </li>
        <li className="list-fill"></li>
      </ul>
      <ul className="my-2 list-none flex flex-wrap content-center items-start space-x-2">
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          NextJS
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Gatsby
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          GraphQL
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Accessibility
        </li>
        <li className="list-fill"></li>
      </ul>
      <ul className="my-2 list-none flex flex-wrap content-center items-start space-x-2">
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          User Interface Design
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          UX
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Wireframes
        </li>
        <li className="px-4 py-2 bg-base-500 rounded border border-base-300">
          Prototyping
        </li>
        <li className="list-fill"></li>
      </ul>
    </section>
  )
}

export default Overview
