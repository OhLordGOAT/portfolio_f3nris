import "./contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'
import { RiTelegramLine } from 'react-icons/ri'

const Contact = () => {
	return (
		<section id="contact">
			<h5>--- Prenons contact ---</h5>
			<h2>Me contacter</h2>
			<div className="container contact_container">
				<div className="contact_options">
					<article className="contact_option">
						<MdOutlineEmail />
						<h4>Email</h4>
						<h5>guillaume.helg@gmail.com</h5>
						<a href="mailto:guillaume.helg@gmail.com" target="_blank" rel="noopener noreferrer">Envoyer un mail</a>
					</article>

					<article className="contact_option">
						<GoLocation />
						<h4>Adresse</h4>
						<h5>12340 Bozouls, Aveyron, France</h5>
						<a href="https://www.google.fr/maps/place/Canyon+dit+%22Trou+de+Bozouls%22/@44.4664204,2.7163995,14.6z/data=!4m13!1m7!3m6!1s0x12b28c373d1e7625:0x406f69c2f431680!2s12340+Bozouls!3b1!8m2!3d44.4698319!4d2.720333!3m4!1s0x0:0xee1d325cc77bbee8!8m2!3d44.470092!4d2.7196176" target="_blank" rel="noopener noreferrer">Voir la localisation</a>
					</article>

					<article className="contact_option">
						<RiTelegramLine />
						<h4>Telegram</h4>
						<h5>guillaume.helg@gmail.com</h5>
						<a href="https://t.me/OhLordGOAT" target="_blank" rel="noopener noreferrer">Envoyer un message</a>
					</article>

				</div>
			</div>
		</section>
	)
}

export default Contact