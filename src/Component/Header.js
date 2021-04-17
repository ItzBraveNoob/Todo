import React from 'react';
import PropTypes from 'prop-types'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-danger">
        <a className="navbar-brand text-white" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item text-white">
              <a className="nav-link text-white" href="#">About</a>
            </li>
          </ul>
          {props.searchbar ?<form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>:"Noob admi search bar ni hai"}
        </div>
      </nav>    )
}


Header.defaultProps={
title:"Neon man is noob",
searchbar:true
}

Header.propTypes={
title:PropTypes.string,
searchbar:PropTypes.bool.isRequired,
}