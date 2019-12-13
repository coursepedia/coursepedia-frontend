import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import AdultsCourses from "./AdultsCourses/AdultsCourses";
import KidsCourses from "./KidsCourses/KidsCourses";

export default function CourseLandingPage() {
	const [state, setstate] = useState(null);
	// const [scrollY, setScrollY] = useState(0);
	// const [bg, setBg] = useState("");
	// const [color, setColor] = useState("");

	// function getScrollHeight() {
	// 	setScrollY(window.pageYOffset);
	// 	if (scrollY >= 460) {
	// 		setBg("navdark-bg");
	// 		setColor("textcolor-change");
	// 	} else {
	// 		setBg("");
	// 		setColor("");
	// 	}
	// }

	// useLayoutEffect(() => {
	// 	function watchScroll() {
	// 		window.addEventListener("scroll", getScrollHeight);
	// 	}

	// 	watchScroll();

	// 	return () => {
	// 		window.removeEventListener("scroll", getScrollHeight);
	// 	};
	// 	// (window).scroll(function(){
	// 	//   ('nav').toggleClass('scroll', (this).scrollTop() > 50);
	// 	// });
	// }, [getScrollHeight]);

	const handleClick = condition => {
		setstate(condition);
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
						<a className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => handleClick(true)}>
							ADULTS <br /> 15 y.o
						</a>{" "}
						<a className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => handleClick(false)}>
							KIDS <br /> 8-14 y.o
						</a>
					</div>
				</div>
			</header>
			{/* either bkin component baru ato dbkin d dlm sini(coursesnya)*/}
			{state ? <AdultsCourses /> : <KidsCourses />}
		</div>
	);
}
