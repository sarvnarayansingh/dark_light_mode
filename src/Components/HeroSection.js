import React, {useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'
import ColorTheme from '../colorTheme'

const HeroSection = () => {
    const theme =useContext(ThemeContext)[0]
    const currentTheme = ColorTheme[theme]

    return(
        <div style={{
            padding: "1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            textAlign:'center'
        }}>
            <h1>Context Api theme toggler</h1>
            <p>this is nice</p>
            <button style={{
                backgroundColor:"#26ae60",
                padding: "10px 150px",
                fontSize:'20px',
                color:"#FFF",
                border:`${currentTheme.border}`
            }}>Click me</button>
        </div>
    )
}
export default HeroSection