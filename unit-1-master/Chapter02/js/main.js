// 

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
    var tr = document.createElement("tr");

    var city = document.createElement("td");
    city.innerHTML = cityPop[i].city;
    tr.appendChild(city);

    var pop = document.createElement("td");
    pop.innerHTML = cityPop[i].population;
    tr.appendChild(pop);

    table.appendChild(tr);

    i++;
};
    document.querySelector('#myDiv').appendChild(table);
};


document.addEventListener('DOMContentLoaded', initialize);