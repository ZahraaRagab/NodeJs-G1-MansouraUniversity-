const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'You must provide a task!']
    }
});

module.exports = mongoose.model('Todo', todoSchema);
