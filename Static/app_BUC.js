// Complete the event handler function for the form
function runEnter() {
  // From bike_usage.js
var tableData = bike_data;

//Select table body 
var tbody = d3.select("tbody");

// Clear existing data
function buildTable(bike_data) {
    tbody.html("");
  
// Loop through each object and append row and cell
bike_data.forEach((bike) => {
    var row = tbody.append("tr");
    Object.entries(bike).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    }
    );
  });
}
  // Declare filteredData
   let filteredData = tableData;

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element
  var inputElement = d3.select("#exampleFormControlInput1");

  // Get the value property of the input element
  var id = inputElement.property("value");
  
  //Apply filter
  if (id) {
    filteredData = filteredData.filter(row => row.BikeID === id);
  }

  buildTable(filteredData);
  }
 

  // Attach an event to listen for the form button
d3.selectAll("#bikeid_button").on("click", runEnter);

// Build the table when the page loads
buildTable(tableData);
