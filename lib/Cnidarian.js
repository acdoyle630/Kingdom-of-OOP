var Animal = require('./Animal');
class Cnidarian extends Animal {
  constructor(name) {
    super(name, 'radial');
  }
}

module.exports = Cnidarian;