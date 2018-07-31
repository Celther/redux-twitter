import React from "react";
import { NavLink } from 'react-router-dom'

import PidgeonLogo from '../media/Pidgeon.png'

export default function Nav(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Timeline
          </NavLink>
        </li>
        <div>
          <img src={PidgeonLogo} alt="Not quite Twitter Logo" />
          <div className="nav-title">
            <span><b>N</b>ot</span>
            <span><b>Q</b>uite</span>
            <span><b>T</b>witter</span>
          </div>
        </div>
        <li>
          <NavLink to="/new" activeClassName="active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
