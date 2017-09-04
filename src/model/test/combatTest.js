/* jshint node: true */
"use strict";

const combat = require('../combat');
const UNIT_TYPES = require('../unitTypes');

function assert(expected, actual){
	if (expected != actual){
		throw new Error("Expected: ["+expected+"] but got ["+actual+"]");
	}	
}

let MOCK_LOCATIONS = [
	{
		id: "WINTERFELL",
		name: 'Winterfell',
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 5000
			}
		]
	}
];

const mockRand = {
	range: function(a, b){
		return b;
	}
};

const mockModel = {
	getKnownLocationInfo: () => Object.assign([], MOCK_LOCATIONS)
};

combat.inject(mockModel, mockRand);

// Test 1
let actions = [];
let attackAction = {
	to: "WINTERFELL",
	units: [
		{type: "BARBARIAN", q: 3000 },
		{type: "HEAVY_CAVALRY", q: 1000 }
	]
};

combat.attack(attackAction, actions);

assert("We have been defeated at Winterfell, we lost 4000 soldiers, and killed 0 defenders", actions[0]);

// Test 2
MOCK_LOCATIONS = [
	{
		id: "WINTERFELL",
		name: 'Winterfell',
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 5000
			}
		]
	}
];
actions = [];
attackAction = {
	to: "WINTERFELL",
	units: [
		{type: "BARBARIAN", q: 3000 },
		{type: "HEAVY_CAVALRY", q: 10000 }
	]
};

combat.attack(attackAction, actions);
assert("We have conquered Winterfell, we lost about 0 soldiers, and killed 5000 defenders", actions[0]);

// Test 3
MOCK_LOCATIONS = [
	{
		id: "WINTERFELL",
		name: 'Winterfell',
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 5000
			}
		]
	}
];
actions = [];
attackAction = {
	to: "WINTERFELL",
	units: [
		{type: "INFANTRY", q: 7000 }
	]
};
combat.attack(attackAction, actions);
assert("The battle at Winterfell wages on, we lost about 3500 soldiers, and killed 0 defenders", actions[0]);