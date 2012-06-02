rhok.view.createIssue = function() {
	var createButton = Ti.UI.createButton({ 
		systemButton : Ti.UI.iPhone.SystemButton.ADD,
		left: 100,
		width : 80,
		height: 30,
		title : 'Add issue'
	});
	
	createButton.addEventListener('click', function() {
		rhok.controller.issueController.createIssue();
		rhok.view.listIssues.open();
	});
	
	var cancelButton = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.CANCEL,
		left : 10,
		width : 80,
		height: 30,
		title : 'Cancel'
	});
	
	cancelButton.addEventListener('click', function() {
		rhok.view.createIssue.close();
		//rhok.view.listIssues.open();
	});
	
	var view = Titanium.UI.createWindow({
	});
	view.add(createButton);
	view.add(cancelButton);
	return view;
}();

