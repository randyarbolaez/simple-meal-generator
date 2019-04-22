let randomMealBtn = document.getElementById('random-meal');
let mealName = document.getElementById('meal-name');
let mealInstructions = document.getElementById('meal-instructions');
let mealOrigins = document.getElementById('meal-origins');

randomMealBtn.onclick = function() {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      mealInstructions.innerHTML = res.meals[0].strInstructions;
      mealName.innerHTML = res.meals[0].strMeal;
      mealOrigins.innerHTML = res.meals[0].strArea;
    });
};
