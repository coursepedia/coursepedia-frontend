import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { height } from "@material-ui/system";

const style = { display: "inline-block", maxWidth: "50vh" };

export default class AdultsCourses extends React.Component {
	constructor() {
		super();
		this.state = {
			allListShownFirst: [],
			allList: [],
			techList: [],
			artList: [],
			softSkillList: [],
			modal: false,
			dataModal:[],
			targetId:''
		};
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	};

	showAllFirstShown = () => {
		if (this.state.allListShownFirst.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`).then(result => {
			result.data.map(item => {
				if (item.ageCategory == "adult") {
					this.setState({
						allListShownFirst: [...this.state.allListShownFirst, item]
					});
				}
			});
		});
	};

	componentDidMount() {
		this.showAllFirstShown();
	}

	showAll = () => {
		if (this.state.allList.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
			.then(result => {
				result.data.map(item => {
					if (item.ageCategory == "adult") {
						this.setState({
							allList: [...this.state.allList, item],
							allListShownFirst: [],
							techList: [],
							artList: [],
							softSkillList: []
							
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
		if (this.state.artList.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
			.then(result => {
				result.data.map(item => {
					if (item.fieldCategory == "art" && item.ageCategory == "adult") {
						this.setState({
							artList: [...this.state.artList, item],
							allListShownFirst: [],
							allList: [],
							techList: [],
							softSkillList: []
						});
					}
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	showTechList = () => {
		if (this.state.techList.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`).then(result => {
			result.data.map(item => {
				if (item.fieldCategory && "tech" && item.ageCategory == "adult") {
					this.setState({
						techList: [...this.state.techList, item],
						allListShownFirst: [],
						allList: [],
						artList: [],
						softSkillList: []
					});
				}
			});
		});
	};

	getDataModal = ()=>{
		if (this.state.dataModal.length > 0) return;
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
		.then(result=>{
			result.data.map(item=>{
				this.setState({
					dataModal:[...this.state.dataModal, item]
				})
			})
		})
	}

	getTargetId=(event)=>{
		if(this.state.targetId.length>0)return
		this.setState({
			targetId:event.target.value
		})
	}

	render() {
		console.log(this.state.techList);
		return (
			<div className="courses">
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
				{/* for button */}
				<MDBContainer>
					<MDBRow>
						<MDBCol size="3">
							<MDBBtn color="purple" onClick={this.showAll}>
								Show All
							</MDBBtn>
						</MDBCol>
						<MDBCol size="3">
							<MDBBtn color="deep-purple" onClick={this.showArtList}>
								Art
							</MDBBtn>
						</MDBCol>
						<MDBCol size="3">
							<MDBBtn color="indigo">Tech</MDBBtn>
						</MDBCol>
						<MDBCol size="3">
							<MDBBtn color="light-blue">Soft Skill</MDBBtn>
						</MDBCol>
					</MDBRow>
					<br />
					<br />
				</MDBContainer>

				{/* show all first */}
				<MDBContainer>
					<MDBRow>
						{this.state.allListShownFirst.map((data, index) => (
							<MDBCol size="6">
								<MDBCard>
									<MDBCardImage className="img-fluid" src={data.imageUrl} waves />
									<MDBCardBody className="card-body">
										<MDBCardTitle>{data.name}</MDBCardTitle>
										<MDBCardText>{data.address}</MDBCardText>
										<MDBCardText>Rp {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</MDBCardText>
										<MDBCardText>
											<Box component="fieldset" mb={3} borderColor="transparent">
												<Rating name="read-only" value={data.rating} readOnly />
											</Box>
										</MDBCardText>
										{/* first line modal */}
										<MDBContainer>
											<MDBBtn onClick={()=>{this.toggle();this.getDataModal();this.getTargetId()}} value={data.id}>Modal</MDBBtn>
											<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
												

												{/* TANYAIN OJAN YG DIBAWAH INI */}
												{/* {this.state.dataModal && this.state.dataModal.map(item=>{
														if(item.id == this.state.targetId){
															()=>{}
														}}
												)} */}

												<MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
												<MDBModalBody>

												</MDBModalBody>
												<MDBModalFooter>
													<MDBBtn color="secondary" onClick={this.toggle}>
														Close
													</MDBBtn>
												</MDBModalFooter>
												
											</MDBModal>
										</MDBContainer>
										{/* last line modal */}
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						))}
					</MDBRow>
				</MDBContainer>

				{/* show all */}
				<MDBContainer>
					<MDBRow>
						{this.state.allList &&
							this.state.allList.map((data, index) => (
								<MDBCol size="6">
									<MDBCard>
										<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
										<MDBCardBody style={{ height: "auto" }}>
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

					{/* show art */}
					<MDBRow>
						{this.state.artList &&
							this.state.artList.map((data, index) => (
								<MDBCol size="6">
									<MDBCard>
										<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
										<MDBCardBody style={{ height: "auto" }}>
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

					{/* show tech */}
					<MDBRow>
						{this.state.techList &&
							this.state.techList.map((data, index) => (
								<MDBCol size="6">
									<MDBCard>
										<MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
										<MDBCardBody style={{ height: "auto" }}>
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
