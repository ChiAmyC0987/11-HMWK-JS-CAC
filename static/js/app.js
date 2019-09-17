//Level 1: Automatic Table and Date Search// help from TA Nehal and Christian
// from (StarterCode/static/js/data.js)
var tableData = data;

// select tbody from index.html using D3
tbody = d3.select("tbody")

// using Object.entries load key"sighting" and value"record" into the table
// forEach loop to add sightings to a table in html format
function displayData(data){
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
    new_td = new_tr.append("td").text(value)
    })
})}

// show table
displayData(tableData)

//user type in a date and click button to filter
var inputText = d3.select("#datetime")
var button = d3.select("filter-btn")

// filter data with desired date
function changeHandler(){
    d3.event.preventDefault();
    console.log(inputText.property("value"));
    var new_table = tableData.filter(sighting => sighting.datetime===inputText.property("value"))
    displayData(new_table)
}

// event listener to handle change and click
inputText.on("change", changeHandler)
button.on("click", changeHandler)

// -------------------------------------End Level 1-------------------------- //
