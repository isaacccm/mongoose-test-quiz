// get mongoose package
var mongoose = require('mongoose');

// connect to MongoDB / the name of DB is set to 'quiz'
mongoose.connect('mongodb://localhost:27017/quiz', { useMongoClient: true });

// we get the pending connection to 'quiz' running on localhost
var db = mongoose.connection;
// we get notified if error occurs
db.on('error', console.error.bind(console, 'connection error:'));
// executed when the connection opens
db.once('open', function(){
  console.log("Connected to DB");
  //do operations which involve interacting with DB.
});

// creates DB schema
var questionHostSchema = mongoose.Schema({
		_id: Number,
		Course: String,
		Dueday: Date,
		Questions: {
				Number: Number,
				Type: String,
				Question: String,
				Answer: String,
				Tag: String
		},
		Admin: String
});

// compiels our schema into a model
var QuestionHost = mongoose.model('QuestionHost', questionHostSchema);

// add user1 and user2 to "User" model
var quiz1 = new QuestionHost({
		_id: 123,
		Admin:  'Isaac',
		Course: 'DB',
		Dueday: '09/01/2017',
		Questions: {
				Number: 5,
				Type: 'boolean',
				Question: 'Difference between normalization and denormalization?',
				Answer: '3',
				Tag: "Database"
		}
	 });


var query = function(){
	QuestionHost.find(function (err, question) {
	  if (err) return console.error(err);

		console.log('===========   CONNECT TO QUIZ DB =============');
	  console.log(question);
	});
}


console.log('===========   TEST DB =============');
console.log(quiz1);
console.log('===================================');
