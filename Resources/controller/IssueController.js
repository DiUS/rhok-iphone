rhok.controller.issueController = function() {

	function createIssue() {
		Ti.API.info('I can has logging');
		rhok.network.xhr(
			'https://api.parse.com/1/classes/Issue', 
			function(response) {
				Ti.API.info(response);
			}
		);
	}
	
	function loadIssues(issueList) {
		rhok.network.xhr(
			'https://api.parse.com/1/classes/Issue', 
			function(response) {
				var issues = [];
				for (var i = 0; i < response.results.length; i++) {
					issue = response.results[i];
					Titanium.API.info("Adding issue: " + issue.title);
					issues.push(Titanium.UI.createTableViewRow({
						height: 40,
						width: 100,
						title: issue.title
					}));
				}
				Titanium.API.info("Adding issues: " + issue);
				issueList.setData(issues);
			}
		);
	}
	
	return {
		createIssue : function() { 
			createIssue();
		},
		loadIssues : function(issueList) {
			loadIssues(issueList);
		}
	};
}();
