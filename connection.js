const mongoose = require('mongoose');
//ES6 Promises
mongoose.Promise = global.Promise;

//Connecting to the databases before the test runs
before(function(done){
  mongoose.connect('mongodb://localhost/testdb');

  mongoose.connection.once('open',function(){
    console.log('Connection Sucesfull,now do your shit');
    done();
  }).on('error',function(error){
    console.log('Connection error:',error);
  });
});
//drop the charecter collectionn before each test
beforeEach(function(done){
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  })
})
