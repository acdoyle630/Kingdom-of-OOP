var Eukaryota = require('./Eukaryota.js');
class Fungi extends Eukaryota {
	constructor (name, uniCellular, asexual, mobile, heterotroph){
		super ( name, false, true, false, true);
		this._name = name;

	}
}

module.exports = Fungi;
