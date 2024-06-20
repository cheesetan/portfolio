import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-container">
						<div className="title">Overview of my Projects</div>

						<div className="description-less-margin">
							I've worked on a variety of projects, some alone,
							and some with my peers. Many of these projects are
							open-source and available for others to explore on
							GitHub.
						</div>

						<div className="projects-list">
							<div className="subtitle projects-section-header">
								Apps and Projects
							</div>
							<AllProjects projects={INFO.projects} />
						</div>

						<div className="projects-list">
							<div className="subtitle projects-section-header">
								Packages and Libraries
							</div>
							<AllProjects projects={INFO.packages} />
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

export default Projects;
