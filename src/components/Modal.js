import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";

function ModalPage() {
  const [toggle, setToggle] = useState(false);
  const [listCourses, setListCourses] = useState([]);
  const [modalContent, setModalContent] = useState({});

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
            <h3 className="section-subheading text-muted">Find course according to your needs</h3>
          </div>
        </div>
        <div className="row">
          {listCourses.map((item, index) => {
            if (item.name === "Impact Byte" || item.name === "Maison Bleu of Culinary Art" || item.name === "Alvin Adam Public Speaking and Communication School" || item.name === "Ohayo Drawing School" || item.name === "Anak Air Swim School" || item.name === "Engineering For Kids")
              return (
                <div name="course" className="col-md-4 col-sm-6 portfolio-item">
                  <span class="portfolio-link" data-toggle="modal">
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
                    <p className="text-muted">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "idr" }).format(item.price)}</p>
                    <br />
                    <Box component="fieldset" mb={3} borderColor="transparent">
                      <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                  </div>
                </div>
              );
          })}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services">
              View More
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {Object.keys(modalContent).length !== 0 && (
        <MDBContainer name="modal">
          <MDBModal isOpen={toggle} size="lg" centered>
            <MDBModalHeader>{modalContent.name}</MDBModalHeader>
            <MDBModalBody>
              <>
                <img className="img-fluid" src={modalContent.imageUrl} alt="" />
              </>
              <div className="portofolio-caption">
                <p className="text-muted">{new Intl.NumberFormat("id-ID", { style: "currency", currency: "idr" }).format(modalContent.price)}</p>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={handleClick}>
                Close
              </MDBBtn>
              {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      )}
    </section>
  );
}

export default ModalPage;
