import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/experience.css";

const Experience = (props) => {
	const { experience } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={experience.link}>
					<div className="project-container">
						<div className="project-title">{experience.title}</div>
						<div className="project-country">
							{experience.country}
						</div>
						<div className="project-description">
							{experience.description}
						</div>
						<div className="project-link">
							<div>
								Learn More{" "}
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
