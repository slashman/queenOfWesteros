/* jshint node: true */
"use strict";

const HOUSES = {
	TARGARYEN: {
		name: "Targaryen"
	},
	LANNISTER: {
		name: "Lannister"
	},
	STARK: {
		name: "Stark"
	},
	FREY: {
		name: "Frey"
	},
	ARRYN: {
		name: "Arryn"
	},
	MANDERLY: {
		name: "Manderly"
	},
	NIGHTWATCH: {
		name: "The Night's Watch"
	},
	GREYJOY: {
		name: "Greyjoy"
	},
	TYRELL: {
		name: "Tyrell"
	},
	MARTELL: {
		name: "Martell"
	}
};

for (let key in HOUSES){
	HOUSES[key].id = key;
}

module.exports = HOUSES;