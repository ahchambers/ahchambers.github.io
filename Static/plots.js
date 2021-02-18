// Gender
var trace1 = {
  labels: gender_data.map(object => object.Gender),
  values: gender_data.map(object => object.Count),
  type: 'pie'
};

var data = [trace1];

var layout = {
  colorway : ['#1d1d38', '#2E86C1', '#A9CCE3' , ],
  title: "Gender",
};

Plotly.newPlot("gender_plot", data, layout);

// Age
var trace2 = {
  x: age_data.map(object => object["Age Group"]),
  y: age_data.map(object => object["Count"]),
  type: "bar"
};

var data2 = [trace2];

var layout2 = {
  colorway : ['#1d1d38'],
  title: "Age"
};

Plotly.newPlot("age_plot", data2, layout2);



var data3 = [
  {
    "type": "sunburst",
    "labels": ["Users", "Subscribers", "Female", "20s", "30s", "40s", "50s", "60s", "70s", "80+", "Male", "20s", "30s", "40s", "50s", "60s", "70s", "80+", "Customers", "Females", "Males", "Uknown"],
    "parents": ["", "Users", "Subscribers", "Female", "Female","Female","Female","Female","Female","Female", "Subscribers", "Male", "Male", "Male", "Male", "Male", "Male", "Male", "Users", "Customers", "Customers", "Customers"],
    "values":  [495168, 464126, 100942, 9856, 51832,27230,7934,3860,166,4, 345322,23504,16112,97652,48198,21230,1612,14, 31042, 30, 72, 30940],
    "leaf": {"opacity": 0.4},
    "marker": {"line": {"width": 2}},
    "branchvalues": 'total'
  }];

  
  var layout3 = {
    colorway : ['#177AA5', '#1d1d38',  '#A9CCE3'],
    title: "User Type",
    "margin": {"l": 0, "r": 0, "b": 0, "t": 100},
  };
  
  
  Plotly.newPlot('user_plot', data3, layout3, {showSendToCloud: true});



// Day/weather/public holidays 
var trace4 = {
  x: day_data.map(object => object["date"]),
  y: day_data.map(object => object["Count"]),
  name: 'Trip Count',
  type: 'scatter',
  mode: 'markers',
  marker: {
    color: '#A9CCE3',
    opacity: 0.8,
    size: 10,
    line: {
      color: '#2E86C1',
      width: 3
    }
  },
};

var trace5 = {
  x: weather_data.map(object => object["date"]),
  y: weather_data.map(object => object["av_temp"]),
  name: 'Weather (F)',
  yaxis:'y2',
  type: 'scatter',
  mode: 'markers',
  marker: {
    color: '#2E86C1',
    opacity: 0.8,
    size: 10,
    line: {
      color: '#1A5276 ',
      width: 3
    }
  },
};

var trace6 = {
  x: ph_data.map(object => object["date"]),
  y: ph_data.map(object => object["count"]),
  name: 'Public Holidays',
  type: 'scatter',
  mode: 'markers',
  marker: {
    color: '##17A589',
    size: 15,
    }
};

var data4 = [trace4, trace5, trace6];

var layout4 = {
  xaxis: {
    showgrid: false,
    showticklabels: false,
  },
  yaxis: {title: 'Trip Count'},
  showgrid: false,
  yaxis2: {
    title: 'Weather (F)',
    titlefont: {color: '#1d1d38'},
    tickfont: {color: '#1d1d38'},
    overlaying: 'y',
    side: 'right',
    showgrid: false
  }
};



Plotly.newPlot("weather_plot", data4, layout4);




// MAP
var mymap = L.map('map').setView([40.730355, -74.036606], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiYWhjaGFtYmVycyIsImEiOiJja2lpajhzMXkwMzBlMnpueHAyNHR1MmU3In0.etLkftXF8NMHfcA7ZPEVIA"
}).addTo(mymap);

var circle = L.circle([40.71346382669195,-74.0686011314392], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 5.8
}).addTo(mymap);

var circle = L.circle([40.70495751672861,-74.08593088388444], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 6.8
}).addTo(mymap);

var circle = L.circle([40.714402,-74.06661093235016], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 6.8
}).addTo(mymap);

var circle = L.circle([40.698650544,-74.08801227807997], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 1.20
}).addTo(mymap);

var circle = L.circle([40.7124188237569,-74.07126188278198], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 3.54
}).addTo(mymap);

var circle = L.circle([40.69263996618329,-74.09693659999998], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 3.84
}).addTo(mymap);

var circle = L.circle([40.6970299,-74.0887723], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 4.80
}).addTo(mymap);

