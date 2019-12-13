import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class AdultsCourses extends React.Component {
	// const [techList, setTechList] = useState([]);
	constructor() {
		super();
		this.state = {
			allList: [],
			techList: [],
			artList: [],
			softSkillList: []
		};
	}

	showAll = () => {
		if (this.state.allList.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
			.then(result => {
				result.data.map(item => {
					if (item.ageCategory == "adult") {
						this.setState({
							allList: [...this.state.allList, item]
						});
					}
				});
				// console.log(result);
			})
			.catch(error => {
				console.log(error);
			});
	};

	showArtList = () => {
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
			.then(result => {
				result.data.map(item => {
					if (item.fieldCategory == "art" && item.ageCategory == "adult") {
						this.setState({
							artList: [...this.state.artList, item]
						});
					}
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		console.log(this.state.techList);
		return (
			<div>
				<section className="page-section" id="services">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="section-heading text-uppercase">
									<b>Adult's Courses</b>
								</h2>
								<h3 className="section-subheading text-muted">Find out activities what you want to learn</h3>
							</div>
						</div>
						<button onClick={this.showAll}>show all</button>
						<button onClick={this.showArtList}>show art list</button>
					</div>
				</section>
				<MDBContainer>
					<MDBRow>
						{/* show all */}
						{this.state.allList &&
							this.state.allList.map((data, index) => (
								<MDBCol>
									<MDBCard style={{ width: "22rem" }}>
										<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
										<MDBCardBody>
											<MDBCardTitle>{data.name}</MDBCardTitle>
											<MDBCardText>{data.address}</MDBCardText>
											<MDBCardText>Rp {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</MDBCardText>
											<MDBCardText>
												<Box component="fieldset" mb={3} borderColor="transparent">
													<Rating name="read-only" value={data.rating} readOnly />
												</Box>
											</MDBCardText>
											<MDBBtn href="#">MDBBtn</MDBBtn>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							))}
						{/* show art */}
						{this.state.artList &&
							this.state.artList.map((data, index) => (
								<MDBCol>
									<MDBCard style={{ width: "22rem" }}>
										<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
										<MDBCardBody>
											<MDBCardTitle>{data.name}</MDBCardTitle>
											<MDBCardText>{data.address}</MDBCardText>
											<MDBCardText>Rp {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</MDBCardText>
											<MDBCardText>
												<Box component="fieldset" mb={3} borderColor="transparent">
													<Rating name="read-only" value={data.rating} readOnly />
												</Box>
											</MDBCardText>
											<MDBBtn href="#">MDBBtn</MDBBtn>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							))}
					</MDBRow>
				</MDBContainer>
			</div>
		);
	}
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default class AdultsCourses extends React.Component{
// 	// const [techList, setTechList] = useState([]);
//     constructor(){
//         super()
//         this.state = {
//             techList: []
//         }
//     }

// 	showAll = () => {
//         if (this.state.techList.length > 0 ) return
// 		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
// 			.then(result => {
// 				result.data.map(item => {
// 					if (item.fieldCategory == "tech") {
//                         this.setState({
//                             techList: [...this.state.techList, item]
//                         })
// 					}
// 				});
// 				// console.log(result);
// 			})
// 			.catch(error => {
// 				console.log(error);
// 			});
//     };

//     render(){

//         console.log(this.state.techList)
//         return (
//             <div>

//                 <button onClick={this.showAll}>click</button>
//                 <ul>
//                     {this.state.techList.map((item, index) => (
//                         <li key={index}>{item.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }

// }
