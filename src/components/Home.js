import React, { useLayoutEffect, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
// import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import { makeStyles } from '@material-ui/core/styles';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
// import EditIcon from '@material-ui/icons/Edit';
// import Box from "@material-ui/core/Box";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';
import axios from "axios";
import ModalPage from "./Modal";
import { UserContext } from "./UserContext";
import { userAuth } from "../helpers/userAuth";
import ContactUs from "./ContactUs";
import CarouselTestimonial from "./CarouselTestimonial";
import { BACKEND_URI } from "../helpers/path";
// import AuthButton from "./AuthButton";

function Home() {
  let history = useHistory();
  const [scrollY, setScrollY] = useState(0);
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("");
  const [users] = useContext(UserContext);

  // const [listCourses, setListCourses] = useState([]);
  // const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(BACKEND_URI + "/courses")
  //     .then(res => {
  //       setListCourses(res.data);
  //     })
  //     .catch(error => console.log(error.message));
  // }, []);

  const floatButtonStyle = {
    display: "none",
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 40,
    left: "auto",
    position: "fixed",
    transition: "display 2s ease"
  };

  useLayoutEffect(() => {
    function getScrollHeight() {
      setScrollY(window.pageYOffset);
      if (scrollY >= 400) {
        setBg("navdark-bg");
        setColor("textcolor-change");
        setDisplay("floatbutton-show");
      } else {
        setBg("");
        setColor("");
        setDisplay("");
      }
    }

    function watchScroll() {
      window.addEventListener("scroll", getScrollHeight);
    }

    watchScroll();

    return () => {
      window.removeEventListener("scroll", getScrollHeight);
    };
    // (window).scroll(function(){
    //   ('nav').toggleClass('scroll', (this).scrollTop() > 50);
    // });
  }, [scrollY]);

  const handleFab = () => {
    if (userAuth.isAuthenticated) {
      history.push("/add-course");
    } else {
      history.push("/login");
    }
  };

  return (
    <div>
      {/* floating action button */}
      <div onClick={handleFab}>
        <Fab style={floatButtonStyle} className={display} color="primary" aria-label="add">
          <span className="tooltiptext">Adding Recommendation Course</span>
          <AddIcon />
        </Fab>
      </div>
      <nav style={{ transition: "0.75s ease" }} className={`navbar navbar-expand-lg ${bg} fixed-top`} id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <b className={`${color}`}>Coursepedia</b>
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#services">
                  Awesome Feature
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#portfolio">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#team">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            {userAuth.isAuthenticated ? (
              // `Welcome, ${users.username} !`,
              <div>
                <span>
                  <b>
                    <i>Welcome {users.username} ! </i>
                  </b>
                </span>
                <Button
                  variant="contained"
                  color="primary"
                  className={`nav-link ${color} js-scroll-trigger`}
                  onClick={() => {
                    userAuth.signout(() => history.push("/"));
                  }}
                >
                  logout
                </Button>
              </div>
            ) : (
              <ButtonGroup>
                <Button variant="outlined" color="primary" className={`nav-link ${color} js-scroll-trigger`} onClick={() => history.push("/register")}>
                  Sign Up
                </Button>
                <Button variant="contained" color="primary" className={`nav-link ${color} js-scroll-trigger`} onClick={() => history.push("/login")}>
                  Login
                </Button>
              </ButtonGroup>
            )}
          </div>
        </div>
      </nav>
      {/* Login Popover */}
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-norm">Welcome To Coursepedia</div>
            <div className="intro-heading text-uppercase">Find Recommended Courses Easily</div>
            {/* <a
              onClick={() => history.push("/courses")}
              className="btn btn-primary padding-sml btn-xl js-scroll-trigger"
              href="#services"
            >
              Courses
            </a> */}
          </div>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>Awesome Feature</b>
              </h2>
              <h3 className="section-subheading text-muted">Find out our best feature</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-search fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Find Recommended Course</h4>
              <p className="text-muted">Through Coursepedia you can find many course carefully selected by our team and other Coursepedia users</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Add Recommended Course</h4>
              <p className="text-muted">Know a good course out there that's not in our list ? Don't worry, as we humbly accept recommendation from our users</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-check fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Qualified Trainer</h4>
              <p className="text-muted">The course listed in Coursepedia are carefully selected by our team, to ensure that, they are qualified up to standard established by our best consultant </p>
            </div>
          </div>
        </div>
      </section>
      <ModalPage />
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>About Us</b>
              </h2>
              <h3 className="section-subheading text-muted">Timeline of Coursepedia creation</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid-modal" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2019</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body"></div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid-modal" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>January 2020</h4>
                      <h4 className="subheading">Planning The Future Ahead</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">New year, new challenge. We have many plan for the future ahead. Stay tune!</p>
                    </div>
                  </div>
                </li>{" "}
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>What our students have to say</b>
              </h2>
              <h3 className="section-subheading text-muted">Testimonials from our students</h3>
            </div>
          </div>
          {/* <CarouselTestimonial /> */}
          <CarouselTestimonial />
        </div>
      </section>

      <ContactUs />

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="https://www.twitter.com">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.facebook.com">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li className="list-inline-item">
                  <a href="https://www.linkedin.com">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">Privacy Policy</li>
                <li className="list-inline-item">Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
