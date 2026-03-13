let cart = [];

function addToCart(productName, price) {

    cart.push({ name: productName, price: price });

    displayCart();
}

function displayCart() {

    let cartList = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("cart-total");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">
                ${item.name} - KES ${item.price}
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
            </li>
        `;
    });

    totalDisplay.innerText = total;
}

function clearCart(){
cart = [];
displayCart();
}

function proceedToCheckout(){

if(cart.length === 0){
alert("Cart is empty!");
return;
}

document.getElementById("checkout").style.display = "block";

let checkoutList = document.getElementById("checkout-items");
let checkoutTotal = document.getElementById("checkout-total");

checkoutList.innerHTML="";
let total = 0;

cart.forEach(item => {

total += item.price;

checkoutList.innerHTML += `
<li class="list-group-item">
${item.name} - KES ${item.price}
</li>
`;

});

checkoutTotal.innerText = total;

window.scrollTo(0,document.body.scrollHeight);

}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}
function goToCheckout() {

    if(cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    document.querySelector("h2.text-center.mb-4:last-of-type").scrollIntoView({
        behavior: "smooth"
    });
}

function placeOrder(){
alert("Order placed successfully! Thank you for shopping with us.");
cart = [];
displayCart();
}

function placeOrder(){
document.getElementById("order-message").innerHTML =
"<div class='alert alert-success'>Order placed successfully!</div>";

cart = [];
displayCart();
}