import React from "react";
import './nav.scss'
import{Link, NavLink} from "react-router-dom";
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/todo">Todo</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        )
    }
}
export default Nav;