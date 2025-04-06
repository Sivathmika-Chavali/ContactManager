const asynchandler = require("express-async-handler")
const Contact = require("../models/contactModel");

// Get all contacts
const getContact = asynchandler(async (req,res)=>{
    const contacts =await Contact.find();
    res.render('index.ejs', {Contact: contacts})
})

// Post a contact
const createContact =asynchandler(async (req,res)=>{
    console.log("The request body is: "+req.body.name);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory! ");
        
    }
    const contact = await Contact.create({
        name,email,phone
    });
    res.redirect("/api/contacts");
})
// Update a contact
const updateContact = asynchandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect("/api/contacts"); // make sure you're redirecting back to the list
});

const deleteContact = asynchandler(async (req, res) => {
    const contactId = req.params.id;
      const contact = await Contact.findById(contactId);
      if (!contact) {
        res.status(400);
        throw new Error("Contact not found");
      }
      await contact.deleteOne();
      return res.redirect("/api/contacts");
      res.status(400).send("Invalid action.");
    }
  
  );
  

module.exports = {getContact, createContact, updateContact, deleteContact};
