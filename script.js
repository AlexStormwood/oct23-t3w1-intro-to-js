function exampleStuff(){
	let exampleEmptyVariable = null;
	let anotherEmptyVariable = undefined;
	
	console.log(exampleEmptyVariable, anotherEmptyVariable);
	
	let message = "hello from the script.js file!";
	
	console.log(message);
	
	// // no keyword = declared with var
	// world = "Earth";
	
	// console.log(`Hello ${world}, I am Alex!`);
	
	// console.log("Hello " + world + ", I am Alex!");
	
	// let world = "Mars";
	
	// console.log(`Hello ${world}, I am Alex!`);
	
	// {
	
	// 	//let world = "Mars";
	
	// 	console.log(`Hello ${world}, I am Alex!`);
	
	// }
	
	
	
	
	
	
	
	// List in Python is Array in JS
	
	let favouriteFruits = [
		"mango",
		"banana",
		"grapes",
		"passionfruit",
		"pear",
		"strawberry",
		"watermelon",
		"lychee",
		"cherry",
		"blueberry",
		"tomato",
		"papaya",
		"dragon fruit",
		"kiwi"
	];
	
	console.log(favouriteFruits[12]);
	
	console.log("The class' favourite fruits are: " + favouriteFruits);
	
	
	// favouriteFruits.forEach(fruit => {
	// 	console.log("Someone in the class loves " + fruit);
	// });
	
	for (fruitIndex in favouriteFruits) {
		console.log("Someone in the class loves " + favouriteFruits[fruitIndex]);
	}
	
	
	console.log(Array.isArray(favouriteFruits));
	
	
	// Array.prototype.sort()
	let sortedFavouriteFruits = favouriteFruits.sort();
	
	console.log(sortedFavouriteFruits);
	
	let someNewArray = new Array(10);
	
	someNewArray.push("mango");
	
	console.log(someNewArray);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// Dictionary in Python is Object in JS
	
	let alex = {
		name: "alex",
		"codingLanguages": ["C#", "JavaScript", "HTML", "CSS"],
		hobbies: [
			{
				"name": "gardening",
				"skill": 10,
			},
			{
				"name": "gaming",
				"favouriteGames": ["pokemon", "halo"],
				"skill": 9001,
			}
		],
	};
	
	alex.hobbies[1]["favouriteGames"][0] = "digimon";
	
	alex.hobbies[1].favouriteGames[0] = "palworld";
	
	console.log(alex);
	
	
	/**
	 * Status of the weather, manually set.
	 * @date 4/4/2024 - 8:59:52 PM
	 * @author BigfootDS
	 */
	let weather = "rainy";
	
	switch (weather) {
		case "sunny":
			console.log("Sunny weather is nice when it's not hot!");
			break;
		case "rainy":
			console.log("Rain is nice when it's not torrential!");
			break;
		case "hail":
			console.log("Man, that hail is wild");
			// break;
		case "storm":
		case "snowy":
		default:
			console.log("Crazy weather, am I right?");
			break;
	}
	
	
	if (weather == "sunny") {
		console.log("Sunny weather is nice when it's not hot!");
	} else if (weather == "rainy") {
		console.log("Rain is nice when it's not torrential!");
	} else {
		console.log("Crazy weather, am I right?");
	}
	
	
}


let pokemonTeam = [
	"pikachu",
	"squirtle",
	"charmander",
	"mew",
];


function logTheTeam () {
	sortedTeam = pokemonTeam.sort();

	let [firstPokemon, ...otherPokemon] = sortedTeam;

	console.log(firstPokemon);
	console.log(otherPokemon);

	do {
		console.log(sortedTeam.pop());
	} while (sortedTeam.length);

	sortedTeam.push("blastoise");

	for (let index = 0; index < sortedTeam.length; index++) {
		console.log("Pokemon at index " + index + " is " + sortedTeam[index]);
	}
}

// logTheTeam();


const logTheTeamAlternate = (targetSize = 4) => {
	// double equals is checking for value
	// type coercion happens where possible automatically
	if (pokemonTeam.length == targetSize){
		console.log("There are + " + targetSize + " pokemon in the team");
	}

	// triple equals is checking for value AND data type
	if (pokemonTeam.length === targetSize){
		console.log("There are " +  targetSize  + " Pokemon in the team, this is from the strict equals comparison");
	}
}
logTheTeamAlternate();
logTheTeamAlternate(2);


var smellStrength;

function someSmellyFunction(){
	smellStrength = 1;

	let smellTotalStrength = (baseStrength, multiplier) => {
		return baseStrength * multiplier;
	}

	return smellTotalStrength(smellStrength, 10);
	// equivalent to:
	// return 100;
}

// console.log(smellStrength);
// console.log(someSmellyFunction());
// console.log(smellStrength);


let person = {
	name: "Alex",
	greeting: (message) => {
		console.log("Hello! I have a message for you: ");
		console.log(message);
	},
	farewell: function (message) {
		console.log("Bye bye! Here are some parting words: ");
		console.log(message);
	},
	dance: (dance) => {
		console.log("I'm gonna dance!");
		// this.dance() is for JS classes, not objects
		// recursive function, do not call
		// it can crash your browser!
		person.dance();
	},
	listFavouritePokemon: (pokemonList, formatFunction) => {
		console.log("Hi! I have some favourite Pokemon to share. They are: ");
		formatFunction(pokemonList);
	} 
}


function improvedTeamLogging(pokemonTeam){
	let sortedReversedTeam = pokemonTeam.sort().reverse();

	sortedReversedTeam.forEach(pokemonName => {
		console.log(pokemonName);
	});
}


person.listFavouritePokemon(["pikachu", "blastoise"], improvedTeamLogging);

person.listFavouritePokemon(
	["pikachu", "blastoise"], 
	improvedTeamLogging
);










// person.greeting("message");

// person.farewell("message");

// person.dance();

