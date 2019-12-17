import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

export default function CourseCategory({ fieldCategory, data }) {
    console.log(data, 'ini nihhhhhhhhh');
    console.log(fieldCategory);
    
	return (
		<div>
			<MDBContainer>
				<MDBRow>
					{data.map((data, index) => (
						<>
							{fieldCategory ? (
								data.fieldCategory === fieldCategory ? (
									<MDBCol size="6" key={index}>
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
											</MDBCardBody>
										</MDBCard>
									</MDBCol>
								) : null
							) : (
								<MDBCol size="6" key={index}>
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
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							)}
						</>
					))}
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
