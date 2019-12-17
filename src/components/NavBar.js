import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const [bg, setBg] = useState("");
	const [color, setColor] = useState("");
	return (
		<div>
			<nav className={`navbar navbar-expand-lg ${bg} fixed-top`} id="mainNav">
				<div className="container">
					<Link to='/'>
						<a className="navbar-brand js-scroll-trigger" href="#page-top">
							<b className={`${color}`}>Coursepedia</b>
						</a>
					</Link>
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						Menu
						<i className="fa fa-bars"></i>
					</button>
					<div className="collapse navbar-collapse" id="navbarResponsive">
						<ul className="navbar-nav text-uppercase ml-auto">
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#services">
									Awesome Feature
								</a>
							</li>
							<li className="nav-item">
								<Link to="/courses">
									<a className="nav-link js-scroll-trigger" href="#portfolio">
										Courses
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#about">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#team">
									Testimonials
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#contact">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
