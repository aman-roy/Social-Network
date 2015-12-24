Template.login.events({
    'submit #login-form': function(event,template){
        event.preventDefault();
        var emailVar =  template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        Meteor.loginWithPassword(emailVar, passwordVar,function(error){
        	if (Meteor.user()) {
                Router.go('newsfeed');
            } else {
            	$("#login-error").text(error.reason);
            	$("#login-error-modal").openModal();
            }
            return;
        });
        return false;
    }
});
