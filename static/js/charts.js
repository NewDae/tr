// load google charts library
google.load("visualization", "1", {packages:["corechart","controls","gauge"]});
google.charts.load("current", {packages: ["gauge"]});


// for rest, walk, fast_walk data
var data, options, chart;

// for energy(E) data
var data2, options2, chart2;

var i = 0;

/* initialize chart1 - rest, walk, fast_walk data */
/*function drawChart(data, options) {
    var chart = new google.visualization.LineChart(document.getElementById('data-container'));
    chart.draw(data, options);
    return(chart);
}*/

/* initialize chart2 - energy(e) data */
function drawChart2(data, options) {
    var chart2 = new google.visualization.LineChart(document.getElementById('data-container2'));
    chart2.draw(data, options);
    return(chart2);
}



/* update the chart1 - rest, walk, fast_walk data */
function updateChart(a) {

var chart = new google.visualization.Gauge(document.getElementById('data-container'));
data = google.visualization.arrayToDataTable([
        ['HR', 'a'],
        ['0', 0],
    ]);
    options = {
          width: 400, height: 500,
          redFrom: 150, redTo: 187,
          yellowFrom:70, yellowTo: 120,  
          greenFrom:120, greenTo:150,
          min: 70,max: 200,
          minorTicks: 5,
          majorTicks : ['70','Warm Up','Fat Burn','Peak','200']
        };

  
    i = (i + 1);
    data.addRow([
        "",
        a
    ]);

  chart.draw(data, options);
}

/* update the chart2 - energy(e) data */
function updateChart2(e) {
    data2.addRow([
        ""+i,
        e
    ]);
    chart2.draw(data2, options2);
}

function clearChart(){
chart.clearChart();}

$(function() {
 
    data = google.visualization.arrayToDataTable([
        ['HR', 'a'],
        ['0', 0],
    ]);
        options = {
          width: 400, height: 500,
          redFrom: 150, redTo: 187,
          yellowFrom:70, yellowTo: 120,  
          greenFrom:120, greenTo:150,
          min: 70,max: 200,
          minorTicks: 5,
          majorTicks : ['70','Warm Up','Fat Burn','Peak','200']
        };

    data2 = google.visualization.arrayToDataTable([
        ['Time', 'E'],
        ['0', 0],
    ]);
    

    options2 = {
        title: 'Energy data',
        "curveType": "function",
    };

    chart2 = drawChart2(data2, options2);
});


/* reset charts */
function reset(){
    i = 0;
    data = google.visualization.arrayToDataTable([
        ['HR', 'a'],
        ['0', 0],
    ]);
    options = {
          width: 400, height: 500,
          redFrom: 150, redTo: 187,
          yellowFrom:70, yellowTo: 120,  
          greenFrom:120, greenTo:150,
          min: 70,max: 200,
          minorTicks: 5,
          majorTicks : ['70','Warm Up','Fat Burn','Peak','200']
        };
data2 = google.visualization.arrayToDataTable([
        ['Time', 'E'],
        ['0', 0],
    ]);

    options2 = {
        title: 'Energy data',
        "curveType": "function",
    };

    chart = drawChart(data, options);
    chart2 = drawChart2(data2, options2);
}
