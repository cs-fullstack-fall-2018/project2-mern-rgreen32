const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    UserName: String,
    Title: String,
    JournalEntry: String,
    Date: Date
});

module.exports = mongoose.model('blog', blogSchema);



