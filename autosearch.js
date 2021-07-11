const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
var mapid = document.getElementById('mapid');
var mymap = L.map('mapid').setView([13.878876239563079, 100.65039509587206], 10);
var info = L.control();

let webLink;

L.geoJSON(line).addTo(mymap)

let namearray = [];
// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];

    for (let index = 0; index < line.features.length; index++) {
        namearray.push(line.features[index].properties.name);
    }
    if (userData) {

        icon.onclick = () => {
            // webLink = `https://www.google.com/search?q=${userData}`;
            // linkTag.setAttribute("href", webLink);
            // linkTag.click();
            // for (let index = 0; index < line.features.length; index++) {
            //     if (userData == namearray[index]) 
            //     {
            //         console.log(userData)
            //         console.log(index)
            //     }

            // }
        }
        console.log(line.features[0].properties.name);
        emptyArray = namearray.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
let arraydelete = [];
let arraydetemp = [];
var x = null;

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = () => {
        for (let index = 0; index < line.features.length; index++) {

            arraydetemp[index] = line.features[index].geometry;

            if (selectData == namearray[index]) {
                function innerHTML_Text() {
                    document.getElementById('text_level').innerHTML = line.features[index].properties.name;
                    document.getElementById('show_text').innerHTML = "เป็นระดับน้ำของคลอง: "+line.features[index].properties.name+"มีระดับน้ำเท่ากับ: "+line.features[index].properties.density+" สามารถกด Read more เพื่อดูรูปภาพระดับน้ำได้";
                    document.getElementById('text').innerHTML = line.features[index].properties.name;
                    document.getElementById('readd').style.display='block';
                }
                innerHTML_Text();
                console.log(line.features[index].properties.name);
                mymap.flyTo([line.features[index].geometry.coordinates[0][1], line.features[index].geometry.coordinates[0][0]], 12)
                function style2(feature) {
                    return {
                        fillColor: line.features[index].geometry.coordinates[index],
                        color: 'blue'
                    };
                }
                if (x != null) {
                    mymap.removeLayer(arraydelete[x]);
                }
                x = 0;
                arraydelete[x] = L.geoJson(arraydetemp[index], {
                    style: style2,
                }).addTo(mymap);
            }

        }
    }
    searchWrapper.classList.remove("active");
}








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

geojson = L.geoJson(line, {
    style: style,
}).addTo(mymap);



function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


// info.onAdd = function (map) {
//     this._div = L.DomUtil.create('div', 'info');
//     this.update();
//     return this._div;
// };

// info.update = function (props) {
//     this._div.innerHTML = '<h4>Shape_Leng </h4>' + (props ?
//         '<b>' + props.namearray[0] + '</b><br />' + Math.round(props.Shape_Leng * 100, 1) + ' m<sup>3</sup>'
//         : 'Hover over a state');
// };
// info.addTo(mymap)
function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: 'blue',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);

}

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
geojson = L.geoJson(line, {

    style: style,
    onEachFeature: onEachFeature
}).bindTooltip(line.features.properties).addTo(mymap);
console.log()
