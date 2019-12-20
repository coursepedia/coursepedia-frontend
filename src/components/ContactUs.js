import React, { Component } from "react";
// import Layout from '../components/layout'
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import axios from "axios";

import { BACKEND_URI } from "../helpers/path";
import { white } from "ansi-colors";

export default class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      error: "",
      status: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { error, status, ...bodyMessage } = this.state;
    axios
      .post(BACKEND_URI + "/users/send-email-to-user", bodyMessage)
      .then(result => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
          success: result.data.message
        });
      })
      .catch(error => {
        if (error) {
          if (error.response) {
            this.setState({ ...this.state, error: error.response.data.message });
          } else {
            this.setState({ ...this.state, error: error.message });
          }
        }
      });
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <>
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">For criticism and suggestions about this web, please contact us directly via form below. </h3>
              </div>
            </div>
            {this.state.success && <h1 style={{ color: "white", textAlign: "center" }}>{this.state.success}</h1>}
            {this.state.error && <h1 style={{ color: "red", textAlign: "center" }}>{this.state.error}</h1>}
            <div className="row">
              <div className="col-lg-12">
                <form
                  id="contactForm"
                  name="sentMessage"
                  noValidate="noValidate"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange.bind(this, "name")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange.bind(this, "email")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="subject"
                          type="text"
                          placeholder="Your Subject *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                          name="subject"
                          value={this.state.subject}
                          onChange={this.handleChange.bind(this, "subject")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          type="textarea"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                          name="message"
                          value={this.state.message}
                          onChange={this.handleChange.bind(this, "message")}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
