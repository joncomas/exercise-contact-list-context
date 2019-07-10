import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export default class AddContact extends React.Component {
	constructor(props) {
		super(props);

		//this will be passed as the form values
		this.state = {
			fFullName: "",
			fEmail: "",
			fPhone: "",
			faddress: ""
		};

		this.actionContext = null;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.fFullName === "") {
			alert("Name is empty ");
		} else if (this.state.fEmail === "") {
			alert("Email is empty ");
		} else if (this.state.fPhone === "") {
			alert("Phone is empty ");
		} else if (this.state.faddress === "") {
			alert("Address is empty ");
		} else {
			alert(this.state);
			this.actionContext.addToSotage("https://assets.breatheco.de/apis/fake/contact/", {
				full_name: this.state.fFullName,
				email: this.state.fEmail,
				agenda_slug: "jbook",
				address: this.state.faddress,
				phone: this.state.fPhone
			});
		}
	}

	//Sends state to the fetch/post function

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					this.actionContext = actions;
					return (
						<div className="container">
							<div>
								<h1 className="text-center mt-5">Add a new contact</h1>
								<form onSubmit={this.handleSubmit}>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											name="fFullName"
											className="form-control"
											placeholder="Full Name"
											value={this.state.fFullName}
											onChange={this.handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											name="fEmail"
											type="email"
											className="form-control"
											id=""
											placeholder="Enter email"
											value={this.state.fEmail}
											onChange={this.handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											name="fPhone"
											type="phone"
											className="form-control"
											placeholder="Enter phone"
											value={this.state.fPhone}
											onChange={this.handleInputChange}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											name="faddress"
											type="text"
											className="form-control"
											placeholder="Enter address"
											value={this.state.faddress}
											onChange={this.handleInputChange}
										/>
									</div>
									<button type="Submit" className="btn btn-primary form-control">
										save
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
