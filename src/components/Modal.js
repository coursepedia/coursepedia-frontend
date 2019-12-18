import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
// import { MDBInput } from "mdbreact";

import CommentBox from "./CommentBox";

function ModalPage() {
  const [toggle, setToggle] = useState(false);
  const [listCourses, setListCourses] = useState([]);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    axios
      .get("https://coursepediabackend.herokuapp.com/courses")
      .then(res => {
        console.log(res);
        setListCourses(res.data);
        // console.log(res.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  const handleClick = data => {
    setToggle(prevState => !prevState);
    console.log(data);
    setModalContent(data);
  };

  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              <b>Our Popular Courses</b>
            </h2>
            <h3 className="section-subheading text-muted">
              Find course according to your needs
            </h3>
          </div>
        </div>
        <div className="row">
          {listCourses.map((item, index) => {
            if (
              item.name === "Impact Byte" ||
              item.name === "Maison Bleu of Culinary Art" ||
              item.name ===
                "Alvin Adam Public Speaking and Communication School" ||
              item.name === "Ohayo Drawing School" ||
              item.name === "Anak Air Swim School" ||
              item.name === "Engineering For Kids"
            ) {
              return (
                <div name="course" className="col-md-4 col-sm-6 portfolio-item">
                  <span class="portfolio-link" data-toggle="modal">
                    <div
                      key={index}
                      className="portfolio-hover"
                      onClick={() => handleClick(item)}
                      data-target={`$item.id`}
                      data-toggle="modal"
                    >
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                  </span>
                  <div className="h-50">
                    <img
                      src={item.imageUrl}
                      alt="course"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="portfolio-caption">
                    <h4>{item.name}</h4>
                    <p className="text-muted">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "idr"
                      }).format(item.price)}
                    </p>
                    <br />
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a
              className="btn btn-primary btn-xl js-scroll-trigger"
              href="#services"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {Object.keys(modalContent).length !== 0 && (
        <MDBContainer name="modal">
          <MDBModal isOpen={toggle} size="lg" centered>
            <MDBModalBody>
              <>
                <MDBModalHeader class="text-uppercase">
                  {modalContent.name}
                </MDBModalHeader>
                <img
                  className="img-fluid d-block mx-auto"
                  src={modalContent.imageUrl}
                  alt=""
                />
              </>
              <div className="portofolio-caption">
                <ul class="list-inline">
                  <li>
                    <h4 className="orange-text">
                      {" "}
                      <Rating
                        name="read-only"
                        value={modalContent.rating}
                        readOnly
                      />{" "}
                      {modalContent.rating}
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
                    <span className="text-capitalize">
                      {modalContent.ageCategory}
                    </span>
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
                    <span className="text-capitalize">
                      {modalContent.fieldCategory}
                    </span>
                  </li>
                  <br />
                  {/* <li className="pb-2">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                        </span>
                      </div>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                     {modalContent.comments[0].users.username}
                    {modalContent.comments[0].content}

                  </li> */}
                  {/* <li className="pb-2"><strong>Telephone: </strong>{modalContent.comments}</li> */}
                  <CommentBox courseId={modalContent._id} />
                  {modalContent.comments &&
                    modalContent.comments.map((el, i) => (
                      <div key={i}>
                        <p>{el.users.username}</p>
                        <p>{el.content}</p>
                      </div>
                    ))}
                </ul>
                {/* <p className="text-muted">{modalContent.comments[0].ref}</p> */}
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
      {/* hidden modal scroll */}
      {toggle && (
        <style>
          {`
          body.modal-open {
            padding-right: 0 !important;
            overflow: hidden;
            }
            `}
        </style>
      )}
    </section>
  );
}

export default ModalPage;
