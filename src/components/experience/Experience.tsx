import { useState } from 'react'
import "./experience.css"
import { FiMapPin, FiCheckCircle, FiExternalLink } from "react-icons/fi"
import { experiences } from '../../content/exp2.tsx'
import { schools } from '../../content/exp2.tsx'

interface Experience {
    title: string;
    company: string;
    lieu: string;
    tasks: string[];
    technos: string[];
    content: string;
    date: string;
    lien: string;
    logo: string;
  }

function Accordion({title, company, lieu, tasks, technos, content, date, lien, logo} : Experience ) {
    const [active, setActive] = useState(false)
  
    const handleToggle = () => {
      setActive(!(active))
    }

    return (
      <div className={`accordion ${active && "active"}`}>
        <div className="accordion__title" onClick={handleToggle}>
            {title} @{company}<span className='accordion__date'>{date}</span><span className="accordion__icon"></span>
        </div>
        <div className="accordion__content accordion-content">
            <div className='accordion-content-item'>
                <div className="accordion-description">
                    <div className="accordion-company-contact">
                        <ul className='accordion-infos-comp'>
                            <li className='accordion-info-comp'><FiMapPin/>{lieu}</li>
                            <li className='accordion-info-comp'><FiExternalLink/><a href={lien} target="_blank" rel="noreferrer">{company}</a></li>
                        </ul>
                    </div>
                    <div className="resume">
                        {content}
                    </div>
                    <div className='content_tasks'>
                        <ul>
                            {tasks.map(task => (
                                <li className='case'><FiCheckCircle/>{task}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='technologies'>
                        {technos.map(techno => (
                            <span key={techno} className="technologie">{techno}</span>
                        ))}
                    </div>
                </div>
                <div className="accordion-content-logo">
                    <div className='logo_frame'>
                        <img src={logo} alt={`logo ${title}`} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

const Experience = () => {
    return (
        <section id="experience" className='container'>
            <h5>--- Mon vécu d'informaticien ---</h5>
            <h2>Mes expériences</h2>

            <div className='container container-experience'>
                <div className='accordion_container'>
                    {experiences.map(experience => (
                        <Accordion 
                            title={experience.title}
                            company={experience.name}
                            date={experience.date}
                            lieu={experience.lieu}
                            content={experience.resume}
                            tasks={experience.point}
                            technos={experience.technologie}
                            lien={experience.lien}
                            logo={experience.logo}
                        />
                    ))}
                </div>


                <div className='accordion_container'>
                    {schools.map(school => (
                        <Accordion 
                            title={school.title}
                            company={school.name}
                            date={school.date}
                            lieu={school.lieu}
                            content={school.resume}
                            tasks={school.point}
                            technos={school.technologie}
                            lien={school.lien}
                            logo={school.logo}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Experience

