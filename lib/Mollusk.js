var Bilateral = require('./Bilateral');
class Mollusk extends Bilateral {
  constructor(name){
    super(name, 'soft-bodied');
  }
}

module.exports = Mollusk;