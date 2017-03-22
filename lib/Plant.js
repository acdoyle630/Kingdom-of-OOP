var Eukaryota = require('./Eukaryota');
class Plant extends Eukaryota {
	constructor ( name ) {
		super ( name, false, true, false, false );
  }
}

var test = new Plant('dog');
console.log(test);

module.exports = Plant;