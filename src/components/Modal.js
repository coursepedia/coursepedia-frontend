import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";

import avatar from "../assets/images/dummy-avatar.png";
// import { MDBInput } from "mdbreact";
import CommentBox from "./CommentBox";
import { BACKEND_URI } from "../helpers/path";
import { userAuth } from "../helpers/userAuth";

function ModalPage() {
  let history = useHistory();
  const [toggle, setToggle] = useState(false);
  const [listCourses, setListCourses] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(BACKEND_URI + "/courses")
      .then(res => {
        setListCourses(res.data);
      })
      .catch(error => {
        if (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      });
  }, []);

  const handleClick = data => {
    setToggle(prevState => true);
    setModalContent(data);
    console.log(data);
  };

  const handleClickDirection = data => {
    let encodedAlamat = encodeURI(data);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAlamat}&travelmode=walking

    `,
      "_blank"
    );
  };

  const refreshData = () => {
    axios
      .get(BACKEND_URI + "/courses")
      .then(res => {
        setListCourses(res.data);
      })
      .catch(error => {
        if (error) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError(error.message);
          }
        }
      });
  };

  const closeModal = () => {
    setToggle(prevState => false);
    refreshData();
  };

  return (
    <section className="bg-light page-section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              <b>Our Popular Courses</b>
            </h2>
            <h3 className="section-subheading text-muted">Find course according to your needs</h3>
          </div>
        </div>
        <div className="row">
          {listCourses.map((item, index) => {
            if (item.name === "Impact Byte" || item.name === "Maison Bleu of Culinary Art" || item.name === "Alvin Adam Public Speaking and Communication School" || item.name === "Ohayo Drawing School" || item.name === "Anak Air Swim School" || item.name === "Engineering For Kids") {
              return (
                <div name="course" className="col-md-4 col-sm-6 portfolio-item" key={index}>
                  <span className="portfolio-link" data-toggle="modal">
                    <div key={index} className="portfolio-hover" onClick={() => handleClick(item)} data-target={`$item.id`} data-toggle="modal">
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                  </span>
                  <div className="h-50">
                    <img src={item.imageUrl} alt="course" height="100%" width="100%" />
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
            <a className="btn btn-primary btn-xl js-scroll-trigger" onClick={() => history.push("/courses")}>
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {Object.keys(modalContent).length !== 0 && (
        <MDBContainer>
          <MDBModal isOpen={toggle} size="lg" centered>
            <MDBModalBody>
              <>
                <MDBModalHeader className="text-uppercase">{modalContent.name}</MDBModalHeader>
                <img className="img-fluid-modal d-block mx-auto" src={modalContent.imageUrl} alt="course-img" />
              </>
              <div className="portofolio-caption">
                <ul className="list-inline">
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
                  {/* <li className="pb-2">
                    <strong>Age: </strong>
                    <span className="text-capitalize">{modalContent.ageCategory}</span>
                  </li> */}
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
                  {modalContent.comments ? (
                    modalContent.comments.map((el, i) => (
                      <div key={i}>
                        <p>{el.users.username}</p>
                        <p>{el.content}</p>
                      </div>
                    ))
                  ) : (
                    <div>Belum ada komentar tentang course ini</div>
                  )}
                </ul>
                {userAuth.isAuthenticated ? <CommentBox courseId={modalContent._id} modalContent={modalContent} setModalContent={setModalContent} /> : <div>Silahkan login untuk bisa memberikan komentar untuk course ini</div>}
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="primary" onClick={() => handleClickDirection(modalContent.address)}>
                Direction
              </MDBBtn>
              <MDBBtn color="secondary" onClick={closeModal}>
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
