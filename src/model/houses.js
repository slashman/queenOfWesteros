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
	{
		name: "Arryn"
	},
	{
		name: "Manderly"
	},
	{
		name: "The Night's Watch"
	},
	{
		name: "Greyjoy"
	},
	{
		name: "Tyrell"
	},
	{
		name: "Martell"
	}
];

const HOUSES_MAP = {
	TARGARYEN: HOUSES.find((h)=>h.name === "Targaryen"),
	LANNISTER: HOUSES.find((h)=>h.name === "Lannister"),
	STARK: HOUSES.find((h)=>h.name === "Stark"),
	FREY: HOUSES.find((h)=>h.name === "Frey"),
	ARRYN: HOUSES.find((h)=>h.name === "Arryn"),
	MANDERLY: HOUSES.find((h)=>h.name === "Arryn"),
	NIGHTWATCH: HOUSES.find((h)=>h.name === "The Night's Watch"),
	GREYJOY: HOUSES.find((h)=>h.name === "Greyjoy"),
	TYRELL: HOUSES.find((h)=>h.name === "Tyrell"),
	MARTELL: HOUSES.find((h)=>h.name === "Martell"),
};

module.exports = {
	list: HOUSES,
	map: HOUSES_MAP
};