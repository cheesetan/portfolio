import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/achievements.css";
import image from "../assets/homepage.jpg"
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Achievements = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="achievements" />
				<div className="content-wrapper">
					<div className="achievements-container">
						<div className="achievements-main">
							<div className="title">Achievements</div>

							<div className="description-less-margin">
								These are some of the Awards that I have
								attained and Competitions that I have
								participated in.
							</div>
							<div className="card-item">
								{/* here */}
							</div>
						</div>
					</div>
					{/* <div className="page-footer">
						<Footer />
					</div> */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default Achievements;
