import "./skill.css"
import {FiInfo} from "react-icons/fi"
import { categorie } from "../../content/skills"


function rate(i: number) {
	const rating : number[] = [5];
	let index = 0;
	while (index < 5) {
		if(index < i) {
			rating[index] = <span className='good_point'></span>
		} else {
			rating[index] = <span className='bad_point'></span>
		}
		index++;
	}
	return rating;
}

const Skill = () => {
	return (
		<section id="skill">
			<h5>--- Quelle est l'étendu de ---</h5>
			<h2>Mes compétences</h2>
			<div className='container'>
				<div className='information'>
					<FiInfo/>
					<p>Ces notes sont données en fonction du temps passé et de l'expérience gagnée sur ces technologies</p>
				</div>
				<div className="container-skill">
					{categorie.map((categories, index) => (
						<>
							<div className="categorie">
								<div key={index} className="title">{categories.name}</div>
								<div className="list">
									{categories.list.map((lists, index) => (
										<div key={index} className="item">
											<p className={`nom ${lists.rating >= 4 ? "list_top" : "list_bad"}`}>{lists.title}</p>
											<div className="progress_bar">
												{rate(lists.rating)}
											</div>
										</div>
									))}
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</section>
	);
}
export default Skill