/* jshint node: true */
"use strict";

const LOCATIONS = require('./locations');
const REAL_INFO = require('./startingStatus'); 
let knownInfo = false;

module.exports = {
	getKnownLocationInfo: function(){
		//TODO: In the future, calculate "known info" based on previously known info+spies
		return LOCATIONS.map((l)=>Object.assign({}, l, REAL_INFO[l.id]));
	},
};