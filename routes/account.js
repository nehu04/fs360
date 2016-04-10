var express = require('express');
var router = express.Router();
var accountController = require('../controllers/AccountController');


router.get('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'currentuser') {
		accountController.checkCurrentUser(req, function(err, results){
			if (err){
				res.json({confirmation:'fail', message:err.message});
				return;
			}

			res.json({confirmation:'success', profile:results});
		});
		return;
	}

	if (action == 'logout') {
		req.session.reset();
		res.redirect('/');
		return;
	}

	res.json({
		confirmation:'fail',
		message: 'Invalid Action'
	});
});



router.post('/:action', function(req, res, next) {
	var action = req.params.action;

	if (action == 'login') {
		accountController.login(req.body, function(err, profile){
			if (err){
				res.json({confirmation:'fail', message:err.message});
				return;
			}

			req.session.user = profile.id; // install cookie with profile id set to 'user'
			res.json({confirmation:'success', profile:profile});
		});
		return
	}

	res.json({
		confirmation:'fail',
		message: 'Invalid Action'
	});


});


module.exports = router;