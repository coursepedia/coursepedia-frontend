import React, { useLayoutEffect, useState } from "react";

function TemplateHome() {
  const [scrollY, setScrollY] = useState(0);
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");

  function getScrollHeight() {
    setScrollY(window.pageYOffset);
    if (scrollY >= 460) {
      setBg("navdark-bg");
      setColor("textcolor-change");
    } else {
      setBg("");
      setColor("");
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
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${bg} fixed-top`} id="mainNav">
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
                <a className="nav-link js-scroll-trigger" href="#services">
                  Awesome Feature
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#portfolio">
                  Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">Welcome To Coursepedia</div>
            <div className="intro-heading text-uppercase">Find Recommended Courses Easily</div>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services">
              ADULTS <br /> 15 y.o
            </a>{" "}
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services">
              KIDS <br /> 8-14 y.o
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default TemplateHome;
