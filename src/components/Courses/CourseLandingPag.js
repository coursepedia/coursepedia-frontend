import React, { useState } from "react";
import NavBar from "../NavBar";
import AdultsCourses from "./AdultsCourses/AdultsCourses";
import KidsCourses from "./KidsCourses/KidsCourses";

export default function CourseLandingPage() {
	const [state, setstate] = useState('');

	const handleClick = ageCategory => {
		setstate(ageCategory);
	};

	return (
		<div>
			{/* navbar */}
			<NavBar />
			{/* header */}
			<header className="masthead">
				<div className="container">
					<div className="intro-text">
						<div className="intro-lead-in">Welcome To Coursepedia</div>
						<div className="intro-heading text-uppercase">Find Recommended Courses Easily</div>
						<a className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => handleClick('adult')}>
							ADULTS <br /> 15 y.o
						</a>{" "}
						<a className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => handleClick('kid')}>
							KIDS <br /> 8-14 y.o
						</a>
					</div>
				</div>
			</header>
			{/* statement to chose which category*/}
			{state==='adult' ? <AdultsCourses /> : null}
			{state==='kid' ? <KidsCourses /> : null}
		</div>
	);
}
