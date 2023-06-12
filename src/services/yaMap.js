
export default function yaMap(coord) {
    function init() {
        let point = [+(coord[1].toFixed(2)), +(coord[0].toFixed(2))]
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: point // координаты точки
            }
        });
        var myMap = new ymaps.Map("map", {
            center: point,
            zoom: 16
        });
        myMap.geoObjects.add(myGeoObject); 
    }

    ymaps.ready(init);
} 