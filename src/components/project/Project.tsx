import "./project.css"
import { data } from '../../content/projects.tsx'

const Project = () => {
    return (
        <section id="project">
            <h5>--- Mes différents projets ---</h5>
            <h2>Portfolio</h2>
            <div className='container project-container'>
                {data.map((datas, id) => (
                    <>
                    <div key={id} className='project-card'>
                    <div className="project-thumb"><img src={datas.image} alt=""/></div>
                        <div className="project-infos">
                            <div className='tit'>
                                <h2 className='project-title'>{datas.title}</h2>
                                <span className='logo'><img src={datas.logo} alt="" /></span>
                            </div>
                            <h3 className='project-date'>{datas.date}</h3>
                            {datas.tech.map((techs) => (
                                <div className='techno'>
                                    <div className='bubble'><div className='project-tech'>{techs}</div></div>
                                </div>
                            ))} 
                            <p className='project-description'>{datas.description}</p>
                            <div className='project-links'><a href={datas.github} className="btn btn-primary">Gitlab</a></div>
                        </div>
                    </div>
                    </>
                ))} 
            </div>
        </section>
    )
}

export default Project