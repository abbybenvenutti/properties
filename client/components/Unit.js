import React, { Component } from 'react';
const data = require('../../secrets')

const Unit = props => {
  const unitNumber = props.num;
  const residents = [];

  for(let person of data.people) {
    if(person["unit"] === unitNumber.toString()){
      residents.push(person["first_name"] + " " + person["last_name"])
    }

  }
return (
residents.length > 0 ? <ul>Residents in this unit: {residents.join(", ")}</ul> : null
)
}


export default Unit
