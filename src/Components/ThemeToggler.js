import React,{useContext} from 'react'
import ThemeContext from '../Context/ThemeContext'

const ThemeToggler = () => {
    const [themeMode,setThemeMode] = useContext(ThemeContext)
    return(
        <div
        onClick = { () => {
            setThemeMode(themeMode === 'light'? 'dark' :'light')
        }}>
            <span>{themeMode === 'light'? 
            <button>Turn OFF</button> : 
            <button>TURN ON</button>}</span>
        </div>
    )
}
export default ThemeToggler;