Template.login.events({
    'submit #login-form': function(event,template){
        event.preventDefault();
        var emailVar =  template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
        Meteor.loginWithPassword(emailVar, passwordVar,function(error){
        	if (Meteor.user()) {
                Router.go('newsfeed');
            } else {
                console.log(error.reason);
                $("#login-error-modal").openModal();
            	$("#login-error").text(error.reason);
            }
            return;
        });
        return false;
    }
});
