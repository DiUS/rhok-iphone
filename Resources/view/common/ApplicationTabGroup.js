function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new Window(L('settings'));
		
	win1.add(rhok.view.createIssue);
	win1.add(rhok.view.map.view);
	
	var btnCreateIssue = Titanium.UI.createButton({
	    title:'+'
	});
	 
	win1.rightNavButton = btnCreateIssue;
	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
