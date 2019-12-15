import React, { useState, useEffect, useRef } from "react";
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

function ModalPage() {
  const [toggle, setToggle] = useState(false);
  const [listCourses, setListCourses] = useState([]);


  useEffect(() => {
    axios
      .get("https://coursepediabackend.herokuapp.com/courses")
      .then(res => {
        // console.log(res);
        setListCourses(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error.message));
  }, []);

  const handleClick = () => {
    setToggle(prevState => !prevState);
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
            if (item.rating === 5)
              return (
                <div
                  name="course"
                  className="col-md-4 col-sm-6 portfolio-item"
                >
                  <a className="portfolio-link">
                    <div
                      key = {index}
                      className="portfolio-hover"
                      onClick={handleClick}
                      data-target={`$item.id`}
                      data-toggle="modal"
                    >
                      <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={item.imageUrl} alt="" />
                  </a>
                  <div className="portfolio-caption">
                    <h4>{item.name}</h4>
                    <p className="text-muted">
                      Rp{" "}
                      {item.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      , 00
                    </p>
                    <br />
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                  </div>
                  {/* Modal */}
                  <MDBContainer key ={index} name="modal">
                    <MDBModal isOpen={toggle} size="lg" centered>
                      <MDBModalHeader>{item.name}</MDBModalHeader>
                      <MDBModalBody>
                        <>
                          <img
                            className="img-fluid"
                            src={item.imageUrl}
                            alt=""
                          />
                        </>
                        <div className="portofolio-caption">
                          <p className="text-muted">
                            Rp{" "}
                            {item.price
                              .toString()
                              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                            , 00 
                          </p>
                        </div>
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={handleClick}>
                          Close
                        </MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                      </MDBModalFooter>
                    </MDBModal>
                  </MDBContainer>
                </div>
              );
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
    </section>
  );
}

export default ModalPage;
