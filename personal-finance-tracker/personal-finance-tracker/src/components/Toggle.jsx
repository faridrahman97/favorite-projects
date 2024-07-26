import React from "react"

export default function Toggle({toggleDarkMode}) {
    return (
        <div className="container toggler">
            <p>Dark Mode</p>
            <label className="switch">
                <input type="checkbox" onChange={toggleDarkMode}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}