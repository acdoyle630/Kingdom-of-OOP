export default class livingThings {
	constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
		this._name = name;
		this._uniCellular = uniCellular;
		this._trueNucleus = trueNucleus;
		this._anaerobic = anaerobic;
		this._asexual = asexual;
		this._mobile = mobile;
	}
	get name() {
		return this._name;
	}
	set name ( name ) {
		if ( typeof (name) === 'string'){
			this._name = name;
		} else {
			throw new TypeError ('must be a string');
		}
	}
	get uniCellular () {
		return this._uniCellular;
	}
	set uniCellular ( uniCellular ) {
		if ( typeof (uniCellular) === 'boolean') {
			this._uniCellular = uniCellular;
		}
	}
	get multicellular () {
		return !this._uniCellular;
	}
	set multicellular (value) {
		if (typeof value === 'boolean') {
			this.uniCellular = value;
		}
	}
}