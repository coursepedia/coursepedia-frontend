import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import CommentBox from "../CommentBox";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";

export default function CourseCategory({ fieldCategory, data }) {
	console.log(data, "ini nihhhhhhhhh");
	console.log(fieldCategory);
	const [toggle, setToggle] = useState(false);
	const [modalContent, setModalContent] = useState({});

	useEffect(() => {
		axios.get("https://coursepediabackend.herokuapp.com/courses")
			.then(res => {
				console.log(res);
				// setModalContent(res.data);
				// console.log(res.data);
			})
			.catch(error => console.log(error.message));
	}, []);

	const handleClick = data => {
		setToggle(prevState => !prevState);
		setModalContent(data);
		// console.log(modalContent, 'ooooooooooooooooooooooooooooo');
	};

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
												{/* <MDBCardText>{data.address}</MDBCardText>
												<MDBCardText>Rp {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</MDBCardText> */}
												<MDBCardText>
													<Box component="fieldset" mb={3} borderColor="transparent">
														<Rating name="read-only" value={data.rating} readOnly />
													</Box>
												</MDBCardText>
												{/* modal input */}
												<MDBBtn key={index} onClick={() => handleClick(data)}>
													View Detail
												</MDBBtn>
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
											{/* <MDBCardText>{data.address}</MDBCardText>
											<MDBCardText>Rp {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},00</MDBCardText> */}
											<MDBCardText>
												<Box component="fieldset" mb={3} borderColor="transparent">
													<Rating name="read-only" value={data.rating} readOnly />
												</Box>
											</MDBCardText>
											<MDBBtn key={index} onClick={() => handleClick(data)}>
												View Detail
											</MDBBtn>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							)}
						</>
					))}
				</MDBRow>

				{/* modal */}
				{Object.keys(modalContent).length !== 0 && (
					<MDBContainer name="modal">
						<MDBModal isOpen={toggle} size="lg" centered>
							<MDBModalBody>
								<>
									<MDBModalHeader class="text-uppercase">{modalContent.name}</MDBModalHeader>
									<img className="img-fluid d-block mx-auto" src={modalContent.imageUrl} alt="" />
								</>
								<div className="portofolio-caption">
									<ul class="list-inline">
										<li>
											<h4 className="orange-text">
												{" "}
												<Rating name="read-only" value={modalContent.rating} readOnly /> {modalContent.rating}
											</h4>
										</li>
										<li className="pb-2">
											<strong>Address: </strong>
											{modalContent.address}
										</li>
										<li className="pb-2">
											<strong>Telephone: </strong>
											{modalContent.phoneNumber}
										</li>
										<li className="pb-2">
											<strong>Age: </strong>
											<span className="text-capitalize">{modalContent.ageCategory}</span>
										</li>
										<li className="pb-2">
											<strong>Price : </strong>
											{new Intl.NumberFormat("id-ID", {
												style: "currency",
												currency: "idr"
											}).format(modalContent.price)}
										</li>
										<li className="pb-2">
											<strong>Type : </strong>
											<span className="text-capitalize">{modalContent.fieldCategory}</span>
										</li>
										{modalContent.comments &&
											modalContent.comments.map((el, i) => (
												<div key={i}>
													<p>
														<strong>{el.users.username}</strong>
													</p>
													<p>{el.content}</p>
												</div>
											))}
									</ul>
									<CommentBox courseId={modalContent._id} />
								</div>
							</MDBModalBody>
							<MDBModalFooter>
								<MDBBtn color="primary">Direction</MDBBtn>
								<MDBBtn color="primary">Website</MDBBtn>
								<MDBBtn color="secondary" onClick={handleClick}>
									Close
								</MDBBtn>
							</MDBModalFooter>
						</MDBModal>
					</MDBContainer>
				)}
			</MDBContainer>
		</div>
	);
}
