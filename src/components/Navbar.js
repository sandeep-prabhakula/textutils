import React from 'react'
import PropTypes from 'prop-types'
import DarkSwitch from './DarkSwitch'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    // props are read only should not override
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item mx-2">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li> */}
          </ul>
          <DarkSwitch mode={props.mode} toggleMode={props.toggleMode}/>
        </div>
      </div>
    </nav>
  )
}

//types of the properties
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
}

// default values of the properties
Navbar.defaultProps = {
  title: "something",
  aboutText: "about something",
  mode: "light"
}