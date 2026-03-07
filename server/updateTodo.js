const { connectToMongoDB } = require("./database"); 

const updateTodo = async () => {
  try {
    const client = await connectToMongoDB();
    const db = client.db("todosdb"); // database name
    const todos = db.collection("todos"); // collection name

    // Update a specific todo
    const filter = { todo: "merci" }; // the todo you want to change
    const update = { $set: { todo: "learn MongoDB today" } }; // new text


    const result = await todos.updateOne(filter, update);

    console.log(`Matched ${result.matchedCount} document(s)`);
    console.log(`Modified ${result.modifiedCount} document(s)`);
  } catch (err) {
    console.error(err);
  }
};

updateTodo();