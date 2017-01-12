var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

var firsttabs = document.getElementById("firsttabs");
var secondtabs = document.getElementsByClassName("secondtabs");


div1.addEventListener("click", mydiv1);
div1.addEventListener("mouseover", mydiv1hover);
div1.addEventListener("mouseleave", mydiv1leave);



var click = 1;

function mydiv1() {
    if (click % 2 === 0) {
        firsttabs.style.display = "none";
    } else {
        firsttabs.style.display = "block";
    }
    click++;
}


function mydiv1hover() {
    div1.style.backgroundColor = "purple";
}

function mydiv1leave() {
    div1.style.backgroundColor = "red";
}
