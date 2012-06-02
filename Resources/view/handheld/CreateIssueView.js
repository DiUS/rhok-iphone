rhok.view.createIssue = function() {
	var createButton = Ti.UI.createButton({ 
		systemButton : Ti.UI.iPhone.SystemButton.ADD,
		title : 'Add issue'
	});
	var view = Titanium.UI.createWindow({
		backgroundColor : 'green'
	});
	view.add(createButton);
	return view;
}();

