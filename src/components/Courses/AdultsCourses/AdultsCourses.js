import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdbreact";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import CourseCategory from "../CourseCategory";

class AdultsCourses extends Component {
	constructor() {
		super();
		this.state = {
			allAdultsData: []
		};
	}

	getAdultsData = () => {
		// if (this.state.allAdultsData.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`).then(result => {
			result.data.map(item => {
				if (item.ageCategory === "adult") {
					this.setState({
						allAdultsData: [...this.state.allAdultsData, item]
					});
				}
			});
		});
	};

	componentDidMount() {
		this.getAdultsData();
	}

	render() {
		const { url } = this.props.match;
		let query = new URLSearchParams(this.props.location.search);
		console.log(this.props.location.search, "location");
		console.log(query, "asdasdasdasdasdasd");
		// console.log(url, 'sini bossssssssss');

		return (
			<div>
				{/* header */}
				<MDBContainer>
					<section className="page-section" id="services">
						<div className="container">
							<div className="row">
								<div className="col-lg-12 text-center">
									<h2 className="section-heading text-uppercase">
										<h3>
											<b>Adult's Courses</b>
										</h3>
									</h2>
									<h3 className="section-subheading text-muted">Find out activities what you want to learn</h3>
								</div>
							</div>
						</div>
					</section>
				</MDBContainer>
				{/* buttons */}
				<MDBContainer>
					<MDBRow>
						<MDBCol size="3">
							<Link to={`${url}/showall?ageCategory=adult`}>
								<MDBBtn color="purple">Show All</MDBBtn>
							</Link>
							{/* Show All */}
						</MDBCol>
						<MDBCol size="3">
							<Link to={`${url}/showall?ageCategory=adult&fieldCategory=art`}>
								<MDBBtn color="deep-purple">Art</MDBBtn>
							</Link>
						</MDBCol>
						<MDBCol size="3">
							<Link to={`${url}/showall?ageCategory=adult&fieldCategory=tech`}>
								<MDBBtn color="indigo">Tech</MDBBtn>
							</Link>
						</MDBCol>
						<MDBCol size="3">
							<Link to={`${url}/showall?ageCategory=adult&fieldCategory=softskill`}>
								<MDBBtn color="light-blue">Soft Skill</MDBBtn>
							</Link>
						</MDBCol>
					</MDBRow>
					<br />
					<br />
				</MDBContainer>

				<CourseCategory fieldCategory={query.get("fieldCategory")} data={this.state.allAdultsData} />
			</div>
		);
	}
}

export default withRouter(AdultsCourses);
