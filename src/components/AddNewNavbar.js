import React, { useLayoutEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { userAuth } from "../helpers/userAuth";
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from '@material-ui/icons/Edit';

function AddNewNavbar() {
  let history = useHistory();
  const [scrollY, setScrollY] = useState(0);
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");
  const [display, setDisplay] = useState("");

  // const floatButtonStyle = {
  //   display: "none",
  //   margin: 0,
  //   top: "auto",
  //   right: 20,
  //   bottom: 40,
  //   left: "auto",
  //   position: "fixed",
  //   transition: "display 2s ease"
  // };

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

  return (
    <div>
      {/* floating action button */}
      {/* <div>
        <Fab style={floatButtonStyle} className={display} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div> */}

      <nav
        style={{ transition: "0.75s ease" }}
        className={`navbar navbar-expand-lg ${bg} fixed-top`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <b className={`${color}`}>Coursepedia</b>
          </a>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              {/* <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#services">
                  Awesome Feature
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className={`nav-link ${color} js-scroll-trigger`}
                  href="#courses"
                  onClick={() => history.push("/")}
                >
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${color} js-scroll-trigger`} href="#team">
                  Testimonials
                </a>
              </li> */}
              <li className="nav-item">
                <a
                  className={`nav-link ${color} js-scroll-trigger`}
                  href="#portofolio"
                  onClick={() => history.push("/")}
                >
                  Courses
                </a>
              </li>
            </ul>
            <ButtonGroup>
              {/* <Button variant="outlined" color="primary" className={`nav-link ${color} js-scroll-trigger`} onClick={() => history.push("/register")}>
                Sign Up
              </Button> */}
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
            </ButtonGroup>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-norm">
              Know recommended course out there that's not in our list ?
            </div>
            <div className="intro-heading text-uppercase">Please Tell Us !</div>
            <a
              className="btn btn-primary padding-sml btn-xl js-scroll-trigger"
              href="#form-add"
            >
              Get Form
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default AddNewNavbar;
