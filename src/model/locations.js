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
				x: 455,
				y: 136
			},
			{
				id: "EASTWATCH",
				name: "Eastwatch by the Sea",
				x: 519,
				y: 137
			},
			{
				id: "KARHOLD",
				name: "Karhold",
				x: 616,
				y: 298
			},
			{
				id: "DEEPWOOD",
				name: "Deepwood Motte",
				x: 228,
				y: 314
			},
			{
				id: "DREADFORT",
				name: "Dreadfort",
				x: 503,
				y: 365
			},
			{
				id: "WINTERFELL",
				name: "Winterfell",
				x: 340,
				y: 390
			},
			{
				id: "TORRHEN",
				name: "Torrhen's Square",
				x: 260,
				y: 452
			},
			{
				id: "WHITE_HARBOR",
				name: "White Harbor",
				x: 420,
				y: 555
			},
			{
				id: "MOAT CAYLIN",
				name: "Moat Caylin",
				x: 351,
				y: 594
			},
		]
	},
	{
		name: "The Iron Islands",
		locations: [
			{
				id: "PYKE",
				name: "Pyke",
				x: 138,
				y: 876
			},
		],
	},
	{
		name: "The Riverlands",
		locations: [
			{
				id: "TWINS",
				name: "The Twins",
				x: 318,
				y: 778
			},
			{
				id: "RIVERRUN",
				name: "Riverrun",
				x: 316,
				y: 927
			},
			{
				id: "HARRENHAL",
				name: "Harrenhal",
				x: 426,
				y: 959
			}
		],
	},
	{
		name: "The Vale of Arryn",
		locations: [
			{
				id: "THE_EYRIE",
				name: "The Eyrie",
				x: 546,
				y: 802
			},
			{
				id: "GULLTOWN",
				name: "Gulltown",
				x: 666,
				y: 860
			}
		]
	},
	{
		name: "The Westerlands",
		locations: [
			{
				id: "FAIRCASTLE",
				name: "Faircastle",
				x: 125,
				y: 995

			},
			{
				id: "CASTERLY_ROCK",
				name: "Casterly Rock",
				x: 138,
				y: 1062
			}
		],
	},
	{
		name: "The Crownlands",
		locations: [
			{
				id: "DRAGONSTONE",
				name: "Dragonstone",
				x: 663,
				y: 997
			},
			{
				id: "KINGS_LANDING",
				name: "Kings Landing",
				x: 497,
				y: 1094
			}
		]
	},
	{
		name: "The Reach",
		locations: [
			{
				id: "HIGHGARDEN",
				name: "Highgarden",
				x: 244,
				y: 1300
			},
			{
				id: "OLDTOWN",
				name: "Oldtown",
				x: 149,
				y: 1414
			}
		]
	},
	{
		name: "The Stormlands",
		locations: [
			{
				id: "STORMS_END",
				name: "Storms End",
				x: 612,
				y: 1230
			},
			{
				id: "TARTH",
				name: "Tarth",
				x: 677,
				y: 1204
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
				name: "Sandstone",
				x: 331,
				y: 1505
			},
			{
				id: "YRONWOOD",
				name: "Yronwood",
				x: 427,
				y: 1426
			},
			{
				id: "SUNSPEAR",
				name: "Sunspear",
				x: 669,
				y: 1489
			}
		]
	}
];

const LOCATIONS = [];

REGIONS.forEach((region)=>region.locations.forEach((location)=>LOCATIONS.push(Object.assign({},location,{region:region.name}))));

module.exports = LOCATIONS;