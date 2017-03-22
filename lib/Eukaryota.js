var LivingThing = require ('./LivingThing.js');
class Eukaryota extends LivingThing {
	constructor(name, uniCellular, asexual, mobile, heterotroph) {
		super( name, uniCellular, true, false, asexual, mobile);
		this._heterotroph = heterotroph;
	}
	get heterotroph() {
		return this._heterotroph;
	}
	set heterotroph(value) {
		if (typeof value === 'boolean'){
			this._heterotroph = value;
		}
	}
	get autotroph() {
		return !this._heterotroph;
	}
	set autotroph( value ){
		if (typeof value === 'boolean') {
			this._heterotroph = !value;
		}
	}
}

module.exports = Eukaryota;


