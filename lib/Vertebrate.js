var Bilateral = require('./Bilateral');
class Vertebrate extends Bilateral {
  constructor(name){
    super(name, 'vertebral-column');
  }
}

module.exports = Vertebrate;