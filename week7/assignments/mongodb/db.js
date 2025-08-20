const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: {type: String, unique: true},
    password: {type: String},
    username: {type: String}
});

const Todo = new Schema({
    description: String,
    done: {type: Boolean, default: false},
    userId: ObjectId
});

const UserModel = mongoose.model("users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = {
    UserModel,
    TodoModel
}