import React from 'react';
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-danger">
       <Link className="navbar-brand text-white" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
             <Link className="nav-link text-white" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item text-white">
             <Link className="nav-link text-white" to="/about">About</Link>
            </li>
          </ul>
          {props.searchbar ?<form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>:"Noob admi search bar ni hai"}
        </div>
      </nav>    )
}

// Default props in react
Header.defaultProps={
title:"Neon man is noob",
searchbar:true
}

// to check the prop types
Header.propTypes={
title:PropTypes.string,
searchbar:PropTypes.bool.isRequired,
}