document.getElementById('button').addEventListener('click', () => {
  const inputValue = document.getElementById('input-name').value
  const details = document.getElementById('details')
  details.innerHTML = '';
  fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const items = document.getElementById('items')
      items.innerHTML = ''
      if (data.meals == null) {
        document.getElementById('msg').style.display = 'block'
      } else {
        document.getElementById('msg').style.display = 'none'
        data.meals.forEach((meal) => {
          itemDiv = document.createElement('div')
          itemDiv.className = 'm-2 singleItem'
          itemDiv.setAttribute("onclick", `details('${meal.idMeal}')`)
          let itemInfo = `
                    <div class="card " style="width: 12rem;">
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body text-center">
                            <h5 class="card-text">${meal.strMeal}</h5>
                        </div>
                    </div>
                    `
          itemDiv.innerHTML = itemInfo
          items.appendChild(itemDiv)
        })
      }
    })
})

function details(id) {
  fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res) => res.json())
    .then((detail) => {
      const meal = detail.meals[0]
      console.log(meal)
      const details = document.getElementById('details')
      details.innerHTML = ''
      const detailsDiv = document.createElement('div')
      const detailsInfo = `
        <div class="card " style="width: 19rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h3 class="card-text">${meal.strMeal}</h3>
                <h6>Ingredients</h6>
                <ul>
                    <li>${meal.strArea}</li>
                    <li>${meal.strCategory}</li>
                    <li>${meal.strIngredient1}</li>
                    <li>${meal.strIngredient2}</li>
                    <li>${meal.strIngredient3}</li>
                    <li>${meal.strIngredient4}</li>
                    <li>${meal.strIngredient5}</li>
                </ul>
            </div>
        </div>
        `
      detailsDiv.innerHTML = detailsInfo
      details.appendChild(detailsDiv)
    })
}

// function recipe(){

// <div className="card">

//                         <img src={getMeal.data.strMealThumb} alt="meal"/>
//                         <div className ="info">
//                         <h2>{getMeal.data.strMeal}</h2>
//                         <p>{getMeal.data.strArea} food</p>
//                         </div>
//                         <div className ="recipe">
//                             <h2>Recipe</h2>
//                             <p>{getMeal.data.strInstructions}</p>

//                         </div>
//             </div>
// }
