/*Template.sideNav.onRendered(function () {
	if(Meteor.user()){
		Meteor.call('getImage', 'images/'+Meteor.userId(), function (e, data) {
			var base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));
			$('#profilePic').attr('src', 'data:image/png;base64,' + base64String);
		});
	}
});*/