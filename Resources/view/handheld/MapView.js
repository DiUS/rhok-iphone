rhok.view.map = (function () {
  var self = {};
  
  self.view = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:33.74511, longitude:-84.38993, 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true
    // annotations:[mountainView]
	});

  return self;
})();