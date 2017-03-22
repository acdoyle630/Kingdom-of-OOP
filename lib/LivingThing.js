class LivingThing {
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
	get multiCellular () {
		return !this._uniCellular;
	}
	set multiCellular (value) {
		if (typeof value === 'boolean') {
			this._uniCellular = !value;
		}
	}
	get eukaryote () {
		return this._trueNucleus;
	}
	set eukaryote(value) {
		if (typeof value === 'boolean') {
			this._trueNucleus = value;
		}
	}
	get prokaryote () {
		return !this._trueNucleus;
	}
	set prokaryote ( value ) {
		if (typeof value === "boolean") {
			this._trueNucleus = !value;
		}
	}
	get anaerobic ( ) {
		return this._anaerobic;
	}
	set anaerobic( value ) {
		if (typeof value === "boolean") {
			this._anaerobic = value;
		}
	}
	get aerobic () {
		return !this._anaerobic;
	}
	set aerobic( value ) {
		if (typeof	value === 'boolean') {
			this._anaerobic = !value;
		}
	}
	get asexual ( ) {
		return this._asexual;
	}
	set asexual ( value ) {
		if (typeof value === 'boolean') {
			this._asexual = value;
		}
	}
	get sexual () {
		return !this._asexual;
	}
	set sexual ( value ) {
		if (typeof value === 'boolean') {
			this._asexual = !value;
		}
	}
	get mobile ( ) {
		return this._mobile;
	}
	set mobile ( value ) {
		if (typeof value === 'boolean') {
			this._mobile = value;
		}
	}
	get immobile ( ) {
		return !this._mobile;
	}
	set immobile ( value ) {
		if (typeof value === 'boolean') {
			this._mobile = !value;
		}
	}
}

module.exports = LivingThing;