Meteor.methods({
	getInfo: function(assetPath){
		return Assets.getBinary(assetPath);
	}
});