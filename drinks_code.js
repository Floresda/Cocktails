const displayDrinkInfo = (index) => {
    console.log(`${drinks[index].name}: ${drinks[index].calories} calories, Ingredients: ${drinks[index].ingredients.join(", ")}, Alcohol Percentage: ${drinks[index].alcoholPercentage}, Serving Style: ${drinks[index].servingStyle}`);
    $(".cocktail-info").eq(index).text(`${drinks[index].name}: ${drinks[index].calories} calories, Ingredients: ${drinks[index].ingredients.join(", ")}, Alcohol Percentage: ${drinks[index].alcoholPercentage}, Serving Style: ${drinks[index].servingStyle}`);
};

const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"), displayDrinkInfo);

    $(".box").on("click", function () {
    let indexOfDrink = $(".box").index(this);
    $(this).find(".cocktail-info").text(`Calories: ${drinks[indexOfDrink].calories}`);
    });

    $(".box").on("mouseover", function () {
    let indexOfDrink = $(".box").index(this);
    $(this).find(".cocktail-info").text(`Ingredients: ${drinks[indexOfDrink].ingredients.join(", ")}`);
    });

    $(".box").on("mouseout", function () {
    let indexOfDrink = $(".box").index(this);
    $(this).find(".cocktail-info").text(`${drinks[indexOfDrink].name}: ${drinks[indexOfDrink].calories} calories, Ingredients: ${drinks[indexOfDrink].ingredients.join(", ")}, Alcohol Percentage: ${drinks[indexOfDrink].alcoholPercentage}, Serving Style: ${drinks[indexOfDrink].servingStyle}`);
    });
};

const setUpBoxes = () => {
    let wrapperRef = $('.wrapper');
    drinks.forEach((drink) => {
    let boxMarkup = `<div class="box">
        <img class="drink-pic" src="${drink.name.toLowerCase().replace(/\s/g, '-')}.jpg" />
        <p class="cocktail-info"></p>
    </div>`;
    wrapperRef.append(boxMarkup);
    });
}

$(document).ready(showInformation);