// import the data from data.js
const tableData = data;
// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // clear out existing table, if any
    tbody.html("");
    // loop through each object in the array
    data.forEach((dataRow)=> {
        // append a row to the table (tr)
        let row = tbody.append("tr"); 
        // loop through each field in the row and add each value to its own cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });

    });
}

function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
   // check if a date was entered and filter data using that date
    if (date){
        // apply filter to the table data to only keep the rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime===date);
        // rebuild the table using the filtered data
        // if no filter, table when be all data
        buildTable(filteredData);
       
    }
};
 // attach and event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);
 
 // build the table when the page loads
buildTable(tableData);