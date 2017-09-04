/* jshint node: true */
"use strict";

const model = require('../model');
// TODO: Inject mock RNG
const mockRand = {
	range: function(a, b){
		return b;
	}
};

model.inject(mockRand);

function assert(expected, actual){
	if (expected != actual){
		throw new Error("Expected: ["+expected+"] but got ["+actual+"]");
	} else {
		console.log("+ Got ["+actual+"]");
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
model.scheduleAction(occupyDreadfort);
assert(2, model.getScheduledActions().length);

// Test 7
model.scheduleAction(moveToDorne);
let attackWinterfell = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "WINTERFELL",
	units: [
		{type: "RAIDER", q: 100000}
	]
};
model.scheduleAction(attackWinterfell);

//console.log(model.getScheduledActions());
let actions = model.simulateDay();
//console.log(actions);
assert("Our 6000 soldiers will reach Casterly Rock in 23 days", actions[0]);
assert("Our 100 soldiers will reach Dreadfort in 31 days", actions[1]);
assert("Our 100 soldiers will reach Sunspear in 19 days", actions[2]);
for (var i = 0; i < 19; i++){
	model.simulateDay()	
}
knownInfo = model.getKnownLocationInfo();
assert(5, knownInfo.find(l=>l.id==="SUNSPEAR").units.length);
actions = model.simulateDay();
// Merge with friends
assert("Our 100 soldiers reached Sunspear and merged with Martell troops", actions[2]);
assert(6, knownInfo.find(l=>l.id==="SUNSPEAR").units.length);
actions = model.simulateDay();
assert(3, actions.length);
model.simulateDay()	
model.simulateDay();
actions = model.simulateDay();
// Be defeated
assert("We have been defeated at Casterly Rock, we lost 6000 soldiers, and killed 0 defenders", actions[0]);
assert("LANNISTER", knownInfo.find(l=>l.id==="CASTERLY_ROCK").house.id);
assert("LANNISTER", knownInfo.find(l=>l.id==="CASTERLY_ROCK").domain.id);
assert("Our 100 soldiers will reach Dreadfort in 7 days", actions[1]);
for (var i = 0; i < 7; i++){
	model.simulateDay()	
}
// Occupy territory
actions = model.simulateDay();
assert("Our 100 soldiers reached and occupied Dreadfort", actions[0]);
for (var i = 0; i < 5; i++){
	model.simulateDay()	
}
// Conquer territory
assert(6, knownInfo.find(l=>l.id==="WINTERFELL").units.length);
actions = model.simulateDay();
assert("We have conquered Winterfell, we lost about 0 soldiers, and killed 16420 defenders", actions[0]);
assert("TARGARYEN", knownInfo.find(l=>l.id==="WINTERFELL").house.id);
assert("TARGARYEN", knownInfo.find(l=>l.id==="WINTERFELL").domain.id);
assert(1, knownInfo.find(l=>l.id==="WINTERFELL").units.length);
actions = model.simulateDay();
assert(0, actions.length);