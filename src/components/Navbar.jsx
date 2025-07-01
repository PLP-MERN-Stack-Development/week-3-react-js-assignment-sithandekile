import { useContext }from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/theme';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar() { 
   const { darkMode, setDarkMode } = useContext(ThemeContext)
   const toggleThemeMode=()=>{
    setDarkMode(!darkMode)
   }
  return (
    <header className="bg-white text-sky-950 shadow-lg flex items-center justify-between sticky top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 n lg:px-8 lg:flex justify-betwee">
          <h1 className="text-3xl font-bold">TTM</h1>
          <div className="flex justify-between items-center">
          <ul className ="flex space-x-4 p-4 text-sky-950">
           <Link to ='/'> <li>Home</li></Link>
            {/* <Link to ='/login'><li>Login</li></Link>
           <Link to ='/signup'><li>Signup</li></Link> */}
          </ul>
          {/* button for the the theme switcher */} 
        <button onClick={toggleThemeMode} className='bg-orange-700 w-5 h-5 rounded-full'>
          {darkMode ? <IoSunnyOutline />  : <IoMoonOutline />}
        </button>
        </div>
        </div>
    </header>
  )
}


