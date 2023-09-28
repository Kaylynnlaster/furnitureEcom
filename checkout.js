myorder = localStorage["myOrder"];

myorderlist = []
var word = "";
myorderlist = myorder.split(',');



let list = document.getElementById("myOrder");
for (i = 0; i < myorderlist.length; ++i) {
    let li = document.createElement('li');
    li.innerText = myorderlist[i];
    list.appendChild(li);
}

function confirm(){
    localStorage['orderRev'] = myorderlist;
    window.location.href = "orderConfirm.html"
}