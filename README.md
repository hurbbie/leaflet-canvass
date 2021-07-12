  # leaflet-canvas 🌆
### Over view leaflet-canvas 
This project is a leaflet-canvas about canal line map in bangkok 💙💙💙
<dl>
  <dt>Function</dt>
  <dd>You can search canal in box search or ues mouse  click line on map</dd>
  <dd>Also you can see the canal pictures that you interested and see the canal’s water level</dd>
  <dd>Access to data is to send a value from a click or  target from the mouse to the function that has already written It is located in the Leaflet section, To show the colored line have to access the Line.js data that has been downloaded from the Link</dd>
</dl>

   [Link canal's Js](https://data.go.th/dataset/canal "Data canal's in Bkk")
   
 

<a href="https://imgflip.com/gif/5ff3ky"><img src="https://i.imgflip.com/5ff3ky.gif" title="made at imgflip.com"/></a>

## Leaflet 💗💗💗

Leaflet usage
create div. use the ID that you can know it when you use as map.

#### How to use leaflet in Javascript(JS)

- document.getElementById is how to use ID that you interested in HTML set the name is mapid as variable or anything.

```javascript
var mapid = document.getElementById('id');
```

- L.tileLayer is how to use Attributemap by use API at Leaflet that fill in L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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

- To show the line on the map is use L.geojson(line) by use style from the funvtion that you has already create name is style
- To creating a variable as geojson = L.geoJson(line) is to call the function on the side leaflet by use geoJson(line) It retrieves information from the file line.js in which the information of line.js That is to include the values ​​of latitude, longitude, canal name, water density with style so setstyle is the line which is derived from the style function created
```javascript
geojson = L.geoJson(line, {
    style: style,
}).addTo(mymap);
```
- Style function will return where the return value contains fillcolor which is the fill color of the data feature properties density. It takes a value from the getColor function that returns a color value weight is the color is the color weight, opacity is the transparency of the line color is the command to add the color in datasets based on the density at the file line.js by use the function return name getColor.
- Style(feature) function Retrieving the line.js value that contains a sequence of feature data and return the value
onEachFeature: onEachFeature is the function that used for Layer GeoJso [Read more](https://leafletjs.com/examples/geojson/)

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

```javascript
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: click
    });
    function click() {
        document.getElementById('readd').style.display='block';
        document.getElementById('text_level').innerHTML = feature.properties.name;
        document.getElementById('text').innerHTML = feature.properties.name;
        document.getElementById('show_text').innerHTML = "เป็นระดับน้ำของคลอง: "+feature.properties.name+"มีระดับน้ำเท่ากับ: "+feature.properties.density+" สามารถกด Read more เพื่อดูรูปภาพระดับน้ำได้";
    };

}

```
- To access the data by points or click on the Layer that you had interested from the mouse to the command mouseover: hightlightFeature It is said that if we point the mouse over it, it will run hightlightFeature 
For hightlightFeature function is the line or Layer for setStyle

```javascript
function highlightFeature(e) {
    var layer = e.target; // It gets the value from the mouse pointer.
    layer.setStyle({ // is the setStyle for the line
        weight: 5,
        color: 'blue',
        dashArray: '',
        fillOpacity: 0.7
    });
```
- To point the mouse out mouseout:resetHighlight It is said that if we remove the mouse from Layer or the line that we have interested will use resetHightlight 
By resetHighlight function is resetStyle for the line or Layer

```javascript
function resetHighlight(e) {
    geojson.resetStyle(e.target); //to reset the value of the line
}
```

- The above will tell about moving the mouse pointer or hover, but next will be  Click, when we click, information will appear on the left, which is the function of clicking  which we will use inside as
- So dcoument.getElementByIdis how to use Element for Id that you had already Set and do the .innerHTML is insert the data or Control the data in HTML and that followed by feature.properties.name or feature.properties.density This accesses the data of the JS file that we put variables or configurations in.

```javascript
function click() {
        document.getElementById('readd').style.display='block';
        document.getElementById('text_level').innerHTML = feature.properties.name;
        document.getElementById('text').innerHTML = feature.properties.name;
        document.getElementById('show_text').innerHTML = "เป็นระดับน้ำของคลอง: "+feature.properties.name+"มีระดับน้ำเท่ากับ: "+feature.properties.density+" สามารถกด Read more เพื่อดูรูปภาพระดับน้ำได้";
    };
```

- Function getColor is the function to criteria-based color assignments

```javascript
function getColor(d) {
    return d > 10 ? '#800026' :
        d > 7 ? '#BD0026' :
            d > 6 ? '#E31A1C' :
                d > 5 ? '#FC4E2A' :
                    d > 4 ? '#FD8D3C' :
                        d > 3 ? '#FEB24C' :
                            d > 2 ? '#FED976' :
                                '#FFEDA0';
}
```

## Canvas 💗💗💗
Initially creating an HTML file, I named it index.html and had element <canvas> as an example.

```HTML 
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5 Canvas Tutorials</title>
  </head>
  <body>
    <canvas id="canvas" width="500" height="500"></canvas>
    <script src="main.js"></script>
  </body>
</html>
```
  
Create file js or write a script in HTML 
  
```javascript
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
```
- From the code above we select an element with ID name canvas. That is <canvas> the getContext('2d') to use 2d canvas context (an object to draw and create graphics)
Or you can write it like this
  
```javascript
var canvas = document.getElementById('canvas').getContext('2d')
```
  
#### Draw the square 
Square drawing, the function fillRect(x, y, width, height) can be use where x is the  x-axis ,y is the y-axis, and width, height is the width and height,respectively When we select Element canvas and had done getContext() we can draw a simple square with this code.
  
```javascript
  // set the color
context.fillStyle = 'green'
// drawing a square Rectangle (x, y, width, height)
// the  x,y-axis is counted from the top of the point 0, 0
context.fillRect(10, 10, 100, 100)
```
  #### Draw the line
To draw a line on the Canvas we will use it in conjunction with the Path with following important function.
  <dl>
  <dt>Function</dt>
  <dd>context.beginPath() : to set the path</dd>
  <dd>context.moveTo(x, y) : starting position to draw</dd>
  <dd>context.lineTo(x, y) : end of drawing</dd>
  <dd>context.lineWidth : this defines the size of the line</dd>
  <dd>context.strokeStyle : defines the color of the line</dd>
  <dd>context.lineCap : defined the line style, such as  round, square or butt</dd>
</dl>

 #### For example
```javascript
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
context.beginPath()
context.strokeStyle = '#3984dd'
context.lineWidth = 10
context.moveTo(50, 50)
context.lineTo(50, 200)
context.stroke()
context.beginPath()
context.strokeStyle = '#dd0343'
context.lineWidth = 10
context.lineCap = 'round'
context.moveTo(100, 50)
context.lineTo(100, 200)
context.stroke()
context.beginPath()
context.strokeStyle = '#06f3d2'
context.lineWidth = 10
context.lineCap = 'butt'
context.moveTo(150, 50)
context.lineTo(150, 200)
context.stroke()
```
#### Draw the Text
There are two methods of drawing Text.

<dl>
  <dd>fillText(text, x, y) : show the  Text as normally </dd>
  <dd>strokeText(text, x, y) : draws only the border Text and the other important methods as well</dd>
  <dd>font : set the size and the font that you want to use</dd>
  <dd>fillStyle : set the color of the Text in the same way as drawing square, circle, lines</dd>
  <dd>textAlign : you can define text-align</dd>
</dl>

 #### As an example
  
```javascript
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d')
context.beginPath()
context.font = '50px Open Sans sans-serif'
context.fillStyle = '#f36'
context.fillText('Hello HTML5 Canvas', 50, 50)
  ```
  <img src="https://i.stack.imgur.com/5AAyW.png"/>
  
#### For the length and width had set.
Refer to this [link](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)
  
  
  
- This define an EventListener. When changing the window size it will Resize and use the function Render
  
```javascript
 window.addEventListener("resize", render);
```
  
- Function Render is the use of the picture object and drawing. Which use imgObject.src = "scale.jpg"; This is the source image file.
  
```javascript
  var render = function () {
            context.canvas.width = document.documentElement.clientWidth * 0.5;
            context.canvas.height = document.documentElement.clientHeight * 0.5;
            context.drawImage(imgObject, 0, 0, context.canvas.width, context.canvas.height)
        }
   imgObject.src = "scale.jpg"; //This Address image 
        render(); // Run function render
```
___
  Thx For read 
