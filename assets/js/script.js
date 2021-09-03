var id = "c1209f71"
var key = "bfada42bc6c1d17e1c160975a2313f78"
var inputVal = []
console.log(inputVal)

//Food recipe function//
function getRecipe() {
    event.preventDefault();
    //Getting the value of the user specified food selection//
    var cuisineSelection = $("input[name=select]:checked").val();
    var querySelection = $("input[type=search").val();
    console.log(cuisineSelection);
    //"rice,chinese,steak" search.val() + "," + foodSelection
    //Recipe URL with cuisine selection API//
    var queryURLrec = "https://api.edamam.com/api/recipes/v2?type=public&q=" + querySelection + "&app_id=" + id + "&app_key=" + key;

    //AJAX getting recipe ingredient list//
    $.ajax({
        type: "get",
        url: queryURLrec,
    }).then(function (response) {
        console.log(queryURLrec);
        console.log(response);

        //Displaying recipe card//
        $(".card").attr("class", "card");

        //Add styling for food card//


        //Randomizing the food recipes //

        // var randFood = Math.floor((Math.random() * response.hits.length));
        for (var a = 0; a < response.hits.length; a++) {
            // console.log("RAND FOOD", response.hits[a]);
            var showFoodTitle = $("<h2>").text(response.hits[a].recipe.label);
            var showFoodImage = $("<img>").attr("src", response.hits[a].recipe.image);
            var showFoodIng = $("<p>").text(response.hits[a].recipe.ingredientLines);
            // If yield is more than 1, SERVINGS - else SERVING
            if (response.hits[a].recipe.yield > 1){
                var showFoodYield = $("<p>").text(response.hits[a].recipe.yield + " Servings");
            } else {
                var showFoodYield = $("<p>").text(response.hits[a].recipe.yield + " Serving");
            }
            // Append food content
            $(".foodshow").append(showFoodTitle, showFoodImage, showFoodYield, showFoodIng);

             // Set past food searches to localStorage
             var pastFood = JSON.stringify(queryURLrec);
             localStorage.setItem("PastFood", pastFood);

             console.log(localStorage.getItem("PastFood"));
             
            // Append drink localStorage to html


             console.log("locStor Food",localStorage);

             // NEXT: Append food localStorage to html


            //Getting recipe title on the page and appending the card//
            $(".card-title").html(response.hits[a].recipe.label);
            $(".card-text").empty();
            var list = $("<ul>")
            $(".card-text").append(list)

            //For loop ingredient list and appending the card//
            for (var i = 0; i < response.hits[a].recipe.ingredientLines.length; i++) {
                var item = $("<li>")
                item.html(response.hits[a].recipe.ingredientLines[i]);
                list.append(item)
            }

            //Getting link to the actual recipe//
            $(".card-img-top").attr("src", response.hits[a].recipe.image);
            $("#recipieLink").attr("href", response.hits[a].recipe.url);
            $(".card").css("border", "1px solid black");
        }
    });
}


function getDrink() {
    event.preventDefault();

    //Getting the value of the user specified drink selection//
    // var drinkSelection = $("input[name=select]:checked").val();
    var inputSelection = $("#drinkSearch").val();
    console.log("SEARCH", inputSelection);
    // console.log("DRINK", drinkSelection);
    //"rice,chinese,steak" search.val() + "," + foodSelection
    //Recipe URL with cuisine selection API//
    var drinkQuery = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + inputSelection;
    console.log("QUERY", drinkQuery);

    $.ajax({
        type: "get",
        url: drinkQuery,
    }).then(function (response) {
        console.log(response);

        // Displaying recipe card
        $(".card").attr("class", "card");

        for (var d = 0; d < response.drinks.length; d++) {
            console.log("RAND DRINK", response.drinks[d]);
            // Drink Content with Measurements/Units
            var showDrinkTitle = $("<h2>").text(response.drinks[d].strDrink);
            var showDrinkImage = $("<img>").attr("src", response.drinks[d].strDrinkThumb);
            var showDrinkIngred1 = $("<p>").text(response.drinks[d].strIngredient1 + " - " + response.drinks[d].strMeasure1);
            var showDrinkIngred2 = $("<p>").text(response.drinks[d].strIngredient2 + " - " + response.drinks[d].strMeasure2);
            var showDrinkIngred3 = $("<p>").text(response.drinks[d].strIngredient3 + " - " + response.drinks[d].strMeasure3);
            var showDrinkIngred4 = $("<p>").text(response.drinks[d].strIngredient4 + " - " + response.drinks[d].strMeasure4);
            var showDrinkIngred5 = $("<p>").text(response.drinks[d].strIngredient5 + " - " + response.drinks[d].strMeasure5);
            var showDrinkInstr = $("<p>").text(response.drinks[d].strInstructions);
        

            // Appending the data to html
            $(".drinkshow").append(showDrinkTitle, showDrinkImage, showDrinkIngred1, showDrinkIngred2, showDrinkIngred3, showDrinkIngred4, showDrinkIngred5, showDrinkInstr);



            // Set past drink searches to localStorage
            var pastDrink = JSON.stringify(drinkQuery);
            localStorage.setItem("PastDrink", pastDrink);
            console.log(localStorage.getItem("PastDrink"));

            // Append drink localStorage to html

            // Set past drink searches to localStorage
            var pastDrink = JSON.stringify(drinkQuery);
            localStorage.setItem("PastDrink", pastDrink);
            console.log("locStor Drink",localStorage);

            // NEXT: Append drink localStorage to html
            

        }
    });

}


//Function "Get Recipe" button//

$('#save_value').click(function () {
    getRecipe();
    $(".contentWrapper").show()
});

//Function "Get Cocktail" button//
$('#drink-btn').click(function () {
    getDrink();
});