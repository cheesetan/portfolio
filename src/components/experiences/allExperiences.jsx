import React from "react";

import INFO from "../../data/user";

import "./styles/allExperiences.css";
import Experience from "./experience";

const AllExperiences = (props) => {
	const { experiences } = props;
	return (
		<div className="all-experiences-container">
			{experiences.map((experience, index) => (
				<div className="all-experiences-project" key={index}>
					<Experience experience={experience} />
				</div>
			))}
		</div>
	);
};

export default AllExperiences;
