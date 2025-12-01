function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

const ownerNumber = "918796161143"; // Replace with actual WhatsApp number

const products = [
  {
    id: 1,
    name: "Mejwani Special Misal Pav",
    description: "Misal, Pav, Curd, Boondi, Papad, Sweet, Onion, Lemon",
    price: 100,
    image: "images/K_missal.png",
  },
  {
    id: 2,
    name: "Kolhapuri Misal Pav",
    description: "Spicy Misal with 2 Pav",
    price: 70,
    image: "images/K_missal.png",
  },
  {
    id: 3,
    name: "Kolhapuri Misal + Butter Pav",
    description: "Spicy Misal with 2 Butter Pav",
    price: 80,
    image: "images/K_missal.png",
  },
  {
    id: 4,
    name: "Mejwani Special Misal + Butter Pav",
    description: "Misal, Butter Pav, Curd, Boondi, Papad, Sweet, Onion, Lemon",
    price: 110,
    image: "images/K_missal.png",
  },
  {
    id: 5,
    name: "Dahi Vada (2 pcs)",
    description: "Soft lentil dumplings in curd",
    price: 50,
    image: "images/K_missal.png",
  },
  {
    id: 6,
    name: "Butter Pav Bhaji (4 Pav)",
    description: "Classic Mumbai-style Pav Bhaji",
    price: 70,
    image: "images/K_missal.png",
  },
  {
    id: 7,
    name: "Extra Bhaji",
    description: "Additional vegetable curry",
    price: 20,
    image: "images/K_missal.png",
  },
  {
    id: 8,
    name: "Boondi",
    description: "Crispy chickpea pearls",
    price: 20,
    image: "images/K_missal.png",
  },
  {
    id: 9,
    name: "Lassi",
    description: "Sweet yogurt drink",
    price: 30,
    image: "images/K_missal.png",
  },
  {
    id: 10,
    name: "Thick Cold Coffee",
    description: "Rich cold coffee",
    price: 70,
    image: "images/K_missal.png",
  },
  {
    id: 11,
    name: "Thick Cold Coffee with Ice Cream",
    description: "Cold coffee topped with ice cream",
    price: 80,
    image: "images/K_missal.png",
  },
  {
    id: 12,
    name: "Plain Pav (2 pcs)",
    description: "Soft bread rolls",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 13,
    name: "Butter Pav (2 pcs)",
    description: "Bread rolls with butter",
    price: 20,
    image: "images/K_missal.png",
  },
  {
    id: 14,
    name: "Extra Farsan",
    description: "Crunchy toppings",
    price: 20,
    image: "images/K_missal.png",
  },
  {
    id: 15,
    name: "Extra Matki",
    description: "Sprouted lentils",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 16,
    name: "Extra Boondi",
    description: "Extra crispy pearls",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 17,
    name: "Extra Butter",
    description: "Extra butter portion",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 18,
    name: "Sweet (2 pcs)",
    description: "Traditional Indian sweets",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 19,
    name: "Sai Curd",
    description: "Premium curd",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 20,
    name: "Plain Curd",
    description: "Regular curd",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 21,
    name: "Papad",
    description: "Crispy lentil wafer",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 22,
    name: "Water Bottle 700ml",
    description: "Packaged drinking water",
    price: 10,
    image: "images/K_missal.png",
  },
  {
    id: 23,
    name: "Water Bottle 1L",
    description: "Packaged drinking water",
    price: 20,
    image: "images/K_missal.png",
  },
];

// const container = document.getElementById("menu");
// products.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";
//   card.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p><strong>${product.price}</strong></p>`;
//   container.appendChild(card);
// });

function renderProducts() {
  const container = document.getElementById("menu");
  container.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.backgroundImage = `url(${product.image})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center";
    card.innerHTML = `
      <div class="overlay">
        <h3>${product.name}</h3>
        <p>${product.description || ""}</p>
        <p><strong>${product.price}</strong></p>
        <input type="number" min="0" id="qty-${
          product.id
        }" class="qty-input" placeholder="Qty" />
      </div>
    `;
    container.appendChild(card);

    // Add reactive highlight
    const qtyInput = card.querySelector(`#qty-${product.id}`);
    qtyInput.addEventListener("input", () => {
      if (parseInt(qtyInput.value) > 0) {
        card.classList.add("selected");
      } else {
        card.classList.remove("selected");
      }
    });
  });

  // Add order button
  // const orderBtn = document.createElement("button");
  // orderBtn.textContent = "Order Selected via WhatsApp";
  // orderBtn.className = "order-button";
  // orderBtn.onclick = sendOrder;
  // container.appendChild(orderBtn);
}

document.addEventListener("DOMContentLoaded", renderProducts);

function sendOrder() {
  let message = "Hello, I would like to order:\n";
  let total = 0;
  products.forEach((product) => {
    const qty = parseInt(document.getElementById(`qty-${product.id}`).value);
    if (qty > 0) {
      console.log("qty :" + qty + "product.price :" + product.price);
      const itemTotal = qty * product.price;
      console.log("itemTotal :" + itemTotal);
      // message += `• ${qty} x ${product.name} @ ₹${product.price} = ₹${itemTotal}\n`;
      message += `• ${qty} x ${product.name} @ ₹${product.price} = ₹${itemTotal}\n`;
      total += itemTotal;
    }
  });

  if (total === 0) {
    alert("Please select at least one product.");
    return;
  }

  message += `\nTotal Amount: ₹${total}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${ownerNumber}?text=${encodedMessage}`, "_blank");
}

document.addEventListener("DOMContentLoaded", renderProducts);
