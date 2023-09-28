orderReve = localStorage["orderRev"];


ordersToView = orderReve.split(',');


let list = document.getElementById("orderRev");
for (i = 0; i < ordersToView.length; ++i) {
    let li = document.createElement('li');
    li.innerText = ordersToView[i];
    list.appendChild(li);
}

function returnHome(){

    allOrders = localStorage['allOrders'];
    allOrdersSplit = allOrders.split(',')
    allOrdersSplit.push(ordersToView)
    console.log(allOrdersSplit)
    localStorage.setItem('allOrders', JSON.stringify(allOrdersSplit));
    window.location.href = "Home.html"
}