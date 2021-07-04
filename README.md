# leaflet-canvass
### Over view leaflet-canvas 
This project is a leaflet-canvas about canal line map in bangkok 💙💙💙
<dl>
  <dt>Function</dt>
  <dd>You can search canal in box search or ues mouse  click line on map</dd>
  <dd>Also you can see the canal pictures that you interested and see the canal’s water level</dd>
</dl>




## Leaflet

Leaflet usage
create div. use the ID that you can know it when you use as map.

How to use leaflet in Javascript(JS)

document.getElementById is how to use ID that you interested in HTML set the name is mapid as variable or anything.

```javascript
var mapid = document.getElementById('id');
```

L.tileLayer is how to use Attributemap by use API at Leaflet that fill in L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
Use addTo(mymap) to show all function on the map

```javascript
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
```

To show the line on the map is use L.geojson(line) by use style from the funvtion that you has already create name is style

```javascript
geojson = L.geoJson(line, {
    style: style,
}).addTo(mymap);
```
Style function will return where the return value contains fillcolor which is the fill color of the data feature properties density. It takes a value from the getColor function that returns a color value weight is the color is the color weight, opacity is the transparency of the line color is the command to add the color in datasets based on the density at the file line.js by use the function return name getColor.

```javascript
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 5,
        opacity: 1,
        color: getColor(feature.properties.density),
        dashArray: '3',
        fillOpacity: 0.7,
    };
}
```

