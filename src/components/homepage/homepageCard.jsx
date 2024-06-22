import React from "react";

import Card from "../common/card";

import "./styles/homepageCard.css";

const HomepageCard = (props) => {
	const { title, icon, data, links } = props;
	return (
		<div className="works">
			<Card
				icon={icon}
				title={title}
				body={
					<div className="works-body">
						{data.map((experience, index) => (
							<a href={experience.link}>
								<div className="work">
									<img
										src={experience.imgsrc}
										alt={experience.title}
										className="work-image"
									/>
									<div className="work-title">
										{experience.title}
									</div>
									<div className="work-subtitle">
										{experience.subtitle} | <span className="work-duration">{experience.timeline}</span>
									</div>
								</div>
							</a>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default HomepageCard;
