import React from "react"
import {NavLink} from "react-router-dom"
import { GiMoneyStack } from "react-icons/gi";

export default function Header({toggleDarkMode}) {
    return (
        <header>
            <nav className="nav container">
                <div className="application-title container">
                    <GiMoneyStack className="money-icon"/> 
                    <h2 className="application-heading">Cash Out</h2>
                </div>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink className="link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to="/settings">Settings</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="link" to="/signup">Sign Up</NavLink>
                        </li>

                    </ul>
                    {/* I'm using nav link here insted of link because I want to use active */}
                </div>
            </nav>
        </header>
    )
}

