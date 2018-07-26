/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
  table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tbodyEl = document.getElementsByTagName('tbody');
  tbodyEl[0].textContent = '';
}
  

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tbodyEl = document.getElementsByTagName('tbody');
  console.log(tbodyEl[0]);
  // TODO: Iterate over the items in the cart

  // TODO: Create a TR
  for (var j = 0; j < cart.items.length; j++) {
    var trEl = document.createElement('tr');
    //trEl.setAttribute('id', j);

    var tdEl1 = document.createElement('td');
    var buttonEl = document.createElement('button');
    buttonEl.innerHTML = 'X';
    buttonEl.setAttribute('id', j);
    //buttonEl.addEventListener('click', removeItemFromCart);
    
    tdEl1.appendChild(buttonEl);

    var tdEl2 = document.createElement('td');
    tdEl2.textContent = cart.items[j].quantity;
    var tdEl3 = document.createElement('td');
    tdEl3.textContent = cart.items[j].product;
    
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tbodyEl[0].appendChild(trEl);
  }

  // TODO: Create a TD for the delete link, quantity, and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {

  var rowNum = event.target.id;
  console.log(event.target);

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(rowNum);
  
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  clearCart();
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
