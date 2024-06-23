import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";

import "./styles/readArticle.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

let ArticleStyle = styled.div``;

const ReadArticle = (props) => {
    const { date, title, content } = props;
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${title} | ${INFO.main.title}`}</title>
				{/* <meta name="description" content={article().description} />
				<meta name="keywords" content={article().keywords.join(", ")} /> */}
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="read-article-container">
						<div className="read-article-back">
							<FontAwesomeIcon
								className="fa-2x"
								icon={faChevronLeft}
								alt="back"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							{/* <div className="read-article-date-container">
								<div className="read-article-date">
									{date}
								</div>
							</div> */}

							<div className="title read-article-title">
								{title}
							</div>

							<div className="read-article-body">{content}</div>
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

export default ReadArticle;