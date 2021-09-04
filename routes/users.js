const express = require("express");
const router = express.Router();

//LOGIN PAGE
router.get("/login", (req, res) => res.render("login"));

//REGISTER PAGE
router.get("/register", (req, res) => res.render("register"));

//REGISTER HANDLE
router.post("/register", (req, res) =>{
    const {name, email, password, password2} = req.body;
    let errors = [];

    //check required field
    if(!name || !email || !password || !password2){
        errors.push({ msg : 'Please fill in all fields'});
    }

    //Check passwords match
    if(password !== password2){
        errors.push({ msg : 'Passwords do not match'});
    }

    //Check password lenght
    if(password.length < 6){
        errors.push({ msg : 'password should be at least 6 caracteres'});
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        });
    }else {
        res.send("Pass");
    }
});

module.exports = router;