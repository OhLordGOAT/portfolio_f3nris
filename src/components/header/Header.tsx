import "./header.css"
import Avatar from "../../assets/pdp/avataaar.svg"

const Header = () => {
    return (
        <header>
            <div className="container container_home">
                <div className="presentation">
                    <h5>Bonjour, je m'appelle</h5>
                    <h2>Guillaume HELG</h2>
                    <p className='desc'>Je suis un étudiant toulousain, qui poursuit ses études en tant que Miagiste,
                        plus spécialisé dans le développement d’applications.
                    </p>
                    <div className="button">
                        <a href="#contact" className="btn btn-primary">Me contacter</a>
                    </div>
                </div>
                <div className="avatar">
                    <div className="circle">
                        <img src={Avatar} alt="mon avatar"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header