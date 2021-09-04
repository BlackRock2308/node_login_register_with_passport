const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const mongoose = require("mongoose");

const app = express();

//DB config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db)
.then(() => console.log("MongoDB connected ..."))
.catch(err => console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BodyParser

app.use(express.urlencoded({ extended : false }));

//ROUTES

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));