const loadData = (global) => {
  const searchText = document.getElementById("search-box").value;

  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${
      searchText ? searchText : global
    }`
  )
    .then((res) => res.json())
    .then((data) => displayData(data.meals));
};

const displayData = (data) => {
  document.getElementById("total-meals").innerText = data.length;

  const mealsContainer = document.getElementById("meals-container");

  data.forEach((meal) => {
    console.log(meal);
    const card = document.createElement("div");
    card.classList.add("box");
    card.innerHTML = `
        <img class="box-img" src=${meal.strMealThumb} alt="">
        <h2>${meal?.strMeal}</h2>
        <p>${meal.strInstructions.slice(0, 50)}</p>
        <button
        onclick="displayModal('${meal.idMeal}')"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Details
      </button>
        `;
    mealsContainer.appendChild(card);
  });
};

const displayModal = async (id) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    console.log(data.meals[0]);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};

loadData("a");
