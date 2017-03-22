var Bilateral = require('./Bilateral');
class Anthropod extends Bilateral {
  constructor(name){
    super(name,'exoskeleton');
  }
}

module.exports = Anthropod;