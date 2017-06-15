var mongoose = require('mongoose');
require('./users.js');

var user = mongoose.model('User');

var todoSchema = new mongoose.Schema({
    owner: user,
    todo: [
        index: {
            type: Number,
            unquie: true
        },
        title: String,
        description: String ,
        date: Date
    ]
});

todoSchema.methods = {
    addTodo: function(todo) {
        this.todo.add(todo);
    },
    removeTodo: function(id) {
        if (this.todoList(id)) {
            this.todoList.remove(id);
        } else {
            console.error('There is no todo with that ID for this user.');
        }
    },
    getTodoList: function(callback) {
        return this.db.mobdel('User').findById(this.owner, callback);
    }

};
