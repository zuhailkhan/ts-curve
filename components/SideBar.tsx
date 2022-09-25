import React from 'react'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div>
        <h1>Discover more of what matters to you!</h1>
        <ul className="flex-el">
            <li>Artificial Intelligence</li>
            <li>Self</li>
            <li>Data Science</li>
            <li>Programming</li>
            <li>Productivity</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Linux</li>
        </ul>

        <hr className="my-5" />

        <ul className="flex-el">
            <li>Help</li>
            <li>Status</li>
            <li>Writers</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>About</li>
            <li>Knowable</li>
        </ul>
    </div>
  )
}

export default SideBar