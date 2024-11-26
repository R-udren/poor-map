document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map', {
        worldCopyJump: true,
        maxZoom: 18,
        minZoom: 4
    }).setView([56.8796, 24.6032], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    fetch('geomap.json')
        .then(response => response.json())
        .then(data => {
            data.features.forEach(feature => {
                const coordinates = feature.geometry.coordinates;
                const properties = feature.properties;

                const latLng = LKS92WGS84.convertXYToLatLon(coordinates);

                const marker = L.marker([latLng[0], latLng[1]]).addTo(map);

                for (const key in properties) {
                    if (properties.hasOwnProperty(key) && key === 'PLACENAME') {
                        marker.bindPopup(`<b>${properties[key]}</b>`);
                    }
                    else if (properties.hasOwnProperty(key)) {
                        marker.bindPopup(marker.getPopup().getContent() + `<br>${key}: ${properties[key]}`);
                    }
                }
            });
        })
        .catch(error => console.error('Error loading the data:', error));
});