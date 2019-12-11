import React, { useLayoutEffect, useState } from "react";


function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [bg, setBg] = useState("");
    const [color, setColor] = useState("")
  
    function getScrollHeight() {
      setScrollY(window.pageYOffset);
      if (scrollY >= 460) {
        setBg("navdark-bg");
        setColor("textcolor-change")
      } else {
        setBg("")
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
            <b className = {`${color}`}>Coursepedia</b>
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
              ADULTS <br/> 15 y.o
            </a>{" "}
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#services">
              KIDS <br/>  8-14 y.o
            </a>
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
              <h3 className="section-subheading text-muted">Find out activities what you want to learn</h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Find Recommendation Learning Course</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Add Recommendation Learning Course</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fa fa-circle fa-stack-2x text-primary"></i>
                <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 className="service-heading">Better Future with Qualified Trainer</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>Our Popular Courses</b>
              </h2>
              <h3 className="section-subheading text-muted">Choose what course by what do you want to learn</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Threads</h4>
                <p className="text-muted">Illustration</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Explore</h4>
                <p className="text-muted">Graphic Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Finish</h4>
                <p className="text-muted">Identity</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Lines</h4>
                <p className="text-muted">Branding</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Southwest</h4>
                <p className="text-muted">Website Design</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="" />
              </a>
              <div className="portfolio-caption">
                <h4>Window</h4>
                <p className="text-muted">Photography</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                <b>About Us</b>
              </h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/1.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2009-2011</h4>
                      <h4 className="subheading">Our Humble Beginnings</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2011</h4>
                      <h4 className="subheading">An Agency is Born</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>December 2012</h4>
                      <h4 className="subheading">Transition to Full Service</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt="" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>July 2014</h4>
                      <h4 className="subheading">Phase Two Expansion</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                    </div>
                  </div>
                </li>
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
                <b>Happy Students</b>
              </h2>
              <h3 className="section-subheading text-muted">Testimonials from students who found the best place to learn</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt="" />
                <h4>Kay Garland</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt="" />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Marketer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt="" />
                <h4>Diana Pertersen</h4>
                <p className="text-muted">Lead Developer</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fa fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt="" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">Copyright &copy; Your Website 2019</span>
            </div>
            <div className="col-md-4">
              <ul className="list-inline social-buttons">
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <i className="fa fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list-inline quicklinks">
                <li className="list-inline-item">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Home