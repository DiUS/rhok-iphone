

function ApplicationWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	var parsebutton = Ti.UI.createButton({
		height:44,
		width:200,
		title:'hit parse',
		top:80
	});
	self.add(parsebutton);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		self.containingTab.open(Ti.UI.createWindow({
			title: L('newWindow'),
			backgroundColor: 'white'
		}));
	});
	
	parsebutton.addEventListener('click', function() {
		
		var Incident = Parse.Object.extend("Incident");
	});
	
	return self;
};

module.exports = ApplicationWindow;
