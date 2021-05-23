const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("localhost:mongodb/27017/TodoBank", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = {mongoose};

