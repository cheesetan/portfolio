import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";
import { getPathnameFromArticleTitle } from "../../data/articles";

const Experience = (props) => {
	const { experience } = props;

	return (
		<React.Fragment>
			<div className="experience-item">
				<Link to={String(getPathnameFromArticleTitle(experience))}>
					<div className="experience-item-container">
						<img src={experience.img} className="experience-item-img" alt="photo" />
						<div className="experience-item-title">{experience.title}</div>
						<div className="experience-item-country">
							{experience.country}
						</div>
						{/* <div className="experience-item-description">
							{experience.description}
						</div> */}
						<div className="experience-item-link">
							<div>
								Read More{" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Experience;
