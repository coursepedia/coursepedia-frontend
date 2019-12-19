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
    <div>
      <div className="row">
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="team-img pull-right">
                        <img
                          src={student1alpha}
                          alt=""
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="team-info">
                        <h3>John Doe</h3>
                        <h6>Enginnering Student</h6>
                        <div className="team-div"></div>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ea illum voluptatem dicta numquam molestias,
                          obcaecati est atque? Consequuntur tenetur, perferendis
                          vel repellat, tempore sequi in fuga inventore qui nisi
                          blanditiis?
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="team-img pull-right">
                      <img
                        src={student2alpha}
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-info">
                      <h3>Mark Zuckerberg</h3>
                      <h6>Enginnering Student</h6>
                      <div className="team-div"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea illum voluptatem dicta numquam molestias, obcaecati
                        est atque? Consequuntur tenetur, perferendis vel
                        repellat, tempore sequi in fuga inventore qui nisi
                        blanditiis?
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
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="team-img pull-right">
                      <img
                        src={student3alpha}
                        alt=""
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="team-info">
                      <h3>Tim Cook</h3>
                      <h6>Enginnering Student</h6>
                      <div className="team-div"></div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ea illum voluptatem dicta numquam molestias, obcaecati
                        est atque? Consequuntur tenetur, perferendis vel
                        repellat, tempore sequi in fuga inventore qui nisi
                        blanditiis?
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
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    </div>
  );
}

export default CarouselTestimonial;
