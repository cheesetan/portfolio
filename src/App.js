import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ReadArticle from "./pages/readArticle";
import Achievements from "./pages/achievements";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import Notfound from "./pages/404";
import articles, { getPathnameFromArticleTitle } from "./data/articles";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";
import PersonalDevelopment from "./pages/personalDevelopment";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route
					path="/personal-development"
					element={<PersonalDevelopment />}
				/>
				<Route path="/achievements" element={<Achievements />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />

				{articles.map((article) => (
					<Route
						path={getPathnameFromArticleTitle(
							article().title
						)}
						element={
							<ReadArticle
								title={article().title}
								style={article().style}
								body={article().body}
								content={article().content}
							/>
						}
					/>
				))}

				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
