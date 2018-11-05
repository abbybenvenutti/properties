import React, { Component } from 'react';
import Owner from './Owner';
import Unit from './Unit';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			unit: '',
			firstName: '',
			lastName: '',
			submitted: false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.setState({
			unit: this.unit.value,
			firstName: this.firstName.value,
			lastName: this.lastName.value,
			submitted: true
		});
	}

	render() {
		console.log('state', this.state.unit);
		return (
			<div className="container">
				<h2> Search by Unit or by Resident's Name</h2>
				<form onSubmit={this.handleSubmit}>
					<input type="text" ref={(el) => (this.unit = el)} placeholder="Enter unit number" name="unit" />
					<input type="submit" value="Submit" onSubmit={this.handleSubmit} />
					<input
						type="text"
						ref={(el) => (this.firstName = el)}
						placeholder="Enter first name"
						name="firstName"
					/>
					<input
						type="text"
						ref={(el) => (this.lastName = el)}
						placeholder="Enter last name"
						name="lastName"
					/>
					<input type="submit" value="Submit" />
				</form>

				<div>
					{this.state.submitted && (this.state.firstName.length > 0 && this.state.lastName.length > 0) ? (
						<Owner data={this.state} />
					) : null}
					{this.state.unit.length > 0 ? <Unit num={this.state.unit} /> : null}
				</div>
			</div>
		);
	}
}

export default Home;
