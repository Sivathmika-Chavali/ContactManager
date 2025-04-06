const express = require("express");
const router = express.Router();
const {getContact, 
    createContact, 
    oneContact, 
    updateContact,
     deleteContact} = require("../controllers/contactControllers");

router.route('/').get( getContact).post(createContact );

router.route('/:id').post(updateContact);

router.route('/:id').get(deleteContact);

module.exports = router;