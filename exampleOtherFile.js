// import syntax works for React, needs different tweaks for vanilla JS
// import {logTheTeam as originalLogger}  from "./script";



logTheTeam();
// originalLogger();


console.log(person.name);

// import data from "./jsonExample.json";

// let data = fetch("./jsonExample.json").then(data => {return data});

// console.log(data);

let exampleJson = {
	"name":"Alex",
	"favouriteFood":[
		"pizza",
		"pies",
		"mangoes"
	]
}


/*

1. JSON.parse to convert a JSON string into an object
2. Modify the object however you want
3. Save the JSON as a JSON string by stringifying it

*/

let jsonString = JSON.stringify(exampleJson);

console.log(JSON.stringify(exampleJson));

// Load your JSON 
let processedJson = JSON.parse(jsonString);

console.log(processedJson);
processedJson.name = "Batman";

console.log(JSON.stringify(processedJson));


