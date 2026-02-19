const container = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

// Public API
const API_URL = "https://fakestoreapi.com/products";

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const img = document.createElement("img");
      img.src = product.image;

      const title = document.createElement("h4");
      title.textContent = product.title;

      productDiv.appendChild(img);
      productDiv.appendChild(title);
      container.appendChild(productDiv);
    });
  })
  .catch(error => {
    errorMessage.textContent = "Error loading products. Please try again later.";
    console.error(error);
  });
