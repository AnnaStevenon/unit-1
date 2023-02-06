//initialize function called when the script loads
function initialize(){
    cities();
};

// function to create table with cities and their populations

function cities(){

//define an array of objects for cities and pop.

var cityPop = [
    {
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milkwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
];


 //create a table element
 var table = document.createElement("table");

 //create a header row
 var headerRow = document.createElement("tr");

 //add city column to header row
 var cityHeader = document.createElement("th");
 cityHeader.innerHTML = "City";
 headerRow.appendChild(cityHeader);

 //add population column to header row
 var popHeader = document.createElement("th");
 popHeader.innerHTML = "Population";
 headerRow.appendChild(popHeader);

 //add the header row
 table.appendChild(headerRow);

// While loop to create a table

var i=0;

while (i < cityPop.length) {
    var tr = document.createElement("tr"); //tr is table row

    var city = document.createElement("td"); // td is a data cell within the table
    city.innerHTML = cityPop[i].city;
    tr.appendChild(city);

    var pop = document.createElement("td");
    pop.innerHTML = cityPop[i].population;
    tr.appendChild(pop);

    table.appendChild(tr);

    i++;
};
    document.querySelector('#myDiv').appendChild(table); //adds the whole table to the div element myDiv

	
// call functions to add new column and add colors and pop up text
addColumns(cityPop);
addEvents();

}; //end of cities function

// add columns
function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){
		//row 0 is the header called City Size
    	if (i == 0){

    		row.insertAdjacentHTML('beforeend', '<th> City Size </th>');
    	} else {

    		var citySize; //variable citySize is defined by the if else loop

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			// adds citySize from the loop to the rows
			row.insertAdjacentHTML('beforeend', citySize);
    	};
    });
};

// define addEvents function
function addEvents(){

	//select the table
	table = document.querySelector("table")
	//random colors appear when mouseover the table
	table.addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		}
		table.style.color = color;
		
	});
	//add event for clicking
	function clickme(){
		//function is to respond with an alert
		alert('Hey, you clicked me!');
	};
	// add eventlistener to table. Click is the event and clickme is the response
	table.addEventListener("click", clickme)
};

//run the initialize function when DOM content is loaded
document.addEventListener('DOMContentLoaded', initialize);



