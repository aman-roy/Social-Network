Template.signup.events({
    'submit #signup-form': function(event,template){
        event.preventDefault();
        var user;
        user = {
        	name: template.find('#signup-name').value,
        	email: template.find('#signup-email').value,
        	password: template.find('#signup-password').value
        };
        Accounts.createUser(user, function(error){
        	if(error){
        		console.log(error);
        	}
        	else{
        		Router.go('newsfeed');
        	}
        });
        return false;
    }
});
