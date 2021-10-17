var recipe_name_1;
var recipe_name_1;
var recipe_name_1;
var recipe_instructions_1;

var recipe_instructions_2;

var recipe_instructions_3;

var recipe_url_1;
var recipe_url_2;
var recipe_url_3;

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
        recipe_instructions_1 = results[0].instructions;
        if (typeof recipe_instructions_1 === 'undefined') 
            recipe_instructions_1 = results[0].recipes;
        recipe_instructions_2 = results[1].instructions;
        if (typeof recipe_instructions_2 === 'undefined') 
            recipe_instructions_2 = results[1].recipes;
        recipe_instructions_3 = results[2].instructions;
        if (typeof recipe_instructions_3 === 'undefined') 
            recipe_instructions_3 = results[2].recipes;

        let data_s = recipe_instructions_1;
        let list = document.getElementById("recipe_instructions_1");
  
        data_s.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item.description;
            list.appendChild(li);
        });

         data_s = recipe_instructions_1;
         list = document.getElementById("recipe_instructions_2");
  
        data_s.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item.description;
            list.appendChild(li);
        });

        data_s = recipe_instructions_1;
        list = document.getElementById("recipe_instructions_3");
  
        data_s.forEach((item) => {
            let li = document.createElement("li");
            li.innerText = item.description;
            console.log(item);
            list.appendChild(li);
        });
        


            document.getElementById("recipe_name_1").innerHTML = results[0].name;
            document.getElementById("recipe_name_2").innerHTML = results[1].name;
            document.getElementById("recipe_name_3").innerHTML = results[2].name;
            //document.getElementById("recipe_instructions_1") = recipe_instructions_1;
            //document.getElementById("recipe_instructions_2") = recipe_instructions_2;
            //document.getElementById("recipe_instructions_3") = recipe_instructions_3;
            //document.getElementById("recipe_url_1") = results[0].thumbnail_url;
            //document.getElementById("recipe_url_2") = results[1].thumbnail_url;
            //document.getElementById("recipe_url_3") = results[2].thumbnail_url;
        
    })
    .catch(err => {
        console.error(err);
    });
}