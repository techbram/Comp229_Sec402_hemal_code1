let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Contact = require('../models/contact');

// Get Route for the Game List page
router.get('/', async (req, res, next) =>{
    try {
        let contactList = await Contact.find();
        console.log(gameList);
        res.render('contact', {title: 'Contact List', ContactList: contactList})
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;