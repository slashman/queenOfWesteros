module.exports = {
	range: function(a, b){
		return a + Math.round(Math.random()*(b-a));
	},
	of: function(array){
		return array[this.range(0, array.length-1)];
	}
}