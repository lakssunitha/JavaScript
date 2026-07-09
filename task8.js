let productList = [];

const productContainer = document.getElementById("products");
const totalCount = document.getElementById("count");
const searchBox = document.getElementById("search");
const categoryBox = document.getElementById("category");
const priceBox = document.getElementById("price");

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {

    productList = data;

    // Uncomment ONLY ONE task at a time

    displayProducts(productList);                  // Task 1,5,6
    // displayProducts(productList.slice(0,5));    // Task 12
    // displayProducts(productList.slice(-5));     // Task 13

    //Task 16
    /*
    let highest = productList[0];

    productList.forEach(item=>{
        if(item.rating.rate > highest.rating.rate){
            highest = item;
        }
    });

    displayProducts([highest]);
    */

    // Task 17
    /*
    let cheapest = productList[0];

    productList.forEach(item=>{
        if(item.price < cheapest.price){
            cheapest = item;
        }
    });

    displayProducts([cheapest]);
    */

    //Task 18 
    /*
    let costliest = productList[0];

    productList.forEach(item=>{
        if(item.price > costliest.price){
            costliest = item;
        }
    });

    displayProducts([costliest]);
    */

})
.catch(() => {

    productContainer.innerHTML = `
    <h2>❌ Unable to Load Products</h2>
    <p>Please try again later.</p>
    `;
});

function displayProducts(list){

    productContainer.innerHTML="";

    totalCount.innerHTML=`Total Products : ${list.length}`;

    if(list.length===0){

        productContainer.innerHTML="<h2>No Products Found</h2>";
        return;
    }

    list.forEach((item,index)=>{

        productContainer.innerHTML += `
        <div class="card">

            <img src="${item.image}" alt="${item.title}">

            <h3>Product ${index+1}</h3>

            <h2>${item.title}</h2>

            <p>Category : ${item.category}</p>

            <p>
            ${
                item.description.length>100
                ? item.description.slice(0,100)+" Read More..."
                : item.description
            }
            </p>

            <p>Rating : ⭐ ${item.rating.rate}</p>

            <p>Price : $${item.price}</p>

            <button>Buy Now</button>

        </div>
        `;
    });

}

// Task 7
searchBox.addEventListener("input",filterProducts);

// Task 20
categoryBox.addEventListener("change",filterProducts);

priceBox.addEventListener("change",filterProducts);

function filterProducts(){

    let searchValue = searchBox.value.toLowerCase();

    let categoryValue = categoryBox.value;

    let priceValue = priceBox.value;

    let filteredProducts = productList.filter(item=>{

        let matchSearch =
        item.title.toLowerCase().includes(searchValue);

        let matchCategory =
        categoryValue==="all" ||
        item.category===categoryValue;

        let matchPrice =
        priceValue==="all" ||
        item.price<=Number(priceValue);

        return matchSearch && matchCategory && matchPrice;

    });

    displayProducts(filteredProducts);

}