const mongoose = require("mongoose")
const validator = require("validator")


mongoose.connect('mongodb://127.0.01:27017/task-manager-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
