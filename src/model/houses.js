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
];

const HOUSES_MAP = {
	TARGARYEN: HOUSES.find((h)=>h.name === "Targaryen"),
	LANNISTER: HOUSES.find((h)=>h.name === "Lannister"),
	STARK: HOUSES.find((h)=>h.name === "Stark"),
	FREY: HOUSES.find((h)=>h.name === "Frey"),
	ARRYN: HOUSES.find((h)=>h.name === "Arryn"),
};

module.exports = {
	list: HOUSES,
	map: HOUSES_MAP
};