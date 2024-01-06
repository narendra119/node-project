const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// Database Name
const dbName = 'yourDatabaseName'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


id = new ObjectId()
console.log(typeof id.id, id.id.length)
console.log(id.toHexString(), id.toHexString().length)


// Function to connect to the MongoDB database
async function getDatabase() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected to MongoDB');

    // Select the specific database
    const database = client.db(dbName);
    const collection = database.collection('tasks');

    // Delete One Document
    // collection.deleteOne({
    //   description: "this is a unfinished task",
    // }).then((result) => {
    //   console.log(result)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // Delete Multiple Documents satisfying the filtering logic
    // collection.deleteMany({
    //   description: "this is a test task",
    // }).then((result) => {
    //   console.log(result.deletedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })

    // Update Multiple Documents based off of the filtering logic
    // collection.updateMany({
    //   completed: false
    // }, {
    //   $set: {
    //     completed: true,
    //   }
    // }).then((result) => {
    //   console.log("Successfully updated")
    //   console.log(result)
    // }).catch((error) => {
    //   console.log("Something Went wrong while updating!")
    //   console.log(error)
    // })

    // Update the first Document matching the filtering logic
    // collection.updateOne({
    //   _id: new ObjectId("65938be004585e92cae00793")
    // }, {
    //   $set: {
    //     completed: false
    //   }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // }).finally(() => {
    //     console.log("Be the fire that slowly burns")
    // })

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


// Call the function to connect
db = getDatabase();
// data = getData(db, 'tasks')
