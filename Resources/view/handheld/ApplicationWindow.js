

function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	self.add(rhok.view.createIssue);
	self.add(rhok.view.map.view);
	
	return self;
};

module.exports = ApplicationWindow;
