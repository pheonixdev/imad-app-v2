//counter code
var button = document.getElementById('profButton');
var clicked = 0;
button.onclick = function(){
    clicked = clicked + 1;
    var spanbut = document.getElementById('count');
    spanbut.innerHTML = clicked.toString();
};