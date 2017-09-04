/* jshint node: true */
"use strict";

const REGIONS = [
	{
		name: "Beyond the Wall",
		locations: []
	},
	{
		name: "The North",
		locations: [
			{
				id: "CASTLE_BLACK",
				name: "Castle Black",
			},
			{
				id: "EASTWATCH",
				name: "Eastwatch by the Sea"
			},
			{
				id: "KARHOLD",
				name: "Karhold"
			},
			{
				id: "DEEPWOOD",
				name: "Deepwood Motte"
			},
			{
				id: "DREADFORT",
				name: "Dreadfort"
			},
			{
				id: "WINTERFELL",
				name: "Winterfell"
			},
			{
				id: "TORRHEN",
				name: "Torrhen's Square"
			},
			{
				id: "WHITE_HARBOR",
				name: "White Harbor"
			},
			{
				id: "MOAT CAYLIN",
				name: "Moat Caylin"
			},
		]
	},
	{
		name: "The Iron Islands",
		locations: [
			{
				id: "PYKE",
				name: "Pyke"
			},
		],
	},
	{
		name: "The Riverlands",
		locations: [
			{
				id: "TWINS",
				name: "The Twins"
			},
			{
				id: "RIVERRUN",
				name: "Riverrun"
			},
			{
				id: "HARRENHAL",
				name: "Harrenhal"
			}
		],
	},
	{
		name: "The Vale of Arryn",
		locations: [
			{
				id: "THE_EYRIE",
				name: "The Eyrie"
			},
			{
				id: "GULLTOWN",
				name: "Gulltown"
			}
		]
	},
	{
		name: "The Westerlands",
		locations: [
			{
				id: "FAIRCASTLE",
				name: "Faircastle"
			},
			{
				id: "CASTERLY_ROCK",
				name: "Casterly Rock"
			},
			{
				id: "SILVERHILL",
				name: "Silverhill"
			}
		],
	},
	{
		name: "The Crownlands",
		locations: [
			{
				id: "DRAGONSTONE",
				name: "Dragonstone"
			},
			{
				id: "DUSKENDALE",
				name: "Duskendale"
			},
			{
				id: "KINGS_LANDING",
				name: "Kings Landing"
			}
		]
	},
	{
		name: "The Reach",
		locations: [
			{
				id: "GOLDENGROVE",
				name: "Goldengrove"
			},
			{
				id: "HIGHGARDEN",
				name: "Highgarden"
			},
			{
				id: "OLDTOWN",
				name: "Oldtown"
			}
		]
	},
	{
		name: "The Stormlands",
		locations: [
			{
				id: "STORMS_END",
				name: "Storms End"
			},
			{
				id: "MISTWOOD",
				name: "Mistwood"
			},
			{
				id: "BLACKHAVEN",
				name: "Blackhaven"
			}
		],
	},
	{
		name: "Dorne",
		locations: [
			{
				id: "SANDSTONE",
				name: "Sandstone"
			},
			{
				id: "YRONWOOD",
				name: "Yronwood"
			},
			{
				id: "SUNSPEAR",
				name: "Sunspear"
			}
		]
	}
];

const LOCATIONS = [];

REGIONS.forEach((region)=>region.locations.forEach((location)=>LOCATIONS.push(Object.assign({},location,{region:region.name}))));

module.exports = LOCATIONS;