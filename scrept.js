let kam = document.querySelector(".kam");
let img = document.querySelector(".img");
let button = document.querySelector(".button");
let body = document.body;

button.addEventListener("click", () => {
  body.classList.toggle('dark');
});

button.style.color = "red";
button.style.width = "300px";
button.style.height = "50px";
img.style.height="10px";

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((item) => {
      const h1 = document.createElement('h1');
      h1.textContent = item.title;
      kam.appendChild(h1);

      const h2 = document.createElement('h2');
      h2.textContent = item.description;
      kam.appendChild(h2);

      const discount = document.createElement('span');
      discount.textContent = `Discount: ${item.discountPercentage}`;
      kam.appendChild(discount);

      const h3 = document.createElement('h3');
      h3.textContent = item.description;
      kam.appendChild(h3);

      item.images.forEach((imageUrl) => {
        const image = document.createElement('img');
        image.src = imageUrl;
        img.appendChild(image);
      });
    });
  });
  
