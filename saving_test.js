const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test

describe('saving records',function(){
  //create tests
  it('saves a record to the database',function(done){
var char = new MarioChar({
name:'Mario'
});
char.save().then(function(){
assert(char.isNew === false);
done()
});

});

});
