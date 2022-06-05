# UFO Sighting Analysis

## Overview
This project was undertaken to help out friend, Dana, build an interactive website to display UFO sighting data in a friendly, easy-to-read, and accessible maner. This was accomplishe dy utilizing Javascript to parse the data and create a filterable table, and using HTML with Bootstrap and CSS components to display, format, and customize the appearance of the web page.
## Results
The web page we created allows the user to filter our UFO sighting data over five different parameters: date, city, state, country, and shape. Each of these has a user-accessible input box that prompts the user to input a text string for the desired filter and has the ability to take multiple filters and apply them to the data in sequence. To use a filter, the user clicks the corresponding input box and enters text for the desired filter term. Pressing "Enter" (or "return" on some keyboards) avtivates the Javascript programming and applies the filter to the data, quickly updating the table to only disply the relevent information. If the user wishes to return to the default table, which displays the entirety of the data set, they may do so by clicking the "UFO Sightings" navbar located in the top left of the screen. The following images provide visual aide on how to acoomplish a succesful filter. 

### The filters section of the web page
![UFO-Filter-Section](https://user-images.githubusercontent.com/100643755/172074066-40b525cc-13f4-46de-ba15-3e1b00e55370.png)
### A single filter with input box
![UFO-Filter-Subsection](https://user-images.githubusercontent.com/100643755/172074076-7b0b3533-8f94-4ffd-baaf-d10db1a6b0a6.png)
### Applying a single filter to the dataset
![UFO-Filter-Search-1](https://user-images.githubusercontent.com/100643755/172074092-f394a96f-7e41-40c8-a1a4-c5f98d4d1999.png)
### Applying a second filter to the dataset
![UFO-Filter-Search-2](https://user-images.githubusercontent.com/100643755/172074098-76871035-90d9-4903-859d-5466c87430e4.png)
### Reseting the table using the navbar
![UFO-Filter-Reset](https://user-images.githubusercontent.com/100643755/172074109-30237eb9-51c6-47a4-9225-312970605676.png)

## Summary and Recommendations 
### Downsides
While the webpage we created looks proffesional and is functional, there are 2 downsides the the current implementation.  
1. While the filter input boxes work, they require the user to known the format and capitilization of the search terms.  This could lead to the user incorrectly assumming no data matches their search term and causing undo frustration to the user.
2. The table is displayed as a single unit, meaning all results are displayed on the same page, which requires the user to scroll far down a page to see all of the data. While this may not be a big deal for the current size of the data set, if it was ever expanded on it could quickly become unwieldy to user.

### Recommendations
To remedy the above issues, we recommend the following be implemented into the javascript and HTML code.
1. Change the search boxes from text input to drop-down menus. These menus will contain terms that are present in the database, which ensures that the user is entering a proper term that will yield accurate results.
2. Implement a page structure to the results table. This structure will only display a manageable number of results at one time, and will allow for a more user-friendly navigation of the page as a whole while keeping a proffesional and clean look.
