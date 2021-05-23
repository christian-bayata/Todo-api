const mongoose = require('mongoose');

var Todo = mongoose.model('TodoBank', {
    word: {
        type: String, 
        required: true,
        minlength: 1,
        trim: true
    },
    
    completed: {
        type: Number,
        default: false
    },

    completedAt: {
        type: Boolean,
        default: false
    }
});

module.exports = {Todo}