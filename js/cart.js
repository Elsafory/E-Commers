document.addEventListener("DOMContentLoaded", function() {
    let cartCount = document.getElementById("cart-count");
    let itemCart = document.querySelectorAll(".category .item-info");
  
    let cart = JSON.parse(localStorage.getItem("Cart")) || [];
  
    if (cartCount) {
      cartCount.textContent = cart.length;
    }
    display();
  
    for (let i = 0; i < itemCart.length; i++) {
      itemCart[i].addEventListener("click", function (e) {
        if (e.target.innerHTML === "Add Cart") {
          let item = {
            name: itemCart[i].children[2]?.innerHTML || "Unknown",
            price: parseFloat(itemCart[i].children[1]?.innerHTML || "0.00"),
            imgSrc: itemCart[i].children[0]?.getAttribute("src") || "",
          };
  
          cart.push(item);
          localStorage.setItem("Cart", JSON.stringify(cart));
          
          if (cartCount) {
            cartCount.textContent = cart.length;
          }
          display();
        }
      });
    }
  
    function display() {
      let cartContainer = document.getElementById('cartContainer');
      let totalOrder = document.querySelector(".cart-total .total-order");
      
      if (!cartContainer || !totalOrder) {
        console.error("Required elements not found.");
        return;
      }
  
      cartContainer.innerHTML = ''; 
      
      let storedCart = JSON.parse(localStorage.getItem("Cart")) || [];
  
      if (!Array.isArray(storedCart)) {
        console.error("Stored cart is not an array.");
        return;
      }
  
      let totalAmount = 0; 
        storedCart.forEach((item, index) => {
        if (!item || !item.imgSrc || !item.name || !item.price) {
          console.error(`Invalid item at index ${index}:`, item);
          return;
        }
  
        const cartItem = `
          <div class="row">
            <div class="col-lg-3">
              <img src="${item.imgSrc}" alt="${item.name}">
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col">
                  <p class="name">Name</p>
                  <p class="item-name">${item.name}</p>
                </div>
                <div class="col">
                  <p class="color">Color</p>
                  <div class="item-color"></div>
                </div>
                <div class="col">
                  <p class="qua">Quantity</p>
                  <p class="qua-item">1</p>
                </div>
                <div class="col">
                  <p class="price">Price</p>
                  <p class="price-item"><span>$</span>${item.price}</p>
                </div>
                <div class="col">
                  <p class="total">Total</p>
                  <p class="item-total"><span>$</span>${item.price}</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
        `;
        cartContainer.innerHTML += cartItem;
  
        totalAmount += item.price;
      });
  
      totalOrder.innerHTML = `Order Total: <span>$ ${totalAmount.toFixed(2)}</span>`;
    }
  });
  
  