function initMap() {
	L.mapquest.key = "dbivscoz5eirSGu4xa1A6RAtOmw43eS3";

	var map = L.mapquest.map('map', {
		center: [32.88,-117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomcontrol: false
	});

	L.marker([32.88,-117.236]).addTo(map)
}