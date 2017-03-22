var Eukaryota = require('./Eukaryota.js');
class Fungi extends Eukaryota {
	constructor (name){
		super (name, false, true, false, true);

	}
}

var test = new Fungi('dog');
console.log(test);
module.exports = Fungi;
