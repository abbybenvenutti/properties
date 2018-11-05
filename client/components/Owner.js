import React, { Component } from 'react';
const data = require('../../secrets');

const Owner = (props) => {
	let current = props.data;

	for (let person of data.people) {
		if (person['first_name'] === current.firstName && person['last_name'] === current.lastName) {
			return (
				<ul>
					<li>Name: {person['first_name'] + ' ' + person['last_name']}</li>
					<li>Unit: {person.unit}</li>
					<li>Role(s): {person.roles.join(', ')}</li>
				</ul>
			);
		}
	}
};

export default Owner;
