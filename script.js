function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

const ownerNumber = "919049390062"; // Replace with actual WhatsApp number

const products = [
  {
    id: 1,
    name: "Mejwani Special Misal Pav",
    description: "Misal, Pav, Curd, Boondi, Papad, Sweet, Onion, Lemon",
    price: 100,
    image: "images/Mejwani_Misal.jpg",
  },
  {
    id: 2,
    name: "Kolhapuri Misal Pav",
    description: "Spicy Misal with 2 Pav",
    price: 70,
    image: "images/Misal_Pav.jpg",
  },
  {
    id: 3,
    name: "Kolhapuri Misal + Butter Pav",
    description: "Spicy Misal with 2 Butter Pav",
    price: 80,
    image: "images/km_ButterPav.jpg",
  },
  {
    id: 4,
    name: "Mejwani Special Misal + Butter Pav",
    description: "Misal, Butter Pav, Curd, Boondi, Papad, Sweet, Onion, Lemon",
    price: 110,
    image: "images/Mejwani_Misal.jpg",
  },
  {
    id: 5,
    name: "Dahi Vada (2 pcs)",
    description: "Soft lentil dumplings in curd",
    price: 50,
    image: "images/Dahi-Vada.jpg",
  },
  {
    id: 6,
    name: "Butter Pav Bhaji (4 Pav)",
    description: "Classic Pav Bhaji",
    price: 70,
    image: "images/Pav_Bhaji.jpg",
  },
  {
    id: 7,
    name: "Extra Bhaji",
    description: "Additional vegetable curry",
    price: 20,
    image: "images/Only_bhaji.jpg",
  },
  {
    id: 8,
    name: "Boondi",
    description: "Boondi",
    price: 20,
    image: "images/Sweet-boondi.jpg",
  },
  {
    id: 9,
    name: "Lassi",
    description: "Sweet Lassi",
    price: 30,
    image: "images/Lassi.png",
  },
  {
    id: 10,
    name: "Thick Cold Coffee",
    description: "Thick Cold Coffee",
    price: 70,
    image: "images/thick-cold-coffee.jpg",
  },
  {
    id: 11,
    name: "Thick Cold Coffee with Ice Cream",
    description: "Cold coffee topped with ice cream",
    price: 80,
    image: "images/Cold-Coffee-with-Ice-Cream.jpg",
  },
  {
    id: 12,
    name: "Plain Pav (2 pcs)",
    description: "Plain Pav",
    price: 10,
    image: "images/Plain-Pav.jpg",
  },
  {
    id: 13,
    name: "Butter Pav (2 pcs)",
    description: "Pav with butter",
    price: 20,
    image: "images/OnlyButterPav.jpg",
  },
  {
    id: 14,
    name: "Extra Farsan",
    description: "Crunchy toppings",
    price: 20,
    image: "images/Extra_Farsan.png",
  },
  {
    id: 15,
    name: "Extra Matki",
    description: "Sprouted lentils",
    price: 10,
    image: "images/Matki.jpg",
  },
  // {
  //   id: 16,
  //   name: "Extra Boondi",
  //   description: "Boondi",
  //   price: 10,
  //   image: "images/Sweet-boondi.jpg",
  // },
  {
    id: 17,
    name: "Extra Butter",
    description: "Extra butter portion",
    price: 10,
    image: "images/Extra_butter.jpg",
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
    name: "Sweet Curd",
    description: "Premium curd",
    price: 10,
    image: "images/curd.jpg",
  },
  {
    id: 20,
    name: "Plain Curd",
    description: "Regular curd",
    price: 10,
    image: "images/curd.jpg",
  },
  {
    id: 21,
    name: "Papad",
    description: "Crispy lentil wafer",
    price: 10,
    image: "images/Papad.jpg",
  },
  {
    id: 22,
    name: "Water Bottle 500ml",
    description: "Packaged drinking water",
    price: 10,
    image: "images/Bislary.jpg",
  },
  {
    id: 23,
    name: "Water Bottle 1L",
    description: "Packaged drinking water",
    price: 20,
    image: "images/Bislary.jpg",
  },
];

// const container = document.getElementById("menu");
// products.forEach((product) => {
//   const card = document.createElement("div");
//   card.className = "product-card";
//   card.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p><strong>${product.price}</strong></p>`;
//   container.appendChild(card);
// });

// <p><strong>${product.price}</strong></p> - add after description
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

// Handle table button selection
document.querySelectorAll(".table-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active from all
    document
      .querySelectorAll(".table-btn")
      .forEach((b) => b.classList.remove("active"));
    // Add active to clicked
    this.classList.add("active");

    const tableNumber = this.dataset.table;
    document.getElementById(
      "selected-table"
    ).textContent = `Table: ${tableNumber}`;
    document.getElementById("table-number").value = tableNumber; // hidden input if needed
  });
});

function sendOrder() {
  const tableDisplay = document.getElementById("selected-table").textContent;
  if (tableDisplay.includes("Not Selected")) {
    alert("Please select your table number before ordering.");
    return;
  }

  const tableNumber = tableDisplay.replace("Table: ", "");
  let message = `Hello, I would like to order (Table ${tableNumber}):\n`;
  let total = 0;
  products.forEach((product) => {
    const qty = parseInt(document.getElementById(`qty-${product.id}`).value);
    if (qty > 0) {
      console.log("qty :" + qty + "product.price :" + product.price);
      // const itemTotal = qty * product.price;
      // console.log("itemTotal :" + itemTotal);
      // message += `• ${qty} x ${product.name} @ ₹${product.price} = ₹${itemTotal}\n`;
      // message += `• ${qty} x ${product.name} @ ₹${product.price} = ₹${itemTotal}\n`;
      // total += itemTotal;
      const itemTotal = qty;
      message += `• ${qty} x ${product.name}\n`;
      total += itemTotal;
    }
  });

  if (total === 0) {
    alert("Please select at least one product.");
    return;
  }

  // message += `\nTotal Amount: ₹${total}`;
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${ownerNumber}?text=${encodedMessage}`, "_blank");
}

document.addEventListener("DOMContentLoaded", renderProducts);
