import React, { Component } from "react";
// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import { BACKEND_URI } from "../helpers/path";

export default class ContactUs extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: ""
		};
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		axios.post(BACKEND_URI + "/users/send-email-to-user", this.state)
			.then(result => {
				console.log(result);
			})
			.catch(error => console.log(error));
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
								<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<form id="contactForm" name="sentMessage" noValidate="noValidate" onSubmit={this.handleSubmit}>
									<div className="row">
										<div className="col-md-6">
											<div className="form-group">
												<input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." name="name" value={this.state.name} onChange={this.handleChange.bind(this, "name")} />
												<p className="help-block text-danger"></p>
											</div>
											<div className="form-group">
												<input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." name="email" value={this.state.email} onChange={this.handleChange.bind(this, "email")} />
												<p className="help-block text-danger"></p>
											</div>
											<div className="form-group">
												<input className="form-control" id="subject" type="text" placeholder="Your Subject *" required="required" data-validation-required-message="Please enter your phone number." name="subject" value={this.state.subject} onChange={this.handleChange.bind(this, "subject")} />
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<textarea className="form-control" id="message" type="textarea" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." name="message" value={this.state.message} onChange={this.handleChange.bind(this, "message")} />
												<p className="help-block text-danger"></p>
											</div>
										</div>
										<div className="clearfix"></div>
										<div className="col-lg-12 text-center">
											<div id="success"></div>
											<button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">
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
