let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    company: String,
    url: String
},
{
    collection: 'contact'
});

module.exports = mongoose.model('Contact', contactModel);