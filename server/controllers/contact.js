let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require('../models/contact');
const contact = require('../models/contact');

// contact listing
module.exports.displayContactList = async (req, res, next) => {
    try {
        let contactList = await contact.find();
        // console.log(gameList)

        res.render('contact/list', {title: 'Business Contacts List', ContactList: contactList})
    } catch (err) {
        console.error(err);
    }
};


// contact add
module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('contact/add', {title: 'Add Contact'})
    } catch (err) {
        console.error(err);
    }
};


// contact process the add page
module.exports.processAddPage = async (req, res, next) =>{
    let newContact = new Contact({
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "company": req.body.company,
        "url": req.body.url
    });

    try{
        await newContact.save();
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};



// display contact edit page
module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};


// process contact edit page
module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedContact = {
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email,
        "company": req.body.company,
        "url": req.body.url
    };

    try {
        await Contact.updateOne({_id: id}, updatedContact);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};


// delete the contact
module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err) {
        onsole.log(err);
        res.status(500).send(err);
    }
};