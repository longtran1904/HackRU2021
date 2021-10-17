var mysql = require('Project');

var con = mysql.createConnection({
    host: "127.0.0.1:3306",
    user: "root",
    password: "Grand13111092720",
    database: "Project"
});

var recipe_name;
var recipe_description;
var recipe_url;
var recipe_instructions;

console.log("hello world");


document.getElementById('SampleButton').addEventListener("click", get_recipe);
function submit(event) {
    event.preventDefault();
}
//finds the placeId of starting location
function get_recipe() {
    //reading the inputs from the homepage form
    // currentLocation = document.getElementById('currentLocation').value;
    // destination = document.getElementById('destination').value;
    // departureDate = document.getElementById('departureDate').value;
    // returningDate = document.getElementById('returningDate').value;
    // currency = document.getElementById('currency').value;
    console.log("Button clicked");

    fetch("https://tasty.p.rapidapi.com/recipes/detail?id=5000", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tasty.p.rapidapi.com",
		"x-rapidapi-key": "9457ace4efmsh75335d360ed9d31p1f05bdjsnfd3e606ceec1"
	}})
    .then(response =>
        response.json())
    .then(data => {
        recipe_name = data.name;
        recipe_description = data.description;
        recipe_instructions = data.instructions;
        console.log(recipe_name);
        console.log(recipe_description);
        console.log(recipe_instructions);
    })
    .catch(err => {
        console.error(err);
    });
}