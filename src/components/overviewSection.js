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
      <blockquote className="text-base-900 dark:text-white">
        {readMore ? descriptionText : descriptionText.slice(0, 311) + "..."}
        <br />
        {!readMore && (
          <a href="#" onClick={e => handleClick(e)}>
            Read More
          </a>
        )}
      </blockquote>

      <h3>Toolbox</h3>
      <ul className="list-fill">
        <li>Javascript</li>
        <li>React</li>
        <li>AngularJS</li>
        <li>Webpack</li>
        <li className="list-fill"></li>
      </ul>
      <ul>
        <li>NextJS</li>
        <li>Gatsby</li>
        <li>GraphQL</li>
        <li>Accessibility</li>
        <li className="list-fill"></li>
      </ul>
      <ul>
        <li>User Interface Design</li>
        <li>UX</li>
        <li>Wireframes</li>
        <li>Prototyping</li>
        <li className="list-fill"></li>
      </ul>
    </section>
  )
}

export default Overview