var circle = L.circle([40.7111305,-74.0788855], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 4.86
}).addTo(mymap);

var circle = L.circle([40.7104670233797,-74.082079678], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 6.90
}).addTo(mymap);

var circle = L.circle([40.710108700000006,-74.08363940000002], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 7.12
}).addTo(mymap);

var circle = L.circle([40.70965083364061,-74.0858489], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 10.38
}).addTo(mymap);

var circle = L.circle([40.71835519823214,-74.05727148056029], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 11.16
}).addTo(mymap);

var circle = L.circle([40.71653978099194,-74.06285852193831], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 16.70
}).addTo(mymap);

var circle = L.circle([40.72163014263835,-74.0503889322281], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 17.18
}).addTo(mymap);

var circle = L.circle([40.71277420000001,-74.07003879547119], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 18.48
}).addTo(mymap);

var circle = L.circle([40.726011729646245,-74.044725], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 33.28
}).addTo(mymap);

var circle = L.circle([40.7311689,-74.04288411140442], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 35.30
}).addTo(mymap);

var circle = L.circle([40.727595965999996,-74.04399090000003], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 35.48
}).addTo(mymap);

var circle = L.circle([40.73496102000952,-74.04044330120088], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 35.86
}).addTo(mymap);

var circle = L.circle([40.71435836870427,-74.066921], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 43.82
}).addTo(mymap);

var circle = L.circle([40.7236589,-74.0492509], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 44.68
}).addTo(mymap);

var circle = L.circle([40.72152515,-74.050443636], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 47.32
}).addTo(mymap);

var circle = L.circle([40.71821129999999,-74.0575736], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 51.86
}).addTo(mymap);

var circle = L.circle([40.7177325,-74.05950307846071], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 54.58
}).addTo(mymap);

var circle = L.circle([40.72165072487999,-74.04996782541275], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 54.76
}).addTo(mymap);

var circle = L.circle([40.7376037,-74.03891444206238], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 55.40
}).addTo(mymap);

var circle = L.circle([40.7112423,-74.07840594649316], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 63.68
}).addTo(mymap);

var circle = L.circle([40.71958611647166,-74.051788633], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 66.26
}).addTo(mymap);

var circle = L.circle([40.7241765,-74.0487903356552], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 67.86
}).addTo(mymap);

var circle = L.circle([40.7253399253558,-74.04595255851744], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 67.90
}).addTo(mymap);

var circle = L.circle([40.72568548362901,-74.04557168483734], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 76.94
}).addTo(mymap);

var circle = L.circle([40.71928220070703,-74.05247829999998], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 79.58
}).addTo(mymap);

var circle = L.circle([40.734785818,-74.04281705617905], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 83.26
}).addTo(mymap);

var circle = L.circle([40.71458403535893,-74.0641943], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 90.58
}).addTo(mymap);

var circle = L.circle([40.723331586464354,-74.0496379137039], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 93.74
}).addTo(mymap);

var circle = L.circle([40.737711,-74.03852552175522], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 118.96
}).addTo(mymap);

var circle = L.circle([40.71848892,-74.0557013], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 131.56
}).addTo(mymap);

var circle = L.circle([40.7141454,-74.06762212514876], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 145.48
}).addTo(mymap);

var circle = L.circle([40.7287448,-74.04384499999998], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 155.82
}).addTo(mymap);

var circle = L.circle([40.7467299,-74.0335519], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 156.14
}).addTo(mymap);

var circle = L.circle([40.742677141,-74.03805095], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 166.88
}).addTo(mymap);

var circle = L.circle([40.7246050998869,-74.047726625], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 171.58
}).addTo(mymap);

var circle = L.circle([40.75255900000001,-74.03210820000002], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 180.62
}).addTo(mymap);

var circle = L.circle([40.72528910781132,-74.046304543], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 183.36
}).addTo(mymap);

var circle = L.circle([40.7443187,-74.03648570000001], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 189.24
}).addTo(mymap);

var circle = L.circle([40.72112360000001,-74.05065640000002], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 191.46
}).addTo(mymap);

var circle = L.circle([40.74590996631558,-74.03375890000002], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 267.26
}).addTo(mymap);

var circle = L.circle([40.7272235,-74.044247311], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 306.00
}).addTo(mymap);

var circle = L.circle([40.7162469,-74.06378388404845], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 342.74
}).addTo(mymap);

var circle = L.circle([40.748715945380226,-74.0334588], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 380.28
}).addTo(mymap);

var circle = L.circle([40.730742625306576,-74.043117463588], {
  color: '#1d1d38',
  fillColor: '#1d1d38',
  fillOpacity: 0.5,
  radius: 574.72
}).addTo(mymap);


