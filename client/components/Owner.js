import React, { Component } from 'react';
const data = require('../../secrets');


const Owner = (props) => {
  let current = props.data;
  let devices = []

	for (let person of data.people) {
		if (person['first_name'] === current.firstName && person['last_name'] === current.lastName) {

      if(person["roles"].indexOf("Admin") !== -1){

        // for(let item of data.devices) {
          // if((data.devices["unit"] === props.data.unit) && person["admin_accessible"]) {
          //   devices.push(data.devices.model)
          //   console.log("data", devices)
          // }
        }
      // }
			return (
				<ul>
					<li>Name: {person['first_name'] + ' ' + person['last_name']}</li>
					<li>Unit: {person.unit}</li>
					<li>Role(s): {person.roles.join(', ')}</li>
          <li>Devices:</li>
				</ul>

			);
		}
	}
};

export default Owner;
