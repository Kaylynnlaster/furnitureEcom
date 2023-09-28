prevOrder = localStorage["allOrders"];
console.log(prevOrder)

prevordersToView = prevOrder.split(',');

console.log(prevordersToView)

let list = document.getElementById("prevOrderList");
for (i = 0; i < prevordersToView.length; ++i) {
    let li = document.createElement('li');
    li.innerText = prevordersToView[i];
    list.appendChild(li);
}

function returnHome(){
    window.location.href = "Home.html"
}