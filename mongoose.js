// require the mongoose module and connect to the DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/soldiersDB", { useNewUrlParser: true, useUnifiedTopology: true });

// create the schema that will serve as the blueprint for the database objects
const soldierSchema = new mongoose.Schema({

	//  data validation in mongoose
	// checks for the data type and throws an error if the data type mismatches or if the field is left empty
	_id: Number,
	service_number: {
		type: Number,
		required: true,
	},
	rank: {
		type: String,
		required: true
	},
	surname: {
		type: String,
		required: true
	},
	unit: {
		type: String,
		required: true
	},
});

// create a model that will follow the schema and will be the basis of creating the individual records
const Soldier = mongoose.model("Soldier", soldierSchema);

// create the records
const swaleh = new Soldier({
	_id: 1,
	service_number: 97428,
	rank: "SPTE",
	surname: "Swaleh",
	unit: "7 KR",
});

const thuo = new Soldier({
	_id: 2,
	service_number: 97422,
	rank: "CPL",
	surname: "Thuo",
	unit: "9 KR",
});

const wachira = new Soldier({
	_id: 3,
	service_number: 77428,
	rank: "SGT",
	surname: "Wachira",
	unit: "17 KR",
});

const wallace = new Soldier({
	_id: 4,
	service_number: 87428,
	rank: "SSGT",
	surname: "HQ KA",
});

// save the records into the database
// NB this saves multiple objects at once, to save just one use 
// ==> recordName.save();
Soldier.insertMany([swaleh, thuo, wachira, wallace], function (err) {
	if (err) {
		console.log("Error inserting objects into the database", err);
	} else {
		console.log("Successfully update the database");
	}
});


// read the data from the database
// use the model name to read from the soldiers collection.
Soldier.find(function(err, soldiers){
	if(err){
		console.log("Error reading from DB", err);
	}
	else{
		// closes the connection to the database once the results are returned and there are no errors
		mongoose.connection.close();

		// returns an array of objects meaning you can use any array method on the result
		console.log("Success", soldiers);
		soldiers.map(soldier => soldier.surname);

	}
});

// update a single record
// takes 3 arguments, filter, what to be updated and what to do incase of an error
Soldier.updateOne({service_number: 97422}, {service_number: 89730},  function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Successfully updated the record");
	}
});

// delete a single record
// takes 2 arguments, a filter for what to delete and a function incase of an error
Soldier.deleteOne({surname: "Makori"}, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Successfully deleted the record and updated the document");
	}
});

// delete multiple records
// deletes all the records whose id is greater than 3
Soldier.deleteMany({_id: {$gt: 3}}, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("Successfully deleted then updated the document")
	}
});


// relationships between 2 or more documents
// links one document to the other
// has to be defined in the schema. MUST BE
const fruitsSchema = new mongoose.Schema({
	name: String,
	rating: Number
});

const childrenSchema = new mongoose.Schema({
	name: String,
	age: Number,
	favFruit: fruitsSchema
});


const Fruit = mongoose.model("Fruit", fruitsSchema);
const Child = mongoose.model("child", childrenSchema);

const apple = new Fruit({
	name: "Apple",
	rating: 9
});
apple.save();

const logan = new Child({
	name: "Logan Swaleh",
	age: 7,
	favFruit: apple
});

logan.save();
