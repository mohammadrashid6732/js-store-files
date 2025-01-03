import { getCookies } from "./utils/cookie.js";
import { getData } from "./utils/httpReq.js";
import { shortenText } from "./utils/stringFun.js";

const loginButton = document.getElementById("login");
const dashboardButton = document.getElementById("dashboard");
const mainContent = document.getElementById("product");
const searchButton = document.querySelector("button");
const inputBox = document.querySelector("input");
const listItems = document.querySelectorAll("li");

let allProducts = null;
let query = "";
let category = null;

const showProducts = (products) => {
  mainContent.innerHTML = "";

  products.forEach((product) => {
    const jsx = `
        <div>
            <img src=${product.image} alt=${product.title}/>
            <h4>${shortenText(product.title)}</h4>
            <div id='price'>
                <p>$ ${product.price}</p>
                <button>
                    Buy
                    <i class='fa-solid fa-cart-shopping'></i>
                </button>
            </div>
            <div id='rate'>
            <i class='fa-solid fa-star'></i>
                <span>${product.rating.rate}</span>
            </div>
            <div id='count'>
            <i class='fa-solid fa-user'></i>
                <span>${product.rating.count}</span>
            </div>
        </div>
    `;

    mainContent.innerHTML += jsx;
  });
};

const init = async () => {
  const cookie = getCookies();
  if (cookie) {
    loginButton.style.display = "none";
  } else {
    dashboardButton.style.display = "none";
  }
  allProducts = await getData("products");
  showProducts(allProducts);
  console.log(allProducts);
};

const filterProducts = () => {
  const filteredProducts = allProducts.filter((product) => {
    if (category === "all") {
      return product.title.toLowerCase().includes(query);
    } else {
      return (
        product.title.toLowerCase().includes(query) &&
        product.category.toLowerCase() === category
      );
    }
  });
  showProducts(filteredProducts);
};

const searchHandler = () => {
  query = inputBox.value.trim().toLowerCase();
  filterProducts();
};

const filterHandler = (event) => {
  category = event.target.innerText.toLowerCase();

  listItems.forEach((li) => {
    if (li.innerText.toLowerCase() === category) {
      li.className = "selected";
    } else {
      li.className = "";
    }
  });

  filterProducts();
};

document.addEventListener("DOMContentLoaded", init);
searchButton.addEventListener("click", searchHandler);
listItems.forEach((li) => li.addEventListener("click", filterHandler));
inputBox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchHandler();
  }
});
