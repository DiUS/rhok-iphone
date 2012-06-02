rhok.view.map = (function () {
 	var self = {};
  
    var region = {}
	Ti.Geolocation.purpose = "GPS demo";
	Titanium.Geolocation.getCurrentPosition(function position(pos) {
		Titanium.API.info("Current position: " + pos.coords.latitude + "  " + pos.coords.longitude);
		region = {
	  		latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            animate: true,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
	  	}
	});
  
 	self.view = Titanium.Map.createView({
    	mapType: Titanium.Map.STANDARD_TYPE,
    	animate:true,
    	regionFit:true,
    	userLocation:true
    	// annotations:[mountainView]
	});

  	return self;
})();