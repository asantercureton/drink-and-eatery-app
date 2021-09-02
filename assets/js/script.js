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
    var queryURLrec = "https://api.edamam.com/api/recipes/v2?type=public&q=" + querySelection + "&app_id=" + id + "&app_key=" + key + "&ingr=5-10";

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
        var randFood = Math.floor((Math.random() * response.hits.length));
        console.log(response.hits.length);

        //Getting recipe title on the page and appending the card//
        $(".card-title").html(response.hits[randFood].recipe.label);
        $(".card-text").empty();
        var list = $("<ul>")
        $(".card-text").append(list)

        //For loop ingredient list and appending the card//
        for (var i = 0; i < response.hits[randFood].recipe.ingredientLines.length; i++) {
            var item = $("<li>")
            item.html(response.hits[randFood].recipe.ingredientLines[i]);
            list.append(item)
        }

        //Getting link to the actual recipe//
        $(".card-img-top").attr("src", response.hits[randFood].recipe.image);
        $("#recipieLink").attr("href", response.hits[randFood].recipe.url);
        $(".card").css("border", "1px solid black");
    });
}


function getDrink() {
    event.preventDefault();
    
    var drinkSelection = $("#drink-search").val();
    console.log("DRINK", drinkSelection);
    var drinkQuery = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + drinkSelection;

    $.ajax({
        type: "get",
        url: drinkQuery,
    }).then(function (response) {
        console.log(response);
    })
}


//Function "Get Recipe" button//

$('#save_value').click(function () {
    getRecipe();
});

//Function "Get Cocktail" button//
$('#drink-btn').click(function () {
    getDrink();
});
