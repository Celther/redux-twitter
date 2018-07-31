import React from "react";
import { NavLink } from 'react-router-dom'


export default function Nav(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClass="active">
            Home
          </NavLink>
        </li>
        <div>
          <div className="nav-title">
            <span><b>N</b>ot</span>
            <span><b>Q</b>uite</span>
            <span><b>T</b>witter</span>
          </div>
        </div>
        <li>
          <NavLink to="/new" activeClass="active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
