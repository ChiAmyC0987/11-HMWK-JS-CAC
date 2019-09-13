// from data.js
var tableData = data;

// {/* <th class="table-head">Date</th>
// <th class="table-head">City</th>
// <th class="table-head">State</th>
// <th class="table-head">Country</th>
// <th class="table-head">Shape</th>
// <th class="table-head">Duration</th>
// <th class="table-head">Comments</th> */}

// Assign the data from `data.js` to a descriptive variable
var data = [{
   datetime: Date,
   city: String,
   state: String,
   country: String,
   shape: String,
   durationMinutes: String,
   comments: String
 }

 // var ufo = data

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = data.filter(Date => data.datetime === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the duration field of the filtered data

  // First, create an array with just the duration values
  var Duration = filteredData.map(Duration => data.durationMinutes);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var mean = math.mean(Duration);
  var median = math.median(Duration);
  var mode = math.mode(Duration;
  var variance = math.var(Duration);
  var standardDeviation = math.std(Duration);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Mean: ${mean}`);
  list.append("li").text(`Median: ${median}`);
  list.append("li").text(`Mode: ${mode}`);
  list.append("li").text(`Variance: ${variance}`);
  list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});