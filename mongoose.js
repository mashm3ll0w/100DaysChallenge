// require the mongoose module and connect to the DB
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/soldiersDB", { useNewUrlParser: true, useUnifiedTopology: true });

// create the schema that will serve as the blueprint for the database objects
const soldierSchema = new mongoose.Schema({
	_id: Number,
	service_number: Number,
	rank: String,
	surname: String,
	unit: String,
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
		// returns an array of objects meaning you can use any array method on the result
		console.log("Success", soldiers);
	}
});