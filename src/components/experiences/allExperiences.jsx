import React from "react";

import Project from "../projects/project";

import INFO from "../../data/user";

import "./styles/allExperiences.css";
import Experience from "./experience";

const AllExperiences = (props) => {
	const { experiences } = props;
	return (
		<div className="all-projects-container">
			{experiences.map((experience, index) => (
				<div className="all-projects-project" key={index}>
					<Experience experience={experience} />
				</div>
			))}
		</div>
	);
};

export default AllExperiences;
