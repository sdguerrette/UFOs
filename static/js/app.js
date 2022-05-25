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