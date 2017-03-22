var LivingThing = require('./LivingThing.js');
class Archaea extends LivingThing {
	constructor ( name ) {
		super ( name, true, false, true, true, true );
		this._name = name;

	}
}

var test = new Archaea('Dog');
console.log( test );
module.exports = Archaea;
