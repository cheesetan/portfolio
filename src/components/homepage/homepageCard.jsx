import React from "react";

import Card from "../common/card";

import "./styles/homepageCard.css";

const HomepageCard = (props) => {
	const { title, icon, data } = props;
	return (
		<div className="works">
			<Card
				icon={icon}
				title={title}
				body={
					<div className="works-body">
						{data.map((experience, index) => (
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
									{experience.subtitle}
								</div>
								<div className="work-duration">
									{experience.timeline}
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default HomepageCard;
