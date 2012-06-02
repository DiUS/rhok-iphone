rhok.network = function (){ 
	xhr = function(url, responseHandler, options) {
 	    var method = "GET";
	    var contentType = "JSON";
	    var errorCallback = null;
	    var postParams = null;
	
	    if (options !== undefined && options != null) {
	      if (options.method !== undefined && options.method != null) {
	        method = options.method;
	      }
	      
	      if (options.contentType !== undefined && options.contentType != null) {
	        contentType = options.contentType;
	      }
	
	      if(options.errorCallback !== undefined && options.errorCallback != null) {
	        errorCallback = options.errorCallback;
	      }
	
	      if(options.postParams !== undefined && options.postParams != null) {
	        postParams = options.postParams;
	      }
	    }

	    var xhr = Ti.Network.createHTTPClient({
	      onload : function(e) {
	        if(this.status == 200) {
	        	Ti.API.info(this.responseText);
	          var parsedResponse = JSON.parse(this.responseText);
	          responseHandler(parsedResponse);
	        } else {
	        	Ti.API.info(this.status);
	          //Do something here
	        }
	      },
	      onerror : function(e) { Ti.API.error(e.error); },
	      timeout : 10000
	    });
	
	    xhr.open(method,  url);

	    if (contentType == "JSON") {
	      xhr.setRequestHeader("Content-Type", "application/json");
	      xhr.setRequestHeader("Accept", "application/json");
	      xhr.setRequestHeader("X-Parse-Application-Id", "lGZqd3iRqUPZCEjwmWDp4EKWV1dd0xofryNY4TuB");
	      xhr.setRequestHeader("X-Parse-REST-API-Key", "QwfvNEkNjAOEXeydTbwkCdaI2RdAQoQKfUlImEVH");
	    }
	    
	    if (postParams === null) {
	      xhr.send();
	    } else {
	      xhr.send(postParams);
	    }
	};
	return {
		xhr : function(url, responseHandler, options) {
			xhr(url, responseHandler, options);
		}
	};
}();
Ti.include('IssueController.js');
