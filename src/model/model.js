/* jshint node: true */
"use strict";

const HOUSES = [
	{
		name: "Targaryen"
	},
	{
		name: "Lannister"
	},
	{
		name: "Stark"
	},
	{
		name: "Frey"
	},
];

const HOUSES_MAP = {
	TARGARYEN: HOUSES.find((h)=>h.name === "Targaryen"),
	LANNISTER: HOUSES.find((h)=>h.name === "Lannister"),
	STARK: HOUSES.find((h)=>h.name === "Stark"),
	FREY: HOUSES.find((h)=>h.name === "Frey"),
};

const LOCATIONS = [
	{
		id: "DRAGONSTONE",
		name: "Dragonstone",
	},
	{
		id: "KINGS_LANDING",
		name: "Kings Landing"
	},
	{
		id: "WINTERFELL",
		name: "Winterfell"
	},
	{
		id: "THE_TWINS",
		name: "The Twins"
	},
];

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
	}
};

const KNOWN_INFO = {
	DRAGONSTONE: {
		house: HOUSES_MAP.TARGARYEN,
		domain: HOUSES_MAP.TARGARYEN,
		units: [
			{
				type: UNIT_TYPES.DROGON,
				q: 1
			},
			{
				type: UNIT_TYPES.RAEGAL,
				q: 1
			},
			{
				type: UNIT_TYPES.VISERION,
				q: 1
			},
			{
				type: UNIT_TYPES.UNSULLIED,
				q: 8000
			},
			{
				type: UNIT_TYPES.SCREAMER,
				q: 50000
			},
			{
				type: UNIT_TYPES.RAIDER,
				q: 50000
			}
		]
	}
};

module.exports = {
	getKnownLocationInfo: function(){
		return LOCATIONS.map((l)=>Object.assign({}, l, KNOWN_INFO[l.id]));
	}
};