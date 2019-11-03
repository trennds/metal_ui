var btn = document.getElementsByClassName("open")[0];
var alert = document.getElementsByClassName("alert-box")[0];
var node = document.createElement("span");
var textnode = document.createTextNode("x");

var text = document.getElementsByClassName("content")[0];
var message = btn.getAttribute("message");

btn.onclick = function () {
    alert.style.display = "block";
    text.innerHTML = message;
    node.appendChild(textnode);
    document.getElementsByClassName("content")[0].appendChild(node).classList.add("alert-close");
    var close = document.getElementsByClassName("alert-close")[0];
    
    close.onclick = function () {
        alert.style.display = "none";
    }
    
    setTimeout(function(){ alert.style.display = "none"; }, 3000);
}




