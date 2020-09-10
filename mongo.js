// mongodb CRUD operations

// show existing databases
show dbs

// create a database and select it
use dataBaseName

// create a collection(i.e table) called products and add content into it
db.products.insertOne(    // can use insertOne() for one entry or insertMany() for more than one entry
  {
    _id: 1,
    name: "Pen",
    price: 1.20,
  },
  {
    _id: 2,
    name: "Pencil",
    price: 0.80
  },
  {
    _id: 3,
    name: "Rubber",
    price: 1.00
  }
)

// list all records in a database
db.products.find()  // returns a list of all the items in the products collection(table)

// find a specific item
db.products.find({name: "Pencil"})  // returns the item that matches the name pencil

// find a specific item and return only the fields you want
db.products.find({name: "Price"}, {name: 1, price: 1, _id: 0})  // the product matched is shown with fields name and price but wont show the _id

// Update records into a collection/table
// add an extra field/column
db.products.updateOne({name: "Pen"}, {$set: {stock: 45}}) // match the product named Pen, use "$set" to create a new column/field named stock

// update the value of an existing column
db.products.updateOne({name: "Pen"}, {$set: {price: 1.5}})  // finds the Pen and updates the price from 1.2 to 1.5

// delete a value from a collection/table
db.products.deleteOne({_id: 1}) // this will delete the item with the id of 1