import labbimg from "../assets/labb-cover.jpeg"
import bbsimg from "../assets/bbs-cover.jpeg"
import sfimg from "../assets/sf-cover.jpeg"

const INFO = {
	main: {
		title: "Tristan Chay",
		name: "Tristan Chay",
		email: "tristanchay123@gmail.com",
		logo: "",
	},

	socials: {
		github: "https://github.com/cheesetan/",
		linkedin: "https://linkedin.com/in/tristanchay/",
	},

	homepage: {
		title: "Hey, I'm Tristan Chay!",
		subtitle: "Student Developer",
		description:
			"I'm a 16 year old developer from Singapore. I help to mentor juniors at Swift Accelerator Programme, guiding them in their iOS App Development journey. Additionally, I am also one of 350 winners worldwide in Apple's WWDC23 Swift Student Challenge, as well as Apple App Development with Swift certified.",
	},

	articles: {
		title: "Featured Articles",
		description:
			"Here are some of the articles that I have been featured in.",
	},

	awards: [
		{
			year: "2023",
			title: "SST Inc. App of the Year Champion",
			description:
				"The SST Inc. App of the Year is awarded by SST Inc. to its employees to recognise apps that make significant contributions to their target communities. My company's app, AttendINC, helped to streamline attendance taking in SST Inc., reducing the workload of our CAOs. AttendINC was also used during SST MUN, allowing the organisers to quickly and securely mark the attendance of guests.",
		},

		{
			year: "2023",
			title: "SST Inc. App of the Year 1st Runner Up",
			description:
				"The SST Inc. App of the Year is awarded by SST Inc. to its employees to recognise apps that make significant contributions to their target communities. My company's app, Glassroom, is a native Google Classroom client that provides features such as speed improvements, instantaneous loading with cache, and user convenience enhancements.",
		},

		{
			year: "2024",
			title: "SST Inventive Mind Award",
			description:
				"The SST Inventive Mind Award is given to SST Students who have leveraged the use of technology to turn their idea into a practical and functioning product or app that has helped to positively impact the school community. AttendINC, and its use during SST MUN, was recognised for its efficiency and impact it had on the community, streamlining the process of attendance taking.",
		},
	],

	competitions: [
		{
			year: "2022",
			title: "Astrigue 2022",
			description:
				"Astrigue is an annual beginner-level Astronomy competition organised by the Astronomy Club of Raffles Institution.",
		},

		{
			year: "2022",
			award: "Silver Medal (Physics and Engineering Category)",
			title: "International Science Project Competition (INTOC)",
			description:
				"The International Online Science Competition is an annual competition that gives students the opportunity to showcase their scientific and skills.",
		},

		{
			year: "2022",
			award: "3rd Place",
			title: "Opportunity X Science Fair",
			description:
				"The Opportunity X Science Fair contest provides students a platform to showcase their science projects worldwide.",
		},

		{
			year: "2022",
			title: "VJC East Zone A*STAR Science Fair",
			description:
				"The Fair aims to inspire and foster an interest in STEM amongst secondary students, and allows them to develop an appreciation of the impact of STEM on their life, the environment, and society.",
		},

		{
			year: "2023",
			title: "Hack&Roll 2023",
			description:
				"Hack&Roll is NUS Hackers' annual 24-hour hackathon, and is the largest student-run hackathon in Singapore.",
		},

		{
			year: "2023",
			title: "Perse Coding Team Challenge (Round 1)",
			description:
				"The Perse Coding Team Challenge tests students programming skills as they battle it out against the other teams from across the world.",
		},

		{
			year: "2023",
			title: "Singapore Science and Engineering Fair (SSEF)",
			description:
				"The Singapore Science & Engineering Fair (SSEF) is a national competition organised by the Ministry of Education (MOE), Agency for Science, Technology and Research (A*STAR), and Science Centre Singapore (SCS).",
		},

		{
			year: "2023",
			award: "Winner",
			title: "Apple WWDC23 Swift Student Challenge",
			description:
				"The Swift Student Challenge is an annual challenge that gives student developers the chance to showcase their creativity and coding capabilities through app playgrounds.",
		},

		{
			year: "2023",
			title: "Astrigue 2023",
			description:
				"Astrigue is an annual beginner-level Astronomy competition organised by the Astronomy Club of Raffles Institution.",
		},

		{
			year: "2023",
			title: "ARTC-SIMTech-SST Innovation Camp",
			description:
				"The ARTC-SIMTech-SST Innovation Camp is a hackathon formed from the partnership between SST and ARTC, and was themed around recycling in 2023.",
		},

		{
			year: "2023",
			title: "IMDA National Youth Tech Championship",
			description:
				"National Youth Tech Championship is the flagship competition for the Infocomm Media Club CCA, powered by IMDA. Exclusively for IMC members through IMDA, students are exposed to emerging tech such as first-hand experiences to interact with the technologies and to better understand the real-world applications of tech and media.",
		},

		{
			year: "2024",
			title: "SUTD-NP-SST Big D Camp",
			description:
				"The Camp allows students with a strong aptitude and passion in Science, Technology, Engineering and Mathematics (STEM) and design to have the opportunity to participate in a design and prototyping workshop under the tutelage of professors and student helpers from SUTD, and was themed around accessibility in 2024.",
		},

		{
			year: "2024",
			title: "Apple WWDC24 Swift Student Challenge",
			description:
				"The Swift Student Challenge is an annual challenge that gives student developers the chance to showcase their creativity and coding capabilities through app playgrounds.",
		},

		{
			year: "2024",
			title: "SST-SMU IDP Technopreuship Hackathon",
			description:
				"SST-SMU IDP Technopreuship Hackathon is a hackathon formed from the partnership between SST and SMU, and aims to help SST IDP Students learn and understand more about technopreneurship.",
		},
	],

	globalExperiences: [
		{
			title: "Learning Alliance Beyond Borders (LABB)",
			country: "Ho Chi Minh City, Vietnam (Virtual)",
			img: labbimg,
			previousPathname: "/experiences/global/",
		},

		{
			title: "SST x BBS IDP International Exchange Programme (IEP)",
			country: "Jakarta, Indonesia",
			img: bbsimg,
			previousPathname: "/experiences/global/",
		},

		{
			title: "#ProjectSF",
			country: "San Francisco, United States of America",
			img: sfimg,
			previousPathname: "/experiences/global/",
		}
	],

	speicalProjects: [
		{
			title: "ExiSST",
			description:
				"ExiSST is a secure, private, and verifiable way of taking attendance through the use of a refreshing QR Code and Google Sheets integration.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/sg/app/exisst/id6504036475",
		},

		{
			title: "Glassroom",
			description:
				"Glassroom is a native Google Classroom client that provides features such as speed improvements, instantaneous loading with cache, and user convenience enhancements.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/glassroom/id6476105446",
		},

		{
			title: "GrowCalth",
			description:
				"GrowCalth is a one stop platform that allows SST Students to participate in house challenges and further fosters house spirit among their house members.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/growcalth/id6456388202",
		},

		// {
		// 	title: "MathX.",
		// 	description:
		// 		"MathX features a useful tools such as calculators with special functions to help you quickly and easily calculate and solve your mathematical needs.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
		// 	linkText: "View on App Store",
		// 	link: "https://apps.apple.com/us/app/mathx/id1434950136",
		// },

		// {
		// 	title: "Pawtfolio",
		// 	description:
		// 		"Pawtfolio aims to be able to guide students on their journey of creating and making their portfolios.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
		// 	linkText: "View on App Store",
		// 	link: "https://apps.apple.com/us/app/pawtfolio/id6473139075",
		// },

		// {
		// 	title: "SST Open House 2024",
		// 	description:
		// 		"The SST Open House 2024 app allows visitors to explore the campus with ease, access detailed event information, and even compete for exciting prizes right within the app.",
		// 	logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
		// 	linkText: "View on App Store",
		// 	link: "https://apps.apple.com/us/app/sst-open-house-2024/id6479939416",
		// },
	],

	projects: [
		{
			title: "BoxSort",
			description:
				"A friend of mine contacted me at 10pm and asked me to create an app for him that lets him sort his item in boxes and keep track of where they are. I finished it by midnight.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/cheesetan/boxsort",
		},

		{
			title: "ExiSST",
			description:
				"ExiSST is a secure, private, and verifiable way of taking attendance through the use of a refreshing QR Code and Google Sheets integration.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/sg/app/exisst/id6504036475",
		},

		{
			title: "Food Friend",
			description:
				"Food Friend was developed for my Secondary 2 ICT Project. Food Friend aims to cut down on food wastage by allowing users to post about food items nearing expiry on the app to give away to others whom may need it more.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "Github not available",
			link: "",
		},

		{
			title: "Glassroom",
			description:
				"Glassroom is a native Google Classroom client that provides features such as speed improvements, instantaneous loading with cache, and user convenience enhancements.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/glassroom/id6476105446",
		},

		{
			title: "GrowCalth",
			description:
				"GrowCalth is a one stop platform that allows SST Students to participate in house challenges and further fosters house spirit among their house members.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/growcalth/id6456388202",
		},

		{
			title: "HandsOff",
			description:
				"Tired of people always taking their chance to snoop around your Mac when you leave unattended for 5 seconds? Fret not, HandsOff uses Bluetooth to remotely connect to your Mac from your iPhone, allowing you to lock it with the tap of a button.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on Project",
			link: "https://github.com/cheesetan/handsoff",
		},

		{
			title: "KKH CICU (WIP)",
			description:
				"KKH CICU aims to streamline the workflow for Residents in KKH by allowing them to view medical documents and perform dosage calculations right on their devices. This app is created in collaboration with KKH.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/KaiTheRedNinja/KKH-CICU",
		},

		{
			title: "MathX.",
			description:
				"MathX features a useful tools such as calculators with special functions to help you quickly and easily calculate and solve your mathematical needs.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/mathx/id1434950136",
		},

		{
			title: "NotionBar",
			description:
				"I got tired of having to open up Notion to update my class's notice board everday, so I made a menu bar app that lets me do that straight from my Desktop.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "Github not available",
			link: "",
		},

		{
			title: "Pawtfolio",
			description:
				"Pawtfolio aims to be able to guide students on their journey of creating and making their portfolios.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/pawtfolio/id6473139075",
		},

		{
			title: "PenTracker",
			description:
				"PenTracker is like a drawing pad - but without the pad. PenTracker makes use of your webcam and a Machine Learning model to track the tip of your pen, and moves your cursor accordingly.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/KaiTheRedNinja/PenTracker",
		},

		{
			title: "StudyLog",
			description:
				"StudyLog offers a variety of useful features to enhance the studying experience. These include count-up timers which enable students to monitor their study time effectively, and countdown timers so students can keep track of the amount of time they have left if they are attempting a timed practice paper.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "Read about StudyLog",
			link: "https://geekbytes.co/swift-student-challenge-2023/",
		},

		{
			title: "Recall",
			description:
				"Recall was built for the 2022 3M Innofest Challenge and won 1st place. Recall is an app that allows caretakers to remotely set reminders for people with dementia to remind them of their daily necessities and tasks to do, allowing people with dementia to live more independently without the need of people always around them.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/cheesetan/recall",
		},

		{
			title: "SST Open House 2024",
			description:
				"The SST Open House 2024 app allows visitors to explore the campus with ease, access detailed event information, and even compete for exciting prizes right within the app.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View on App Store",
			link: "https://apps.apple.com/us/app/sst-open-house-2024/id6479939416",
		},

		{
			title: "Virtual Photobooth",
			description:
				"Virtual Photobooth is a Python program that makes use of cv2 to overlay props on top of a live video feed, allowing users to take images with virtual props.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/cheesetan/virtual-photobooth",
		},
	],

	packages: [
		{
			title: "SwiftPersistence",
			description:
				"SwiftPesistence (@Persistent) is a property wrapper type that can read and write a persisted value saved in FileManager.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/cheesetan/SwiftPersistence",
		},

		{
			title: "GSheetsSwift",
			description:
				"GSheetsSwift is a Swift library for interacting with the Google Sheets API.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/swift/swift.png",
			linkText: "View Project",
			link: "https://github.com/KaiTheRedNinja/GSheetsSwift",
		},
	],

	work: [
		{
			imgsrc: "data:image/jpeg;base64,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",
			title: "HMGICS",
			subtitle: "Student Work Attachment",
			timeline: "December 2023",
			link: "https://www.hyundai.com/sg/home",
		},

		// {
		// 	imgsrc: "data:image/jpeg;base64,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",
		// 	title: "SST Incorporated",
		// 	subtitle: "iOS Taskforce",
		// 	timeline: "June 2023 - March 2024",
		// 	link: "https://www.sstinc.org/",
		// },

		{
			imgsrc: "https://github.com/swiftinsg/branding/blob/main/logos/icons/png/coloured%20-%20light%20background.png?raw=true",
			title: "Swift Accelerator Programme",
			subtitle: "Mentor",
			timeline: "May 2024 - Present",
			link: "https://swiftinsg.org/",
		},
	],

	certifications: [
		{
			imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
			title: "Cisco",
			subtitle: "Cisco Cybersecurity Essentials",
			timeline: "June 2023",
			link: "https://www.credly.com/badges/6bd0b6c9-86d8-4e53-8560-3518fe976559/linked_in_profile",
		},

		{
			imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgB4odqWCDz-29C6_s9RQya_sDh72xn0Vfw&s",
			title: "AI Singapore",
			subtitle: "Literacy in AI",
			timeline: "July 2023",
			link: "https://learn.aisingapore.org/certificate-verification/815F3C6580-7EF3D276C5-138D5B024/",
		},

		{
			imgsrc: "https://banner2.cleanpng.com/20180724/trx/kisspng-apple-logo-business-desktop-wallpaper-huawei-logo-5b56f55dc08410.4396015315324255657886.jpg",
			title: "Apple",
			subtitle: "Apple Certified Teacher",
			timeline: "April 2024",
			link: "https://education.apple.com/learning-center/",
		},

		{
			imgsrc: "https://banner2.cleanpng.com/20180724/trx/kisspng-apple-logo-business-desktop-wallpaper-huawei-logo-5b56f55dc08410.4396015315324255657886.jpg",
			title: "Apple",
			subtitle: "Apple Certified Teacher: Swift Playgrounds",
			timeline: "April 2024",
			link: "https://education.apple.com/learning-center/",
		},

		{
			imgsrc: "https://banner2.cleanpng.com/20180724/trx/kisspng-apple-logo-business-desktop-wallpaper-huawei-logo-5b56f55dc08410.4396015315324255657886.jpg",
			title: "Apple",
			subtitle: "App Development with Swift Associate",
			timeline: "May 2024",
			link: "https://www.credly.com/badges/14d227d1-8612-496f-951d-6811024a7851/",
		},
	],
};

export default INFO;
