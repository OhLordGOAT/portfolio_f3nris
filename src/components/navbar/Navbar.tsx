import { useState }  from 'react'
import './navbar.css'
import Logo from '../../../src/assets/logowbg.png'
import CV from "../../assets/CV1V4.png"

const Nav = () => {

    const [showLinks, setShowLinks] = useState(false)
    const [activeNav, setActiveNav] = useState("#about")

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`main_navbar ${showLinks ? "show_nav" : "hide_nav"}`}>
            <a href="#" className='logo-header'><img src={Logo} alt="about me"/></a>
            <ul className='navbar_links'>
                <li className='navbar_item slideInDown-1'>
                    <a href="#about" onClick={() => {setActiveNav('#about'); setShowLinks(false)}} className={`navbar_link ${activeNav === '#about' ? 'active' : ''}`}>A propos de moi</a>
                </li>
                <li className='navbar_item slideInDown-2'>
                    <a href="#skill" onClick={() => {setActiveNav('#skill'); setShowLinks(false)}} className={`navbar_link ${activeNav === '#skill' ? 'active' : ''}`}>Compétences</a>
                </li>
                <li className='navbar_item slideInDown-3'>
                    <a href="#experience" onClick={() => {setActiveNav('#experience'); setShowLinks(false)}} className={`navbar_link ${activeNav === '#experience' ? 'active' : ''}`}>Expériences</a>
                </li>
                <li className='navbar_item slideInDown-4'>
                    <a href="#project" onClick={() => {setActiveNav('#project'); setShowLinks(false)}} className={`navbar_link ${activeNav === '#project' ? 'active' : ''}`}>Projets</a>
                </li>
                <li className='navbar_item slideInDown-5'>
                    <a href="#contact" onClick={() => {setActiveNav('#contact'); setShowLinks(false)}} className={`navbar_link ${activeNav === '#contact' ? 'active' : ''}`}>Contact</a>
                </li>
            </ul>
            <a href={CV} download className="cv btn btn-primary">Mon CV</a>
            <button className='navbar_burger' onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>
    )
}
export default Nav