var recipe_name;
var recipe_nutrition;
var recipe_url;
var recipe_instructions;

console.log("hello world");


document.getElementById('SampleButton').addEventListener("click", get_recipe);
function submit(event) {
    event.preventDefault();
}

// random
var seed = 1;
function random() {
    var x = Math.sin(seed++) * 8000;
    return x - Math.floor(x);
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

    fetch("https://tasty.p.rapidapi.com/recipes/list?from=" + random() + "&size=3", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": "9457ace4efmsh75335d360ed9d31p1f05bdjsnfd3e606ceec1"
        }
    })
    .then(response =>
        response.json())
    .then(data => {
        var results = data.results;
        console.log(results);
        for (let i = 0; i < results.length; i++)
        {
            recipe_name = results[i].name;
            recipe_instructions = results[i].instructions;
            if (typeof recipe_instructions === 'undefined') recipe_instructions = results[i].recipes;
            console.log(recipe_name);
            console.log(recipe_instructions);
        }
    })
    .catch(err => {
        console.error(err);
    });
}