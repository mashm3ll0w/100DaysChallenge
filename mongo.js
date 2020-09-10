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