window.onscroll = function () {
  fixNavbar();
};

let navbar = document.getElementById("nav");
let sticky = navbar.offsetTop;

function fixNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

$("#logo-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 200,
  center: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});
$("#recently").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 10,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 6,
      nav: true,
    },
  },
});
$("#latest").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  margin: 10,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});
$("#trend21").owlCarousel({
  loop: true,
  dots: false,
  autoplay: true,
  nav: true,
  autoplayTimeout: 5000,
  margin: 10,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

$(document).ready(function () {
  $("#brand-owl").owlCarousel({
    items: 2, // Display one main logo and parts of the adjacent ones
    loop: true,
    margin: 200, // Adjust this to control space between items
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    navText: ["<", ">"],
    dots: false,
  });
});

$("#category").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$("#macbook").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});



// // Initialize cart

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// // Function to update the cart count on the cart icon
// function updateCartCount() {
//   const cartCount = cart.length;
//   document.getElementById("cart-count").textContent = cartCount;
// }

// // Function to update the cart total and items on the cart page
// function updateCartPage() {
//   const cartItemsList = document.getElementById("cart-items");
//   const cartTotalElement = document.getElementById("cart-total");
//   cartItemsList.innerHTML = "";

//   let total = 0;

//   cart.forEach((item) => {
//     total += item.price;
//     cartItemsList.innerHTML += `<li>${item.name} - $${item.price.toFixed(
//       2
//     )}</li>`;
//   });

//   cartTotalElement.textContent = total.toFixed(2);
// }

// // Function to add product to cart
// function addToCart(product) {
//   cart.push(product);
//   updateCartCount();
//   updateCartPage();
// }

// // Add event listeners to "Add Cart" buttons
// document.querySelectorAll(".featured button").forEach((button) => {
//   button.addEventListener("click", function () {
//     const itemElement = this.parentElement;
//     const product = {
//       name: itemElement.querySelector("a").textContent.trim(),
//       price: parseFloat(
//         itemElement.querySelector("small").textContent.replace("$", "").trim()
//       ),
//     };
//     addToCart(product);
//     alert(`${product.name} has been added to your cart!`);
//   });
// });
// function addToCart(product) {
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartCount();
//   updateCartPage();
// }
// // Load cart from localStorage
// window.onload = function () {
//   const savedCart = localStorage.getItem("cart");
//   if (savedCart) {
//     cart = JSON.parse(savedCart);
//     updateCartCount();
//     updateCartPage();
//   }
// };

// function renderCart() {
//   const cartContainer = document.querySelector(".container");
//   const orderTotalElement = document.getElementById("order-total");
//   cartContainer.innerHTML = ""; // Clear existing items

//   let total = 0;

//   cart.forEach((item) => {

//     const cartItem = `
//             <div class="cart-item">
//                 <div class="row">
//                     <div class="col-lg-3">
//                         <img src="${item.image}" alt="${item.name}">
//                     </div>
//                     <div class="col-lg-9">
//                         <div class="row">
//                             <div class="col">
//                                 <p class="name">Name</p>
//                                 <p class="item-name">${item.name}</p>
//                             </div>
//                             <div class="col">
//                                 <p class="color">Color</p>
//                                 <div class="item-color">${item.color}</div>
//                             </div>
//                             <div class="col">
//                                 <p class="qua">Quantity</p>
//                                 <p class="qua-item">${item.quantity}</p>
//                             </div>
//                             <div class="col">
//                                 <p class="price">Price</p>
//                                 <p class="price-item"><span>$</span>${
//                                   item.price
//                                 }</p>
//                             </div>
//                             <div class="col">
//                                 <p class="total">Total</p>
//                                 <p class="item-total"><span>$</span>${
//                                   item.price * item.quantity
//                                 }</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;
//     cartContainer.innerHTML += cartItem;
//   });

//   orderTotalElement.textContent = `$${total.toFixed(2)}`;
// }

// document.addEventListener("DOMContentLoaded", renderCart);
// const product = {
//   name: "MacBook Air 13",
//   price: 2000,
//   quantity: 1,
//   color: "Silver",
//   image: "img/product/xfeatured_7.png.pagespeed.ic.TSCkRrtjRn.webp",
// };

// // Add product to cart
// cart.push(product);
// localStorage.setItem("cart", JSON.stringify(cart));
