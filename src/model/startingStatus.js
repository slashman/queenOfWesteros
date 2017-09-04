/* jshint node: true */
"use strict";

const HOUSES_MAP = require('./houses').map;
const UNIT_TYPES = require('./unitTypes');

module.exports = {
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
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 400
			}
		]
	},
	KINGS_LANDING: {
		house: HOUSES_MAP.LANNISTER,
		domain: HOUSES_MAP.LANNISTER,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 1000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 4000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 200
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 100
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 20
			}
		]
	},
	THE_EYRIE: {
		house: HOUSES_MAP.ARRYN,
		domain: HOUSES_MAP.STARK,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 5000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 15000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 1000
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 0
			}
		]
	},
	RIVERRUN: {
		house: HOUSES_MAP.FREY,
		domain: HOUSES_MAP.LANNISTER,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 120
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 0
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 30
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 0
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 0
			}
		]
	},
	TWINS: {
		house: HOUSES_MAP.FREY,
		domain: HOUSES_MAP.LANNISTER,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 4000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 0
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 300
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 10
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 0
			}
		]
	},
	WHITE_HARBOR: {
		house: HOUSES_MAP.MANDERLY,
		domain: HOUSES_MAP.STARK,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 0
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 500
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 50
			}
		]
	},
	WINTERFELL: {
		house: HOUSES_MAP.STARK,
		domain: HOUSES_MAP.STARK,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.BARBARIAN,
				q: 8000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 6000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 300
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 100
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 20
			}
		]
	},
	CASTLE_BLACK: {
		house: HOUSES_MAP.NIGHTWATCH,
		domain: HOUSES_MAP.STARK,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 500
			},
			{
				type: UNIT_TYPES.BARBARIAN,
				q: 200
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 25
			}
		]
	},
	PYKE: {
		house: HOUSES_MAP.GREYJOY,
		domain: HOUSES_MAP.LANNISTER,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 1500
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 1500
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 0
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 0
			},
			{
				type: UNIT_TYPES.WAR_LONGSHIP,
				q: 100
			}
		]
	},
	CASTERLY_ROCK: {
		house: HOUSES_MAP.LANNISTER,
		domain: HOUSES_MAP.LANNISTER,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 8000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 0
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 100
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 10
			}
		]
	},
	HIGHGARDEN: {
		house: HOUSES_MAP.TYRELL,
		domain: HOUSES_MAP.TARGARYEN,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 20000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 10000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 4000
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 5
			}
		]
	},
	SUNSPEAR: {
		house: HOUSES_MAP.MARTELL,
		domain: HOUSES_MAP.TARGARYEN,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 25000
			},
			{
				type: UNIT_TYPES.HEAVY_INFANTRY,
				q: 10000
			},
			{
				type: UNIT_TYPES.CAVALRY,
				q: 3000
			},
			{
				type: UNIT_TYPES.HEAVY_CAVALRY,
				q: 2000
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 10
			}
		]
	},
	OLDTOWN: {
		house: HOUSES_MAP.HIGHTOWER,
		domain: HOUSES_MAP.TARGARYEN,
		units: [
			{
				type: UNIT_TYPES.INFANTRY,
				q: 9000
			},
			{
				type: UNIT_TYPES.SHIP,
				q: 100
			}
		]
	}
};