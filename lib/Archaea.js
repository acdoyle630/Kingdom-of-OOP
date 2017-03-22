var LivingThing = require('./LivingThing.js');
class Archaea extends LivingThing {
	constructor ( name ) {
	super ( name, true, false, true, true, false );
		this._name = name;
  }
}

/*ar test = new Archaea('Dog');
console.log( test );*/
module.exports = Archaea;
