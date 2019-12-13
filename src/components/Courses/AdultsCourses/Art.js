import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class Art extends Component {
	constructor() {
		super();
		this.state = {
			artList: []
		};
	}

	componentDidMount() {
		this.showArt();
	}

	showArt = () => {
		// if (this.state.artList.length > 0 ) return
		axios.get(`http://coursepediabackend.herokuapp.com/courses/`)
			.then(result => {
				console.log(result);
				result.data.map(item => {
					if (item.fieldCategory == "art" && item.ageCategory == "adult") {
						this.setState(
							{
								artList: [...this.state.artList, item]
							},
							() => console.log(this.state)
						);
					}
				});
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		return (
			<div>
            <MDBContainer>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus hic dolorem ullam, atque eius aliquid modi, vitae, asperiores vero dolore dolores deserunt cum sunt ducimus iusto officiis sint eaque nesciunt.
            </MDBContainer>
				<MDBContainer>
                    <MDBRow>
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
