rhok.view.createIssue = function() {
	var createButton = Ti.UI.createButton({ 
		systemButton : Ti.UI.iPhone.SystemButton.ADD,
		title : 'Add issue'
	});
	var view = Titanium.UI.createView({});
	view.add(createButton);
	return view;
}();

