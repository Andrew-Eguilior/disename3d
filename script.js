let carrito = [];

function searchProduct() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let products = document.getElementsByTagName("li");

  for (let i = 0; i < products.length; i++) {
    let name = products[i].getElementsByTagName("h2")[0].textContent;
    name = name.toLowerCase();
    if (name.includes(input)) {
      products[i].style.display = "";
    } else {
      products[i].style.display = "none";
    }
  }
}

function addToCart() {
  let producto = EventTarget.parentElement;
  carrito.push(producto);
  console.log(carrito);
} 