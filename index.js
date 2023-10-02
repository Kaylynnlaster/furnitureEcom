allOrders = []

localStorage['allOrders'] = allOrders;


var products = [
    {
        name: "Skeleton Lamp",
        price: 10.00
    }
]

var myCart = []
var Order = []

var objUsers = [
    {
        username:"jackson5",
        password:"abc"
    },
    {
        username:"jill&jack",
        password:"roll"
    },
    {
        username:"hankhill",
        password:"gas"
    }
]

function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for (i =0; i<objUsers.length; i++) {
        if(username ==objUsers[i].username && password == objUsers[i].password) {
            console.log(username + " is logged in")
            window.location.href = 'Home.html'
            return false
            
            
        }
    }
    
}

function register(){
    var regUser = document.getElementById("newUser").value
    var regPass = document.getElementById("newPass").value
    var newUser = {
        username: regUser,
        password: regPass
    }

    for(i = 0; i < objUsers.length; i++) {
        if(regUser == objUsers[i].username) {
            alert("username in use")
            return
        } else if (regPass.length < 8) {
            alert("password too short. must be 8+ characters")
            return
        }
    }
    objUsers.push(newUser)
    console.log(objUsers)
    window.location.href = 'Home.html'
    alert("New account registered!")
    return false
}

function addToCart(i) {
    var product = products[i]
    myCart.push(product)
    let list = document.getElementById("myList");
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
    for (i = 0; i < myCart.length; ++i) {
        let li = document.createElement('li');
        var proString = myCart[i].name + " price: " + myCart[i].price;
        console.log(proString)
        li.innerText = proString
        list.appendChild(li);
    }
    Order.length = 0;
    var items = list.getElementsByTagName("li");
    for (var i = 0; i < items.length; ++i) {
        Order.push(items[i].innerText)
    }
    console.log(Order)
    console.log(Order.length)
    localStorage["myOrder"] = Order
}
function checkout(){
    window.location.href = 'checkout.html'
}

let navbar = document.querySelector('.header .navbar');


let shoppingcart = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.add('active');
}

document.querySelector('#close').onclick = () =>{
    shoppingcart.classList.remove('active');
};

// account form

let accountform = document.querySelector('.account-form');

document.querySelector('#account-btn').onclick = () =>{
    accountform.classList.add('active');
}

document.querySelector('#close-form').onclick = () =>{
    accountform.classList.remove('active');
}

let registerbtn = document.querySelector('.account-form .register-btn');
let loginbtn = document.querySelector('.account-form .login-btn');

registerbtn.onclick = () => {
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
}

loginbtn.onclick = () => {
    registerbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};