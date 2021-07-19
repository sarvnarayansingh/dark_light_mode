import React from 'react'
import ThemeToggler from '../Components/ThemeToggler'

const Header = () => {
    return (
        <header style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}}>
            <h1>Night Mode</h1>
            <ThemeToggler />
        </header>
    )
}

export default Header
