Template.signup.onRendered(function(){
    $('#loaderModal').hide();
});


Template.signup.events({
    'submit #signup-form': function(event,template){
        event.preventDefault();
        var user;
        user = {
        	firstname: template.find('#signup-firstname').value,
            midname: template.find('#signup-midname').value,
            lastname: template.find('#signup-lastname').value,
        	email: template.find('#signup-email').value,
        	password: template.find('#signup-password').value
        };
        $('#loaderModal').show();
        Accounts.createUser(user, function(error){
        	if(error){
                $('#loaderModal').hide();
        		$("#signup-error").text(error.reason);
                $("#signup-error-modal").openModal();
        	}
        	else{
        		Router.go('index');
        	}
        });
        return false;
    }
});
