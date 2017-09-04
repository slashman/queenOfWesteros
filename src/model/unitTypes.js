/* jshint node: true */
"use strict";

const UNIT_TYPES = {
	DROGON: {
		name: "Drogon",
		type: "Dragon",
		aerial: true,
		attack: 7000,
		defense: 7000
	},
	RAEGAL: {
		name: "Raegal",
		type: "Dragon",
		aerial: true,
		attack: 4000,
		defense: 6000
	},
	VISERION: {
		name: "Viserion",
		type: "Dragon",
		aerial: true,
		attack: 5000,
		defense: 3000
	},
	UNSULLIED: {
		name: "Unsullied",
		type: "Infantry",
		attack: 5,
		defense: 10
	},
	SCREAMER: {
		name: "Screamer",
		type: "Cavalry",
		attack: 10,
		defense: 5
	},
	RAIDER: {
		name: "Raider",
		type: "Infantry",
		attack: 8,
		defense: 2
	},
	BARBARIAN: {
		name: "Barbarian",
		type: "Infantry",
		attack: 7,
		defense: 4
	},
	INFANTRY: {
		name: "Infantry",
		type: "Infantry",
		attack: 5,
		defense: 5
	},
	HEAVY_INFANTRY: {
		name: "Heavy Infantry",
		type: "Infantry",
		attack: 8,
		defense: 5
	},
	CAVALRY: {
		name: "Cavalry",
		type: "Cavalry",
		attack: 10,
		defense: 10
	},
	HEAVY_CAVALRY: {
		name: "Heavy Cavalry",
		type: "Cavalry",
		attack: 15,
		defense: 10
	},
	SHIP: {
		name: "Ship",
		type: "Ship",
		vessel: true,
		attack: 10,
		defense: 10

	},
	WAR_LONGSHIP: {
		name: "War longship",
		type: "Ship",
		vessel: true,
		attack: 15,
		defense: 10
	}
};

for (let key in UNIT_TYPES){
	UNIT_TYPES[key].id = key;
}

module.exports = UNIT_TYPES;