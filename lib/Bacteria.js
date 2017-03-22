var LivingThing = require('./LivingThing.js');
class Bacteria extends LivingThing {
	constructor ( name ) {
		super (name, true, false, false, true, false );
	}
}


module.exports = Bacteria;
var test = new Bacteria('dog');
console.log(test);