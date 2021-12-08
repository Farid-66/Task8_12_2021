// localStorage.setItem("card", "19,72");
// let products = localStorage.getItem("card")
// console.log(products)

// setTimeout(() => {
//     localStorage.removeItem("card")
// }, 5000)

// document.cookie = "cusername=Rasim; expires=Thu, 18 Dec 2022 02:00:00 UTC";

let addToCart = document.querySelectorAll("#product .card .card-body a");

let basketCount = document.getElementById("basketCount");
let cart2 = localStorage.getItem("cart");

if (!(cart2 == null || cart2 == "")) {
  basketCount.textContent = cart2.split(",").length;

  addToCart.forEach((item) => {
    let id = item.dataset.id;
    if (cart2.split(",").includes(id)) {
      item.classList.remove("btn-primary");
      item.classList.add("btn-success");
    }
  });
}

addToCart.forEach((prd) => {
  prd.addEventListener("click", function (e) {
    e.preventDefault();

    let id = this.dataset.id;
    let cart = localStorage.getItem("cart");

    if (cart == null || cart == "") {
      localStorage.setItem("cart", id);
      basketCount.textContent = 1;
      this.classList.remove("btn-primary");
      this.classList.add("btn-success");
    } else {
      let cartArr = cart.split(",");
      let isExist = cartArr.includes(id);
      if (!isExist) {
        localStorage.setItem("cart", cart + "," + id);
        basketCount.textContent = cartArr.length + 1;
        this.classList.remove("btn-primary");
        this.classList.add("btn-success");
      } else {
        let newCartArr = cartArr.filter((item) => item != id);
        localStorage.setItem("cart", newCartArr.join(","));
        basketCount.textContent =
          newCartArr.length > 0 ? newCartArr.length : "";
        this.classList.remove("btn-success");
        this.classList.add("btn-primary");
      }
    }
  });
});

function Search() {
  let card_title;
  let input = document.querySelector("#Input");
  let cardcontainer = document.querySelector("#product");
  let cards = cardcontainer.querySelector(".container .row .col-lg-3 .card");
  let p=document.getElementById("p");
  p.textContent=cards.length
  console.log(cards.length)
  for (let i = 0; i < cards.length; i++) {
    card_title = cards[i].querySelector(".card-title");
    console.log(input.value.toUpperCase())
    if (card_title.textContent.toUpperCase().indexOf(input.value.toUpperCase()) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
  }
}



