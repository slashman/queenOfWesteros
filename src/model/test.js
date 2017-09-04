/* jshint node: true */
"use strict";

const model = require('./model');

function assert(expected, actual){
	if (expected != actual){
		throw new Error("Expected: ["+expected+"] but got ["+actual+"]");
	}	
}


// Test 1
model.startDay();
let knownInfo = model.getKnownLocationInfo();
//console.log(JSON.stringify(knownInfo, null, 4));
assert(8000, knownInfo.find(l=>l.id==="DRAGONSTONE").units.find(u=>u.type.id==="UNSULLIED").q);

// Test 2
let attackCasterlyRock = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "CASTERLY_ROCK",
	units: [
		{type: "UNSULLIED", q: 5000},
		{type: "SCREAMER", q: 1000},
	]
};

const result = model.planAction(attackCasterlyRock);

assert("Attack Lannister troops", result.planDescription);
assert(24, result.days);

// Test 3

model.scheduleAction(attackCasterlyRock);

knownInfo = model.getKnownLocationInfo();
assert(3000, knownInfo.find(l=>l.id==="DRAGONSTONE").units.find(u=>u.type.id==="UNSULLIED").aq);
assert(8000, knownInfo.find(l=>l.id==="DRAGONSTONE").units.find(u=>u.type.id==="UNSULLIED").q);
assert(49000, knownInfo.find(l=>l.id==="DRAGONSTONE").units.find(u=>u.type.id==="SCREAMER").aq);
assert(50000, knownInfo.find(l=>l.id==="DRAGONSTONE").units.find(u=>u.type.id==="SCREAMER").q);


// Test 4
let moveToDorne = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "SUNSPEAR",
	units: [
		{type: "RAIDER", q: 100}
	]
};

const dornePlan = model.planAction(moveToDorne);

assert("Merge with Martell troops", dornePlan.planDescription);
assert(20, dornePlan.days);

// Test 5
let occupyDreadfort = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "DREADFORT",
	units: [
		{type: "RAIDER", q: 100}
	]
};

const dreadfortPlan = model.planAction(occupyDreadfort);

assert("Occupy Dreadfort", dreadfortPlan.planDescription);

// Test 6
model.scheduleAction(attackCasterlyRock);
assert(2, model.getScheduledActions().length);