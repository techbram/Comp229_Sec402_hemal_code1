let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Contact Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

// Get Route for the Contact List page - READ Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', contactController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', contactController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', contactController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', contactController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', contactController.performDelete);

module.exports = router;