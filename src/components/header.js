import React from "react"
import { Link } from "gatsby"

function Header() {
  return (
    <header>
      <h1>Philip Johnson</h1>
      <nav>
        <ul style={{ display: "flex" }}>
          <li style={{ margin: "10px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: "10px" }}>
            <Link to="/blog">Blog</Link>
          </li>
          <li style={{ margin: "10px" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ margin: "10px" }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
