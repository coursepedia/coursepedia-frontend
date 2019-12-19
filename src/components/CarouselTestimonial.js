import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";
import "../Carousel.css";

import student1alpha from "../assets/images/students/students-1-removebg-preview.png";
import student2alpha from "../assets/images/students/students-2-removebg-preview.png";
import student3alpha from "../assets/images/students/students-3-removebg-preview.png";

function CarouselTestimonial() {
  return (
    <>
      <section className="bg-light page-section" id="team">
        <MDBContainer>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>What our students have to say</b>
              </h2>
              <h3 className="section-subheading text-muted">
                Testimonials from our students
              </h3>
            </div>
          </div>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
            style={{ backgroundColor: "white" }}
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="team-img pull-right">
                        <img
                          src={student1alpha}
                          alt="First Slide"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="team-info">
                        <h3>Sundar Pichai</h3>
                        <h6>Engineering Course Student</h6>
                        <div className="team-div"></div>
                        <p>
                          Through Coursepedia, i evolve from an ordinary student
                          to extraordinary students in high school. Coursepedia
                          really help me to find the right course for me.
                        </p>
                        <ul className="list-inline social-buttons">
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="team-img pull-right">
                        <img
                          src={student2alpha}
                          alt="Second Slide"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="team-info">
                        <h3>Mark Zuckerberg</h3>
                        <h6>Communication Course Student</h6>
                        <div className="team-div"></div>
                        <p>
                          I have a bad skill in communication. Trying to solve
                          that problem, i google every information in the
                          internet to find something that can help my
                          communication skill. In the process of searching, i
                          stumble upon Coursepedia and found that there is a
                          Communication course teached by the expert with good
                          reviews. So far the experience is good, so i recommend
                          you to try Coursepedia if you got same problem as me.
                        </p>
                        <ul className="list-inline social-buttons">
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="team-img pull-right">
                          <img
                            src={student3alpha}
                            alt="Third Slide"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="team-info">
                          <h3>Tim Cook</h3>
                          <h6>Programming Course Student</h6>
                          <div className="team-div"></div>
                          <p>
                            When i search for job online, i found many of it are
                            programming jobs. At that time, i don't have any
                            programming skills. So i try to search the internet,
                            but instead of helping me to understand programming,
                            deep down it make me more confused. My friend tell
                            me back then to try Coursepedia, and i really
                            thankful to my friend for that information. I find
                            the right programming coruse for me and then land a
                            job as programmer.
                          </p>
                          <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                              <a href="">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="">
                                <i className="fa fa-linkedin"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </section>
    </>
  );
}

export default CarouselTestimonial;
