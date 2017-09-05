/* jshint node: true */
"use strict";

function show(obj){
	console.log(JSON.stringify(obj, null, 4));
}

const model = require('../model');

model.startDay();
let knownInfo = model.getKnownLocationInfo();
show(knownInfo);
let attackCasterlyRock = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "CASTERLY_ROCK",
	units: [
		{type: "UNSULLIED", q: 5000},
		{type: "SCREAMER", q: 1000},
	]
};
model.planAction(attackCasterlyRock);
model.scheduleAction(attackCasterlyRock);

let moveToDorne = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "SUNSPEAR",
	units: [
		{type: "RAIDER", q: 100}
	]
};

const dornePlan = model.planAction(moveToDorne);

let occupyDreadfort = {
	type: "MOVE_TROOPS",
	from: "DRAGONSTONE",
	to: "DREADFORT",
	units: [
		{type: "RAIDER", q: 100}
	]
};

const dreadfortPlan = model.planAction(occupyDreadfort);

model.scheduleAction(occupyDreadfort);
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

let actions = false;
for (var i = 0; i < 30; i++){
	actions = model.simulateDay()	
	show(actions);
}