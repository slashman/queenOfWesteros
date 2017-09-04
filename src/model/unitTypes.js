/* jshint node: true */
"use strict";

const UNIT_TYPES = {
	DROGON: {
		name: "Drogon",
		type: "Dragon"
	},
	RAEGAL: {
		name: "Raegal",
		type: "Dragon"
	},
	VISERION: {
		name: "Viserion",
		type: "Dragon"
	},
	UNSULLIED: {
		name: "Unsullied",
		type: "Infantry"
	},
	SCREAMER: {
		name: "Screamer",
		type: "Cavalry"
	},
	RAIDER: {
		name: "Raider",
		type: "Infantry"
	},
	BARBARIAN: {
		name: "Barbarian",
		type: "Infantry"
	},
	INFANTRY: {
		name: "Infantry",
		type: "Infantry"
	},
	HEAVY_INFANTRY: {
		name: "Heavy Infantry",
		type: "Infantry"
	},
	CAVALRY: {
		name: "Cavalry",
		type: "Cavalry"
	},
	HEAVY_CAVALRY: {
		name: "Heavy Cavalry",
		type: "Cavalry"
	},
	SHIP: {
		name: "Ship",
		type: "Ship"
	},
	WAR_LONGSHIP: {
		name: "War longship",
		type: "Ship"
	}
};

module.exports = UNIT_TYPES;