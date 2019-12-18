import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBBtn, MDBCol } from "mdbreact";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import { BACKEND_URI } from "../../../helpers/path";
import CourseCategory from "../CourseCategory";
class KidsCourses extends Component {
  constructor() {
    super();
    this.state = {
      allKidsData: []
    };
  }

  getKidsData = () => {
    axios.get(`${BACKEND_URI}/courses/`).then(result => {
      result.data.map(item => {
        if (item.ageCategory === "kids") {
          this.setState({
            allKidsData: [...this.state.allKidsData, item]
          });
        }
      });
    });
  };

  componentDidMount() {
    this.getKidsData();
  }

  render() {
    const { url } = this.props.match;
    let query = new URLSearchParams(this.props.location.search);
    console.log(url, "ini URLLLLLLLLLLLLL");
    console.log(query, "ini QUERYYYYYYYYYYYYYYYYYYY");
    return (
      <div>
        {/* header */}
        <MDBContainer>
          <section className="page-section-courses" id="kids">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">
                    <h3>
                      <b>Kid's Courses</b>
                    </h3>
                  </h2>
                  <h3 className="section-subheading text-muted">
                    Find out activities what you want to learn
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </MDBContainer>
        {/* buttons */}
        <MDBContainer>
          <MDBRow>
            <MDBCol size="3">
              <Link to={`${url}/showall?ageCategory=kids`}>
                <MDBBtn color="light-green">Show All</MDBBtn>
              </Link>
              {/* Show All */}
            </MDBCol>
            <MDBCol size="3">
              <Link to={`${url}/showall?ageCategory=kids&fieldCategory=art`}>
                <MDBBtn color="light-green">Art</MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol size="3">
              <Link to={`${url}/showall?ageCategory=kids&fieldCategory=sport`}>
                <MDBBtn color="light-green">Sport</MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol size="3">
              <Link
                to={`${url}/showall?ageCategory=kids&fieldCategory=math and science`}
              >
                <MDBBtn color="light-green">Math & Science</MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
          <br />
          <br />
        </MDBContainer>

        <CourseCategory
          fieldCategory={query.get("fieldCategory")}
          data={this.state.allKidsData}
        />
      </div>
    );
  }
}

export default withRouter(KidsCourses);
