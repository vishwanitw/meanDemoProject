var express = require('express');
var app = new express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error with mongobd:'));
db.once('open', function() {
   // we're connected!
   console.log('we are connected to mongodb');
});
app.use(express.static(__dirname + '/public/'));

app.get('/', function (request, response) {
   console.log('inside other wise ');
   response.send('inside otherwise sending ');
});



mongoose.model('users',{name: String, age: Number})

app.get('/users', function (request, response) {
   mongoose.model('users').find(function (err, users) {
      console.log('users list is :', users)
      response.send(users);
   });
});
app.post('/adduser',  function (request, response) {
   mongoose.model('users').insert(function (err, users) {
      console.log('users list is :', users)
      response.send(users);
   });
});

app.listen(3000, function(request, response){
   console.log('server stating ');
});


