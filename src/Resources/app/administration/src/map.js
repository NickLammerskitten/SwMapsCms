let map;

async function initMap() {
    console.log("Map loading");

    const {Map} = await google.maps.importLibrary("maps");
    const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

    const position = {
        lat: -25.344,
        lng: 131.031
    };

    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
    });

    console.log("Map loaded");
}

initMap();

