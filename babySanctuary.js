// shopping cart page

  // Define your shop items as an array of objects
  const shopItems = [
    { name: "Blue Sweat Co-ord", price: 15.00 },
    { name: "Beige Teddy Bear Co-ord", price: 20.00 },
    { name: "Grey Co-ord", price: 25.00 },
    { name: "Two Tone Co-ord", price: 15.00 },
    { name: "Brown Cosy Set", price: 25.00 },
    { name: "Peach Shorts and Vest Set with Headband", price: 15.00 },
    { name: "Flora Shorts and Top Set with Headband", price: 20.00 },
    { name: "Poka Dot Shorts Set", price: 25.00 },
    { name: "Pink Set", price: 15.00 },
    { name: "3 Dress Set with Headbands", price: 20.00 },
    { name: "Print Top Cosy Set", price: 25.00 },
    { name: "Unisex cream top", price: 15.00 },
    { name: "Neutrals Print Top set", price: 20.00 },
    { name: "Neutrals set", price: 25.00 },
    { name: "Brown Teddy Bear Shorts Set", price: 15.00 },
    { name: "Teddy Bear Print co-ord", price: 20.00 },
    { name: "Naturals Newborn Set", price: 25.00 }
      ];
      
      // Example usage:
    //   console.log(shopItems);
      

  // Initialize variables to track the cart and total price
  const cart = [];
  let totalPrice = 0;

  // Function to update the cart and total price
  function updateCart() {
    const cartList = document.getElementById("cart");
    const totalSpan = document.getElementById("totalPrice");

    // Clear the cart and update the total price
    cartList.innerHTML = "";
    totalSpan.textContent = totalPrice.toFixed(2);

    // Display each item in the cart
    cart.forEach(item => {
      const listItem = document.createElement("li");
      listItem.classList.add("list-group-item");
      listItem.textContent = `${item.name} - £${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
    });
  }

  // Function to add an item to the cart
  function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
  }

  // Add event listeners to "Buy" buttons
  const buyButtons = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary");
  buyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const itemName = card.querySelector(".card-text").textContent;
      const itemPrice = parseFloat(card.querySelector("p:last-child").textContent.slice(1));
      addToCart(itemName, itemPrice);
    });
  });

