/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.  
 * A starting point for tab-based application with multiple top-level windows. 
 * Requires Titanium Mobile SDK 1.8.0+.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

// require('parse-1.0.0.min');

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

var rhok = {};

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
		
	rhok.config = {};
  	rhok.controller = {};
  	rhok.model = {};
  	rhok.view = {};

	Ti.include("view/handheld/views.js");
	Ti.include("controller/controllers.js");
	var Window = require('view/handheld/ApplicationWindow');

	var ApplicationTabGroup = require('view/common/ApplicationTabGroup');
	new ApplicationTabGroup(Window).open();
})();

