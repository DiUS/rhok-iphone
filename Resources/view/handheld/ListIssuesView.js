rhok.view.listIssues = function() {
	var view = Titanium.UI.createWindow({
	});

	var issueList = Ti.UI.createTableView({
		height : 500
 	});

	rhok.controller.issueController.loadIssues(issueList);

	view.add(issueList);
	
	return view;
}();
