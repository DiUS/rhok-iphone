rhok.controller.issueController = function() {

	createIssue = function() {
		Ti.API.info('I can has logging');
		rhok.network.xhr(
			'https://api.parse.com/1/classes/Issue', 
			function(response) {
				Ti.API.info(response);
			}
		);
	}
	
	return {
		createIssue : function() { 
			createIssue();
		}
	};
}();
