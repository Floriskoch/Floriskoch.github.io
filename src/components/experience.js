import React from 'react'
import Link from 'gatsby-link'

const Experience = () => {
  return (
    <section className="content--medium experience">
      <h2>Experience</h2>

      <p>In my recent projects I've worked with following tech stack:</p>

      <ul>
        <li>Javascript (ES6, ReactJS)</li>
        <li>PHP (Laravel 4.2+, Zend)</li>
        <li>Build tools (Gulp, Webpack, NPM / Yarn)</li>
        <li>Content management (CraftCMS, OctoberCMS, Kirby, WordPress (Bedrock))</li>
        <li>Scrum (Jira, Trello)</li>
        <li>GIT (Git Flow, One Flow)</li>
        <li>Static site generators (GatsbyJS, Hugo)</li>
      </ul>

      <p>In the past I've also worked with tools and libraries such as jQuery and Angular 1.x. However, I prefer working with more modern ones such as mentioned above.</p>
      <p>If you'd like to know more about my technical skills please take a look at my <a href="https://www.linkedin.com/in/floriskoch" target="_blank" rel="nofollow noopener">LinkedIn</a> profile or check out <Link to="/projects">projects</Link> I've worked on.</p>
    </section>
  )
}

export default Experience
