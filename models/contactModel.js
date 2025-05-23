const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email:{
        type: String,
        required: [true, "Please add the email address"],
    },
    phone:{
        type: Number,
        required: [true, "Please add the phone number"],
    },
});

module.exports= mongoose.model("Contact", contactSchema);
