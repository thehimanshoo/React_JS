const express = require('express');
const router = express.Router();
const {body , validationResult} = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authenticate');

/*
   User Router
   Usage : Register a User
   URL : http://127.0.0.1:5000/api/users/register
   params : name , email , password
   method : post
   access : Public
 */
router.post('/register', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
] ,async (request , response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()})
    }
    try {
        let {name , email , password} = request.body;

        // check if user already exists or not
        let user = await User.findOne({email : email});
        if(user){
            return response.status(401).json({errors : [{msg : 'User is Already Exists'}]})
        }

        // encrypt the password
        let salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password , salt);

        // avatar url
        let avatar = gravatar.url(email , {
            s : '200',
            r : 'pg',
            d : 'mm'
        });

        let isAdmin = false;

        // save to db
        user = new User({name , email , password , avatar , isAdmin});
        user = await user.save();
        response.status(200).json({
            msg : 'Registration is success'
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            errors : [
                { msg : error.message }
            ]
        });
    }
});

/*
   User Router
   Usage : Login a User
   URL : http://127.0.0.1:5000/api/users/login
   params : email , password
   method : post
   access : Public
 */
router.post('/login', [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').notEmpty().withMessage('Password is required'),
] , async (request , response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()})
    }
    try {
        let {email , password} = request.body;
        // check if user exists
        let user = await User.findOne({email : email});
        if(!user){
            return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]});
        }
        // check the password
        let isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return response.status(401).json({errors : [{msg : 'Invalid Credentials'}]});
        }
        // create a JWT Token
        let payload = {
            user : {
                id : user.id,
                name : user.name
            }
        }
        jwt.sign(payload , process.env.JWT_SECRET_KEY , (err , token) => {
            if(err) throw err;
            response.status(200).json({
                msg : 'Login Success',
                token : token,
                user : user
            });
        });
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            errors : [
                { msg : error.message }
            ]
        });
    }
});

/*
   User Router
   Usage : Get User Info
   URL : http://127.0.0.1:5000/api/users/
   params : no-fields
   method : get
   access : Private
 */
router.get('/', authenticate , async (request , response) => {
    try {
        let user = await User.findOne({_id : request.user.id});
        response.status(200).json({user : user});
    }
    catch (error) {
        console.error(error);
        response.status(500).json({
            errors : [
                { msg : error.message }
            ]
        });
    }
});

module.exports = router;