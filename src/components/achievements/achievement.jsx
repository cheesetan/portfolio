import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/achievement.css";

const Achievement = (props) => {
	const { achievement } = props;

	return (
		<React.Fragment>
			<div className="achievement-item">
				{/* <Link to={achievement.link}> */}
					<div className="achievement-item-container">
						<div className="achievement-item-year">
							{achievement.year}
						</div>
						<div className="achievement-item-title">
							{achievement.title}
						</div>
						<div className="achievement-item-competition-award">
							{achievement.award ? achievement.award : ""}
						</div>
						<div className="achievement-item-description">
							{achievement.description}
						</div>
						{/* <div className="achievement-item-link">
							<div>
								Learn More{" "}
								<FontAwesomeIcon
									style={{ fontSize: "10px" }}
									icon={faChevronRight}
								/>
							</div>
						</div> */}
					</div>
				{/* </Link> */}
			</div>
		</React.Fragment>
	);
};

export default Achievement;
