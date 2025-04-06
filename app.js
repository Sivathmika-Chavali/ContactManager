const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const ejs = require("ejs")
const path = require("path")
const dotenv = require("dotenv").config();
const app = express();
const connectDb = require("../SMR/config/dbConnection");
const port = process.env.PORT;
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (if needed)
app.use(express.static('public'));
app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port,()=>{
    console.log(`Server running on ${port}`);  
})