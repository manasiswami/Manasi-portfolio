import { Link } from "react-router-dom"
import '../styles/navbar.css'
import {IoMoon, IoSunny} from 'react-icons/io5'
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react"
const Navbar = () => {

  const [darkMode, setDarkMode] = useState(()=>{
    return localStorage.getItem("theme") === "dark";
  })
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }else{
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
  },[darkMode])
  return (
    <nav className="navbar">
      <h2 className="logo">
        <span>Port</span>folio
      </h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}> 
        <li><Link to="/" onClick={()=>setMenuOpen(false)}>Home</Link></li>
        <li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>
        <li><a href="#education" onClick={()=>setMenuOpen(false)}>Education</a></li>
        <li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>
      </ul>
     <div className="btns">
       <button className="theme-btn"
          onClick={()=> setDarkMode(!darkMode)}
      >
        {darkMode ? <IoSunny className="color" />:<IoMoon className="color" />}
      </button>
      <button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes/>:<FaBars/>} </button>
     </div>
    </nav>
  )
}

export default Navbar
