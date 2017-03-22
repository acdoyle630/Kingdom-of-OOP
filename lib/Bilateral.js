var Animal = require('./Animal');
class Bilateral extends Animal {
  constructor(name, body){
    super(name, 'bilateral', body);
    this._body = body;
  }
  get body(){
    return this._body;
  }
  set body(value){
    if (typeof value === 'string'){
      this._body = value;
    }
  }
}

module.exports = Bilateral;