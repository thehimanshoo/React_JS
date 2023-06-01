const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authenticate');
const {body , validationResult} = require('express-validator');
const Event = require('../models/Event');

/*
   Event Router
   Usage : Upload an Event
   URL : http://127.0.0.1:5000/api/events/upload
   params : name , image , date , type , price , info
   access : Private
   method : post
 */
router.post('/upload', authenticate , [
    body('name').notEmpty().withMessage('Name is required'),
    body('image').notEmpty().withMessage('Image is required'),
    body('date').notEmpty().withMessage('Date is required'),
    body('type').notEmpty().withMessage('Type is required'),
    body('price').notEmpty().withMessage('Price is required'),
    body('info').notEmpty().withMessage('Info is required'),
], async (request , response) => {
    let errors = validationResult(request);
    if(!errors.isEmpty()){
        return response.status(401).json({errors : errors.array()});
    }
    try {
        let {name , image , date , type , price , info} = request.body;
        let user = request.user.id;
        let event = new Event({user , name , image , date , type , price , info});
        event = await event.save();
        response.status(200).json({
            msg : 'Event Upload is Successful',
            event : event
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
  Event Router
   Usage : Get Free Events
   URL : http://127.0.0.1:5000/api/events/free
   params : no-fields
   access : Public
   method : get
 */
router.get('/free', async (request , response) => {
    try {
        let events = await Event.find({type : 'FREE'});
        response.status(200).json({events : events});
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
  Event Router
   Usage : Get PRO Events
   URL : http://127.0.0.1:5000/api/events/pro
   params : no-fields
   access : Public
   method : get
 */
router.get('/pro', authenticate , async (request , response) => {
    try {
        let events = await Event.find({type : 'PRO'});
        response.status(200).json({events : events});
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