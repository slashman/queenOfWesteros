/* jshint node: true */
"use strict";

const LOCATIONS = require('./locations');
const REAL_INFO = require('./startingStatus'); 
const UNIT_TYPES = require('./unitTypes');
const HOUSES = require('./houses');
const combat = require('./combat');
const rand = require('./rand');

let knownInfo = false;
let scheduledActions = [];
const playerHouse = HOUSES.TARGARYEN;
const ACTION_TYPES = ["MOVE_TROOPS"];

const model = {
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
		if (destination.domain && destination.domain.id === playerHouse.id){
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
		};
	},
	scheduleAction: function(a, house){
		if (!house){
			house = playerHouse;
		}
		a = Object.assign({}, a, this.planAction(a));
		a.pendingDays = a.days;
		scheduledActions.push(a);
		// Reduce amount of available troops
		const location = knownInfo.find((l)=>l.id===a.from);
		a.units.forEach(au=>location.units.forEach(lu => lu.type.id == au.type ? lu.aq -= au.q : false));
		a.totalUnits = a.units.reduce((s,u)=>s+u.q, 0);
		a.playerDomain = house.id;
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
		});
	},
	getScheduledActions: function(){
		return scheduledActions;
	},
	getAction: function(house){
		// Pick a random domain
		// Pick one of the units therein
		// Move it to a random place
		let from = this.getRandomDomain(house);
		if (!from){
			// Defeated!
			return false;
		}
		let to = this.getRandomDestination(house);
		if (!to){
			//Won!
			return false;
		}
		const unit = this.rand.of(from.units);

		return {
			type: "MOVE_TROOPS",
			to: to.id,
			from: from.id,
			units: [
				{
					type: unit.type.id,
					q: unit.q
				}
			]
		};
	},
	getRandomDomain: function(house){
		const domains = this.getKnownLocationInfo().filter(l=>l.domain === house && l.units.length > 0);
		if (domains === undefined){
			return false;
		}
		return this.rand.of(domains);
	},
	getRandomDestination: function(house){
		const domains = this.getKnownLocationInfo().filter(l=>l.domain != house);
		return this.rand.of(domains);
	},
	enableEnemies: true,
	simulateDay: function(){
		const actions = [];
		if (this.enableEnemies){
			// Make the enemies schedule actions
			for (var i = 0; i < 3; i++){
				let action = this.getAction(HOUSES.LANNISTER);
				if (action){
					this.scheduleAction(action, HOUSES.LANNISTER);
				}
				action = this.getAction(HOUSES.STARK);
				if (action){
					this.scheduleAction(action, HOUSES.STARK);
				}
			}
		}
		// Execute all scheduled player actions
		scheduledActions.forEach(a=>{
			const destination = knownInfo.find((l)=>l.id === a.to);
			if (a.pendingDays === 0){
				// Let's try to land here!
				if (destination.domain && destination.domain.id === a.playerDomain){
					destination.units = destination.units.concat(a.units.map(u => ({q: u.q, type: UNIT_TYPES[u.type]})));
					if (a.playerDomain === playerHouse.id){
						actions.push("Our "+a.totalUnits+" soldiers reached "+destination.name+" and merged with "+destination.house.name+" troops");
					} else {
						actions.push(a.totalUnits+" "+a.playerDomain+" soldiers reached "+destination.name+" and merged with "+destination.house.name+" troops");
					}
					a.toRemove = true;
				} else if (destination.house){
					let outcome = combat.attack(a, actions);
					if (outcome === 'win'){
						this.occupy(a);
						a.toRemove = true;
					} else if (outcome === 'lose'){
						a.toRemove = true;
					}
				} else {
					if (a.playerDomain === playerHouse.id){
						actions.push("Our "+a.totalUnits+" soldiers reached and occupied "+destination.name);
					} else {
						actions.push(a.totalUnits+" "+a.playerDomain+" soldiers reached and occupied "+destination.name);
					}
					this.occupy(a);
					a.toRemove = true;
				}
			} else {
				a.pendingDays --;
				if (a.playerDomain === playerHouse.id){
					actions.push("Our "+a.totalUnits+" soldiers will reach "+destination.name+" in "+a.pendingDays+" days");
				} else {
					// This is not shown, intentionally, to make it cooler
				}
			}
		});
		scheduledActions = scheduledActions.filter(a=>!a.toRemove);
		return actions;
	},
	occupy: function(a){
		const destination = knownInfo.find((l)=>l.id === a.to);
		destination.units = a.units.map(u => ({q: u.q, type: UNIT_TYPES[u.type]}));
		destination.domain = playerHouse;
		destination.house = playerHouse;
	},
	inject: function(rand, playerHouse){
		this.rand = rand;
		combat.inject(this, rand, playerHouse);
	}
};

//combat.inject(model, rand, playerHouse);

model.inject(rand, playerHouse);

module.exports = model;

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