Meteor.methods({
	getImage: function(assetPath){
		return Assets.getBinary(assetPath);
	}
});