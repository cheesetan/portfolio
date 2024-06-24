import React from "react";
import sstinc from "../assets/sstinc.jpg"
import classimg from "../assets/2023class.jpg"

import INFO from "./user";

function sst_incorporated() {
	return {
		title: "SST Incorporated",
		previousPathname: "/experiences/leadership/",
		style: `
			.top-image {
				width: 100%;
				margin-bottom: 15px;
			}

			.left-image {
				margin-right: 15px;
				margin-bottom: 15px;
				float: left;
			}

			.right-image {
				margin-left: 15px;
				margin-bottom: 15px;
				float: right;
			}
				`,
		body: (
			<React.Fragment>
				<div>
					<img
						src={sstinc}
						alt="SST Inc."
						className="top-image"
					/>
					<div className="paragraph">
						During my time in SST Inc., I leveraged on my expertise
						that I gathered and learnt online and helped to curate
						content to teach students iOS App Development. Some
						examples of this includes helping to gather content and
						information on the topic that we are teaching, creating
						slides for students to refer to, coming up and recording
						lesson videos for students who were absent, and teaching
						up to 100 students every week. Although this was a
						tiring and gruesome process, I had the help of my other
						iOS Taskforce members, and together we divided the
						things we had to do every week amongst ourselves and
						strived to provide our students with the best content
						possible.
						<br />
						<br />
						However, my time in SST Inc. was not just limited to
						teaching juniors App Development. Despite not officially
						being a part of the Executive Committee (Exco), I still
						worked really closely with the Exco because most of them
						are people I know personally, and I hoped to be able to
						leave my mark on the Programme in one way or another. In
						light of this, I was the only member in SST Inc. at that
						time that helped out outside of their assigned job
						scope. Some examples of this include planning and
						overseeing INCamp 2023, which is an annual camp for all
						SST Inc. members, working on and developing an
						attendance management system that makes use of
						refreshing QR Codes to mark attendance, reducing the
						workload of our Chief Administrative Officers, sorting
						out class allocations for students, and assisting in the
						2023 SST Inc. Corporate Video.
						<br />
						<br />
						Having earned the trust of the teachers-in-charge (known
						as Board of Directors, BODs) of the Programme, I was
						also given the incredible opportunity to present to a
						bunch of guests and visitors who came to visit SST Inc.
						and learn more about what SST Inc. does. I shared about
						what SST Inc. is, and what we believe in, in addition to
						touring the visitors around our HQ. Some examples of the
						visitors I've presented to are the Incheon Metropolitan
						Office of Education, Tokyo Metropolitan Foundation for
						Private Schools, and Gyeonggido Office of Education.
						<br />
						<br />
						Lastly, as a member of SST Inc., I helped to develop
						multiple apps that will leave a positive impact on the
						community. These apps are MathX., Glassroom, AttendINC,
						ExiSST, GrowCalth, and Announcer. You can find more
						about these apps under the "Projects" section.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function class_chairperson() {
	return {
		title: "2023 Class Chairperson",
		previousPathname: "/experiences/leadership/",
		style: `
			.top-image {
				width: 100%;
				margin-bottom: 15px;
			}

			.left-image {
				margin-right: 15px;
				margin-bottom: 15px;
				float: left;
			}

			.right-image {
				margin-left: 15px;
				margin-bottom: 15px;
				float: right;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src={classimg}
						alt="S304 2023 CNY Class Photo"
						className="top-image"
					/>
					<div>
						As Class Chairperson, I helped to bring the class
						together by fostering and building a cohesive and strong
						class spirit and bond amongst everyone. Through this, I
						was able to get everyone understand one another and get
						them on board class ideas and projects. Additionally as
						part of being the Class Chairperson, I also helped my
						teacher organise and teach during some CCE Lessons,
						taking over and guiding my fellow classmates on the
						issue or topic being shared during CCE. Moreover, I also
						held class meetings, where we discussed on the direction
						and attitude of the class, and areas for improvement
						that we can make to better ourselves.
						<br /><br />
						Lastly, I also helped to plan and organise events for my
						class, such as class parties, by gathering feedback on
						what my classmates want, and then making the necessary
						arrangements for games and food. In addition to
						organising activities, I also helped to organise the
						class when we were overseas in Indonesia in November
						2023 as part of an exchange programme, helping to ensure
						that everyone was ready every morning and ensuring that
						everyone had fun while still being safe overseas.
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function labb() {
	return {
		title: INFO.globalExperiences[0].title,
		previousPathname: INFO.globalExperiences[0].previousPathname,
		style: `
			.top-image {
				width: 100%;
				margin-bottom: 15px;
			}

			.left-image {
				margin-right: 15px;
				margin-bottom: 15px;
				float: left;
			}

			.right-image {
				margin-left: 15px;
				margin-bottom: 15px;
				float: right;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<div>
						
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function jakarta_iep() {
	return {
		title: INFO.globalExperiences[1].title,
		previousPathname: INFO.globalExperiences[1].previousPathname,
		style: `
			.top-image {
				width: 100%;
				margin-bottom: 15px;
			}

			.left-image {
				margin-right: 15px;
				margin-bottom: 15px;
				float: left;
			}

			.right-image {
				margin-left: 15px;
				margin-bottom: 15px;
				float: right;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<div>
						
					</div>
				</div>
			</React.Fragment>
		),
	};
}

function project_sf() {
	return {
		title: INFO.globalExperiences[2].title,
		previousPathname: INFO.globalExperiences[2].previousPathname,
		style: `
			.top-image {
				width: 100%;
				margin-bottom: 15px;
			}

			.left-image {
				margin-right: 15px;
				margin-bottom: 15px;
				float: left;
			}

			.right-image {
				margin-left: 15px;
				margin-bottom: 15px;
				float: right;
			}
		`,
		body: (
			<React.Fragment>
				<div className="article-content">
					
					<div>
						
					</div>
				</div>
			</React.Fragment>
		),
	};
}

const articles = [sst_incorporated, class_chairperson, labb, jakarta_iep, project_sf];

export function getPathnameFromArticleTitle(article) {
	return String(article.previousPathname) + String(article.title).toLowerCase().replaceAll(/[^a-zA-Z ]/g, "").replaceAll(" ", "-")
}

export default articles;