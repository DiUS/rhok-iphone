rhok.network = (function (){ 
	var me = {};

	me.xhr = function(url, responseHandler, options) {
    
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
	          var parsedResponse = JSON.parse(this.responseText);
	          Ti.API.debug(parsedResponse);
	          responseHandler(parsedResponse);
	        } else {
	          _wrappedErrorCallback(errorCallback).displayServerError(this.status, this.responseText);
	        }
	      },
	      onerror : _wrappedErrorCallback(errorCallback).registerFailedCallback,
	      timeout : 10000
	    });
	
	    xhr.open(method,  _hashedUrl(me.piggybackUserId(url)));
	    
	    if (contentType == "JSON") {
	      xhr.setRequestHeader("Content-Type", "application/json");
	      xhr.setRequestHeader("Accept", "application/json");
	    }
	    
	    if (postParams === null) {
	      xhr.send();
	    } else {
	      xhr.send(postParams);
	    }
	};
	return me;
})();
Ti.include('IssueController.js');
