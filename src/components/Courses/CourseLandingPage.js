import React, { useState, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar";
import AddNewFooter from "../../components/AddNewFooter";
import AdultsCourses from "./AdultsCourses/AdultsCourses";
import KidsCourses from "./KidsCourses/KidsCourses";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { userAuth } from "../../helpers/userAuth";

export default function CourseLandingPage() {
  let history = useHistory();
  const [state, setstate] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [display, setDisplay] = useState("");

  const handleClick = ageCategory => {
    setstate(ageCategory);
  };

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

  function getScrollHeight() {
    setScrollY(window.pageYOffset);
    if (scrollY >= 400) {
      setDisplay("floatbutton-show");
    } else {
      setDisplay("");
    }
  }

  useLayoutEffect(() => {
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
  }, [getScrollHeight]);

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
      {/* navbar */}
      <NavBar />
      {/* header */}
      <header className="mastheadcourse">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Coursepedia</div>
            <div className="intro-heading text-uppercase">Let's Choose Any Courses by Your Age Category</div>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#adult">
              ADULTS <br /> 15 y.o
            </a>{" "}
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#kids">
              KIDS <br /> 8-14 y.o
            </a>
          </div>
        </div>
      </header>
      {/* statement to chose which category*/}
      {/* {state === "adult" ? <AdultsCourses /> : null}
      {state === "kid" ? <KidsCourses /> : null} */}
      <AdultsCourses />
      <KidsCourses />
      <AddNewFooter />
    </div>
  );
}
