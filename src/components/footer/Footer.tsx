import Logo from '../../../src/assets/logowbg.png'
import {FiLinkedin, FiDribbble, FiGithub} from "react-icons/fi"
import "./footer.css"

const currentYear = new Date().getFullYear()

const Footer = () => {
    return (
        <footer>
            <div className="links">
                <a href="#" className='logo'><img src={Logo} alt="" /></a>
                <a href="#about">A propos de moi</a>
                <a href="#experience">Expériences</a>
                <a href="#competences">Compétences</a>
                <a href="#contact">Contact</a>
                <a href="https://www.linkedin.com/in/guillaume-helg/"><FiLinkedin/></a>
                <a href="https://dribbble.com/Lorddragon"><FiDribbble/></a>
                <a href="https://github.com/GuillaumeHelg"><FiGithub/></a>
            </div>

            <a href="#contact" className='btn btn-primary btn_contact'>Me contacter</a>

            <div className="copyright">
                Copyright @{currentYear} by Guillaume HELG. All Rights Reserved
            </div>
        </footer>
    )
}
export default Footer

