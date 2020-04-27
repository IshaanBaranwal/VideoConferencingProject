const User = require('../models/user');


module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}


// render the sign up page
module.exports.signUp = function(req, res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up', {
        title: "Tura | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){

    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in', {
        title: "Tura | Sign In"
    })
}

// get sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
    return  res.redirect('back');  }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){ console.log('Error in finding the user');  return  }

        if (!user){
            User.create(req.body, function(err, user){
                if(err){ console.log('Error in creating the user');  return  }

                return res.redirect('/users/sign-in'); 
            })        
        
        } else{
            return res.redirect('back');
        }

    })    
}

module.exports.createSession = function(req, res){
    return res.redirect('/');    
}

module.exports.destroySession = function(req, res){
    req.logout();
    
    return res.redirect('/');
}