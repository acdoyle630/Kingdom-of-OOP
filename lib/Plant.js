var Eukaryota = require('./Eukaryota');
class Plant extends Eukaryota {
	constructor ( name ) {
		super ();
	this._name = name;
	}
}

var test = new Plant('dog');
console.log(test);