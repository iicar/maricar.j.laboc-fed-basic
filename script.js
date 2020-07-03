// Empty Cart
function removeAll() {
  document.getElementById("productList").innerHTML = "";
}

//Add to Cart Function
const productData = [
  {
    name: "Cool Item 1",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
    image: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Cool Item 2",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
    image: "https://learnwebcode.github.io/json-example/images/cat-2.jpg",
  },
  {
    name: "Cool Item 3",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
  {
    name: "Cool Item 4",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
  {
    name: "Cool Item 5",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
  {
    name: "Cool Item 6",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
  {
    name: "Cool Item 7",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
  {
    name: "Cool Item 8",
    brand: "cool brand",
    desc: "cool brand",
    price: "10,116",
  },
];

// function productTemplate(product) {
//   return `
//   <div class="card">
//   <img src =${product.image}
//   <div class = "container">
//      <input id = "productName" value="${productName}">
//      ${product.name}</p>
//       <p>${product.brand}</p>
//       <p>${product.price}</p>
//       <button id="addToCart">Buy</button>
//   </div>
//   </div>
//     `;
// }
// document.getElementById("info").innerHTML = `
//     ${productData.map(productTemplate).join("")}\
//   `;

document.getElementById("name1").innerHTML =
  productData[0].name + " (P" + productData[0].price + ".00)";

document.getElementById("name2").innerHTML =
  productData[1].name + " (P" + productData[1].price + ".00)";

document.getElementById("name3").innerHTML =
  productData[2].name + " (P" + productData[2].price + ".00)";

document.getElementById("name4").innerHTML =
  productData[3].name + " (P" + productData[3].price + ".00)";

document.getElementById("name5").innerHTML =
  productData[4].name + " (P" + productData[4].price + ".00)";

document.getElementById("name6").innerHTML =
  productData[5].name + " (P" + productData[5].price + ".00)";

document.getElementById("name7").innerHTML =
  productData[6].name + " (P" + productData[6].price + ".00)";

document.getElementById("name8").innerHTML =
  productData[7].name + " (P" + productData[7].price + ".00)";

var details1 = document.getElementById("name1");
var ol = document.querySelector("ol");

function addtoCart1() {
  var x = document.getElementById("name1").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart2() {
  var x = document.getElementById("name2").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}
function addtoCart3() {
  var x = document.getElementById("name3").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart4() {
  var x = document.getElementById("name4").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart5() {
  var x = document.getElementById("name5").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart6() {
  var x = document.getElementById("name6").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart7() {
  var x = document.getElementById("name7").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

function addtoCart8() {
  var x = document.getElementById("name8").innerHTML;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(x));
  ol.appendChild(li);
}

// function inputLength() {
//   return productName.value.length;
// }
// function createListElement() {
//   var li = document.createElement("li");
//   li.appendChild(document.createTextNode(className.value));
//   ol.appendChild(li);
// }
// function addListAfterClick() {
//   createListElement();
//   console.log(className.value);
//   alert("Item added to your cart!");
// }
// function addListAfterClick() {
//   createListElement();
// //   console.log(className.value);
// // }

// button.addEventListener("click", addListAfterClick);
