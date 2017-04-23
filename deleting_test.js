const assert = require('assert');
const MarioChar = require('../models/mariochar');

//describe test
describe('saving records',function(){
  var char;
beforeEach(function(done){
  char = new MarioChar({
  name:'Mario'
  });
  char.save().then(function(){
  assert(char.isNew === false);
  done()
  });
})




  //create tests
  it('deleting charecter from the databases',function(done){
MarioChar.findOneAndRemove({name:'Mario'}).then(function(){
  MarioChar.findOne({name:'Mario'}).then(function(result){
    assert(result === null);
    done()
  })
})

});

it('finds on charecter from the databases',function(done){
MarioChar.findOne({name:'Mario'}).then(function(result){
assert(result.name === 'Mario');
done();
})

});
});
