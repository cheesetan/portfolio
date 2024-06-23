import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/common/socials";
import { Link } from "react-router-dom";
import articles, { getPathnameFromArticleTitle } from "../data/articles";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/experiences.css";
import image from "../assets/experiences-leadership.jpg"
import AllExperiences from "../components/experiences/allExperiences";

const Experiences = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "experiences");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${INFO.main.title} | Experiences`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="experiences" />
				<div className="content-wrapper">
					<div className="experiences-container">
						<div className="experiences-main">
							<div className="experiences-right-side">
								<div className="title experiences-title">
									Experiences
								</div>

								<div className="description-less-margin experiences-subtitle">
									I've been given lots of incredible
									opportunities and experiences, and these are
									all of the experiences I've had, and how
									they have helped to shape who I am today.
								</div>

								<div className="subtitle section-header">
									Leadership
								</div>

								<div className="description-less-margin experiences-subtitle">
									I was part of my school's Technology Talent
									Development Programme,{" "}
									<Link
										style={{
											color: "dodgerblue",
											textDecorationLine: "underline",
										}}
										to={getPathnameFromArticleTitle(
											articles[0]()
										)}
									>
										SST Inc.
									</Link>
									, where I was a part of the iOS Taskforce,
									helping to curate lesson materials to teach
									iOS App Development and manage up to 100 of
									my juniors every week.
									<br />
									<br />
									Additionally, I had the opportunity to be
									appointed as{" "}
									<Link
										style={{
											color: "dodgerblue",
											textDecorationLine: "underline",
										}}
										to={getPathnameFromArticleTitle(
											articles[1]()
										)}
									>
										Class Chairperson
									</Link>{" "}
									in 2023, where I helped to build and foster
									a strong and cohesive class bond and spirit,
									which was especially challenging since 2023
									was when we all were shifted into new
									classes with new classmates.
								</div>
							</div>

							<div className="experiences-left-side">
								<div className="experiences-image-container">
									<div className="experiences-image-wrapper">
										<img
											src={image}
											alt="experiences"
											className="experiences-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="experiences-bottom-section">
							<div>
								<div className="subtitle section-header">
									Global Experiences
								</div>

								<div className="description-less-margin experiences-subtitle">
									These global experiences and opportunities
									have allowed me to work with people all over
									the world and well immerse myself in another
									country's culture and learn from the people
									there. This expanded worldview, helping me
									better communicate with and understand
									people from different backgrounds.
								</div>

								<div className="global-experiences-content">
									<AllExperiences experiences={INFO.globalExperiences} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Experiences;
