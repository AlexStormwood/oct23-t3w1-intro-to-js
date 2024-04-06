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

let jsonString = JSON.stringify(exampleJson);

console.log(JSON.stringify(exampleJson));

// Load your JSON 
let processedJson = JSON.parse(jsonString);

console.log(processedJson);
processedJson.name = "Batman";

console.log(JSON.stringify(processedJson));


