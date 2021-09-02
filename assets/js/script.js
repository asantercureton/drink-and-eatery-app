var id = "c1209f71"
var key = "bfada42bc6c1d17e1c160975a2313f78"
var inputVal = []
console.log(inputVal)

//Food recipe function//
function getRecipe() {
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
            console.log("RAND FOOD", response.hits[a]);
            var showFoodTitle = $("<h2>").text(response.hits[a].recipe.label);
            var showFoodImg = $("<img>").attr("src", response.hits[a].recipe.image);
            var showFoodIng = $("<p>").text(response.hits[a].recipe.ingredientLines);
            $(".foodshow").append(showFoodTitle, showFoodImg, showFoodIng);
            // $(".foodshow").append(showFoodImg);



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
    var drinkSelection = $("input[name=select]:checked").val();
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
            var showDrinkTitle = $("<div>").text(response.drinks[a].strDrink);
            // var showFoodImg = $("<div>").attr("src", response.hits[a]);
            $(".drinkshow").append(showDrinkTitle);
            // $(".foodshow").append(showFoodImg);
            // Randomizing the food recipes
            // var randDrink = Math.floor((Math.random() * response.drinks.length));
            // console.log("RAND DRINK", response.drinks.length);

            // // Getting drink title on the page and appending the card
            // $(".card-title").html(response.drinks[randDrink].strDrink);
            // $(".card-text").empty();
            // var list = $("<ul>")
            // $(".card-text").append(list)

            // // For loop ingredient list and appending the card//
            // for (var i = 0; i < 1; i++) {
            //     var item = $("<li>")
            //     item.html(response.drinks[i].strInstructions);
            //     list.append(item);
            // }

            // // // // //Getting link to the drink instructions//
            // $(".card-img-top").attr("src", response.drinks[randDrink].strDrinkThumb);
            // // $("recipieLink").html(response.drinks[randDrink].strInstructions);
            // $(".card").css("border", "1px solid black");
        }
    });

}


//Function "Get Recipe" button//

$('#save_value').click(function () {
    getRecipe();
});

//Function "Get Cocktail" button//
$('#drink-btn').click(function () {
    getDrink();
});
