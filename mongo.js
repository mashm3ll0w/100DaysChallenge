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