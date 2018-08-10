const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://bill5171:bill5171@ds235860.mlab.com:35860/redux_todo"
);
mongoose.set("debug", true);
mongoose.Promise = Promise;

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
