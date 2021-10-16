var currentLocation = document.getElementById('currentLocation').value;
var destination = document.getElementById('destination').value;
var departureDate = document.getElementById('departureDate'.value);
var returningDate = document.getElementById('returningDate'.value);
var country = "US";
var currency = document.getElementById('currency').value;
var locale = "en-US";

var placeID1;
var placeID2;

var recipe_name;
var recipe_description;
var recipe_url;
var recipe_instructions;
console.log("hello world");


document.getElementById('SampleButton').addEventListener("click", get_recipe);
//finds the placeId of starting location
function get_recipe() {
    //reading the inputs from the homepage form
    // currentLocation = document.getElementById('currentLocation').value;
    // destination = document.getElementById('destination').value;
    // departureDate = document.getElementById('departureDate').value;
    // returningDate = document.getElementById('returningDate').value;
    // currency = document.getElementById('currency').value;

    fetch("https://tasty.p.rapidapi.com/recipes/detail", {
            "method": "GET",
            "params": {id: Math.random() * 8000},
            "headers": {
                "x-rapidapi-key": "9457ace4efmsh75335d360ed9d31p1f05bdjsnfd3e606ceec1",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
        .then(response =>
            response.json()
        )
        .then(data => {
            //placeID1 = data.Places[0].PlaceId;
            recipe_name = data.name;
            recipe_instructions = data.instructions;
            recipe_description = data.description;

            console.log(recipe_name);
            console.log(recipe_instructions);
            console.log(description);
            
            // get_placeID2().then(response => {
            //     get_Quotes(placeID1, response);
            //     console.log(response)
            // });
        })

        .catch(err => {
            console.error(err);
        });
}
//finds the placeId of destination 
// function get_placeID2() {

//     return fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/" + country + "/" + currency + "/" + locale + "/?query=" + destination, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "792799dd9cmshfaa25064cae0d44p196899jsn814406e2cf18",
//                 "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
//             }
//         })
//         .then(response =>
//             response.json()
//         )
//         .then(data => {
//             placeID2 = data.Places[0].PlaceId;
//             return placeID2;
//         })

//         .catch(err => {
//             console.error(err);
//         });
// }
// function get_Quotes(place1, place2) {

//     fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/" + currency + "/en-US/" + place1 + "/" + place2 + "/" + departureDate + "?inboundpartialdate=" + returningDate, {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-key": "792799dd9cmshfaa25064cae0d44p196899jsn814406e2cf18",
//                 "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
//             }
//         })
//         .then(response =>
//             response.json()
//         )
//         .then(data => {
//             var x = data.Quotes;
//             var startLoc;
//             var endLoc;
//             for (i = 0; i < x.length; i++) {

//                 if (x[i].OutboundLeg.OriginId < x[i].OutboundLeg.DestinationId) {
//                     startLoc = data.Places[0].Name;
//                     endLoc = data.Places[1].Name;
//                 } else {
//                     endLoc = data.Places[0].Name;
//                     startLoc = data.Places[1].Name;
//                 }
//                 document.getElementById("response").innerHTML +=
//                     '<div class="d-flex justify-content-center row"> <div class="col-md-"> <div class="row p-2 bg-white border rounded"><div class="col-md-6 mt-1"><h5>' + data.Quotes[i].OutboundLeg.DepartureDate + '</h5><div class="mt-1 mb-1 spec-1"><span>' + startLoc + '</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg><span>' + endLoc + '</span></div></div></span><div class="align-items-center align-content-center col-md-3 border-left mt-1"><div class="d-flex flex-row align-items-center"><div id = "price"><div>' + currency.toUpperCase() + " " + x[i].MinPrice + '</div></div></div><div class="d-flex flex-column mt-4"><button class="btn btn-primary btn-sm" type="button">Details</button></div></div></div></div></div><br>'
//                 document.getElementById("response").style.display = "block";
//                 document.getElementById("flightForm").style.display = "none";
//                 document.body.style.backgroundImage = "url()";

//             }
//         })
//         .catch(err => {
//             console.error(err);
//         });
// }