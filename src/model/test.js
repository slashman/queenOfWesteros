/* jshint node: true */
"use strict";

const model = require('./model');

const knownInfo = model.getKnownLocationInfo();

console.log(JSON.stringify(knownInfo, null, 4));

// Test is successful if no errors thrown