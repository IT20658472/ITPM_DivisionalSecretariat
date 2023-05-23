const router = require('express').Router();
let Feedback = require('../models/Feedback.model');

//retrive all data in database
router.route('/').get((req, res) => {
    Feedback.find()
        .then(Feedback => res.json(Feedback))
        .catch(Feedback => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/addFeedback').post((req, res) => {

    const Feedbackname = req.body.Feedbackname;
    const email2 = req.body.email2;
    const feedback = req.body.feedback;
    
    



  const newFeedback = new Feedback({
    Feedbackname,
    email2,
    feedback,
    
   
});

//get data in form AND save it to database

newFeedback.save()
.then(() => res.json('Feedback added!'))
.catch(err => res.status(400).json('Error: ' + err));
});

// Get Data 
router.route('/:id').get((req, res) => {
    Feedback.findById(req.params.id)
        .then(Feedback => res.json(Feedback))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Feedback.findByIdAndDelete(req.params.id)
        .then(() => res.json('Feedback deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;