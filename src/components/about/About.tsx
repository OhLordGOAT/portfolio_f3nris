import './about.css'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import Me1 from "../../assets/pdp/moi1.jpg"

const About = () => {
    return (
    <section id="about">
        <h5>--- Me connaitre ---</h5>
        <h2>A propos de moi</h2>
        <div className="container about_container">
            <div className="about_me">
                <div className="about_me-image">
                    <img src={Me1} alt="about me" />
                </div>
            </div>
        <div className="about_content">
            <div className="about_cards">
                <article className="about_card">
                    <FaAward className='about_icon'/>
                    <h5>Expérience</h5>
                    <small>2 ans d'expérience en informatique</small>
                </article>
                <article className="about_card">
                    <FiUsers className='about_icon'/>
                    <h5>Projets</h5>
                    <small>6 projets mené à bien</small>
                </article> 
                <article className="about_card">
                    <FaAward className='about_icon'/>
                    <h5>Etudes</h5>
                    <small>2ième année d'études après le bac</small>
                </article>
            </div>
            <p className='about_text'>
              Je m'appelle Guillaume HELG. J'ai 21 ans et j'étudie actuellement en 2ième année de Licence MIASHS au sein de l'université
              Paul Sabatier à Toulouse. Passionné d'informatique, j'aime réaliser des projets me permettant d'acquérir de nouvelles compétences
              et connaissances.
            </p>
            <a href="#contact" className='btn btn-primary'>Me contacter</a>
          </div>
            
       </div>
    </section>
  )
}

export default About