// DOM Elements
const search = document.getElementById('search-bar');
const heading = document.getElementById('heading');
const search_btn = document.getElementById('search-btn');
const shuffle = document.getElementById('shuffle-btn');
const meals = document.getElementById('meals');
const mealID = document.getElementById('mealID');
const ingredients = document.getElementById('ingredients');


var array = [];

// Event Listeners
// 1.
search_btn.addEventListener('click', () =>{
    const searchText = search.value;

    if (searchText.trim().length === 0) {
        meals.innerHTML = '';
        ingredients.innerHTML = '';
        mealID.innerHTML = '';
        heading.innerHTML = `<h3>Field is empty</h3>`;
    } else {
        // Fetch Data
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => {
        if (data.meals === null) {
            meals.innerHTML = '';
            heading.innerHTML = `<h3>No meal for this keyword</h3>`;
        } else {
            meals.innerHTML = '';
            heading.innerHTML = `<h3>Your results of the search '${searchText}'</h3>`;
            meals.innerHTML = data.meals.map(meal => `
        <div>
            <img class="img" src="${meal.strMealThumb}">
            <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
            </div>
        </div>
    `) .join('')
        }
})
}
    search.value = '';
})

// 2.
meals.addEventListener('click', e =>{
        const meal_info = e.path.find( item => {
          if(item.classList !== null) {
              return item.classList.contains('meal-info');
          } else {
              alert("false");
      }
});
const mealId = meal_info.getAttribute("data-mealid");
// Function for the meal by ID
renderMeal(mealId);
});

function renderMeal(mealId) {
    meals.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => {
        const targetMeal = data.meals[0]; 
        mealID.innerHTML = `
        <h3>${targetMeal.strMeal}</h3>
        <img class="secondImg" src="${targetMeal.strMealThumb}">
        <h3>${targetMeal.strMeal} ${targetMeal.strArea}</h3><br>
        <h3>Instructions:</h3>
        <p>${targetMeal.strInstructions}</p>
        <br>
        <h3>Ingredients:</h3>
        `
        console.log(targetMeal);
        for(let i=1; i<=20; i++) {
            if(targetMeal[`strIngredient${i}`] !== null && targetMeal[`strIngredient${i}`] !== "") {
                var updatedMeal = targetMeal[`strIngredient${i}`];
                var updatedMeasure = targetMeal[`strMeasure${i}`];
                var updatedMealHTML = ingredients.innerHTML;
                ingredients.innerHTML = `${updatedMealHTML}<br><h4>${updatedMeal}</h4> - <h4>${updatedMeasure}</h4><br>`
            } else {
                 break;
             }
         }
    })
}

//- ${targetMeal}[strMeasure${i}]