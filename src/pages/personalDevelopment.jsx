import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Socials from "../components/about/socials";
import { Link } from "react-router-dom";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/personalDevelopment.css";
import image from "../assets/personaldevelopment.jpg"

const PersonalDevelopment = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "personal-development");

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
				<NavBar active="personal-development" />
				<div className="content-wrapper">
					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="description about-subtitle">
									After picking up App Development on my own
									through resources I found online, I got to
									know more like-minded individuals in my
									school who also have a passion for App
									Development, and working with them on
									projects has led me to understand the
									importance of teamwork and collaboration.
									<br />
									<br />
									More importantly, I was part of my school's
									Technology Talent Development Programme,{" "}
									<Link
										style={{
											color: "dodgerblue",
											textDecorationLine: "underline",
										}}
										to="/personal-development/sstinc"
									>
										SST Inc.
									</Link>
									, where I was a part of the iOS Taskforce,
									helping to teach and manage up to 100
									students every week.
									<br />
									<br />
									Lastly, I had the opportunity to be
									appointed as{" "}
									<Link
										style={{
											color: "dodgerblue",
											textDecorationLine: "underline",
										}}
										to="/personal-development/class-chairperson"
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

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={image}
											alt="about"
											className="about-image"
										/>
									</div>
								</div>
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

export default PersonalDevelopment;
