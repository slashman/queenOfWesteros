/* jshint node: true */
"use strict";

const LOCATIONS = require('./locations');
const REAL_INFO = require('./startingStatus'); 
const UNIT_TYPES = require('./unitTypes');

let knownInfo = false;
const scheduledActions = [];
const playerDomainId = "TARGARYEN";
const ACTION_TYPES = ["MOVE_TROOPS"];

module.exports = {
	startDay: function(){
		knownInfo = LOCATIONS.map((l)=>Object.assign({}, l, REAL_INFO[l.id]));
		// All units are available by default
		knownInfo.forEach((l)=>l.units && l.units.forEach((u)=> u.aq = u.q));
	},
	getKnownLocationInfo: function(){
		//TODO: In the future, calculate "known info" based on previously known info+spies
		if (!knownInfo)
			this.startDay();
		return knownInfo;
	},
	planAction: function(a){
		this.validateAction(a);
		if (!knownInfo){
			this.getKnownLocationInfo();
		}
		const destination = knownInfo.find((l)=>l.id === a.to);
		const origin = knownInfo.find((l)=>l.id === a.from);
		let planDescription = false;
		if (destination.domain && destination.domain.id === playerDomainId){
			planDescription = "Merge with "+destination.house.name+" troops";
		} else if (destination.house){
			planDescription = "Attack "+destination.house.name+" troops";
		} else {
			planDescription = "Occupy "+destination.name;
		}
		const days = Math.ceil((Math.abs(destination.x-origin.x)+Math.abs(destination.y-origin.y))/25);
		return {
			planDescription: planDescription,
			days: days
		}
	},
	scheduleAction: function(a){
		this.validateAction(a);
		scheduledActions.push(a);
		// Reduce amount of available troops
		const location = knownInfo.find((l)=>l.id===a.from);
		a.units.forEach(au=>location.units.forEach(lu => lu.type.id == au.type ? lu.aq -= au.q : false));
	},
	validateAction: function(a){
		/*
		 {
			type: "MOVE_TROOPS",
			from: "DRAGONSTONE",
			to: "CASTERLY_ROCK"
			units: [
				{
					type: "CAVALRY",
					q: 100
				}
			]
		 }
		 */
		validate(typeof a, "object", "Action must be an object");
		validate(typeof a.type, 'string', "Action.type must be a string");
		validateNot(ACTION_TYPES.indexOf(a.type), -1, "Action.type must be one of ["+ACTION_TYPES+"]");
		validateNot(LOCATIONS.find(l=>l.id === a.from), undefined, "Invalid from location: ["+a.from+"]");
		validateNot(LOCATIONS.find(l=>l.id === a.to), undefined, "Invalid to location: ["+a.to+"]");
		validate(a.units instanceof Array, true, "Action.units must be an array");
		a.units.forEach(u=>{
			validate(typeof u.type, 'string');
			validate(typeof u.q, 'number');
			validateNot(UNIT_TYPES[u.type], undefined, "Invalid unit type: ["+u.type+"]");
		})
		
	},
	getScheduledActions: function(){
		return scheduledActions;
	}

};

function validate(actual, expected, message){
	if (actual != expected){
		if (message){
			throw new Error(message);
		} else {
			throw new Error("Required: ["+expected+"] but got ["+actual+"]");
		}
	}	
}

function validateNot(actual, unexpected, message){
	if (actual === unexpected){
		if (message){
			throw new Error(message);
		} else {
			throw new Error("Required not to be ["+unexpected+"]");
		}
	}	
}