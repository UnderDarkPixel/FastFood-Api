const request = new XMLHttpRequest()
const FoodList = document.querySelector(".FoodList")
const AddCart = document.querySelector(".addCart")
const SelCard = document.querySelector(".selectedCard")
let idcard;

request.addEventListener("readystatechange", () => {
    console.log(request)
    if(request.readyState === 4) {
        const data = JSON.parse(request.responseText);
        showData(data.recipes)
    }
})

request.open("GET", "https://dummyjson.com/recipes")
request.send()


function showData(data) {
    data.map(({id, name, image, ingredients, prepTimeMinutes, cookTimeMinutes, rating}, index) => {
        FoodList.innerHTML += `
        <div class="FoodCard">
            <div class="card-head">
                <div class="title">${name}</div>
                <div class="status">⭐ ${rating}</div>
                <div class="time-cooking">⏱ Prep: ${prepTimeMinutes}m | Cook: ${cookTimeMinutes}m</div>
            </div>
            <div class="images">
                <img src="${image}" alt="test" class="card-img">
            </div>
            <div class="description-card">
                <p>${ingredients}</p>
                <div class="id">Id:${id}</div>
            </div>
            <div class="button-cart">
                <button class="addCart">Add Cart</button>
                <button class="Order"><i class="ri-shopping-cart-2-fill"></i></button>
            </div>
        </div>
        `;

        idcard = id
    });
}

AddCart.addEventListener("click", () => {
    SelCard += `
            <div class="FoodCard">
                <div class="card-head">
                    <div class="title">${data[idcard].name}</div>
                    <div class="status">⭐ ${rating}</div>
                    <div class="time-cooking">⏱ Prep: ${prepTimeMinutes}m | Cook: ${cookTimeMinutes}m</div>
                </div>
                <div class="images">
                    <img src="${image}" alt="test" class="card-img">
                </div>
                <div class="description-card">
                    <p>${ingredients}</p>
                    <div class="id">Id:${id}</div>
                </div>
                <div class="button-cart">
                    <button class="addCart">Add Cart</button>
                    <button class="Order"><i class="ri-shopping-cart-2-fill"></i></button>
                </div>
            </div>
        `
})