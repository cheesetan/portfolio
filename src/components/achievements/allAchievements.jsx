import React from "react";

import INFO from "../../data/user";
import Achievement from "./achievement";

import "./styles/allAchievements.css";


const AllAchievements = (props) => {
	const { achievements } = props;
	return (
		<div className="all-achievements-container">
			{achievements.map((achievement, index) => (
				<div className="all-achievements-project" key={index}>
					<Achievement achievement={achievement} />
				</div>
			))}
		</div>
	);
};

export default AllAchievements;
