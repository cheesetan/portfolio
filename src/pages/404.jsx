import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	function getCurrentDate(separator = "-") {
		let newDate = new Date();
		let date = newDate.getDate();
		let month = newDate.toLocaleString("en-US", { month: "long" })
		let year = newDate.getFullYear();

		return `${date} ${month} ${year}`;
	}

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">404 :/</div>
							<div className="not-found-message">
								The page "
								{window.location.pathname.replace("/", "")}"
								can't be found. You're either trying to manifest
								my future or typed the address in wrongly.
								{/* <br />
								The requested URL "{window.location.href}" was
								not found on this server. */}
							</div>
							<a href="/" className="not-found-link">
								Head back to reality ({getCurrentDate()})
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
