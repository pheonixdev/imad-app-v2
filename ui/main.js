//counter code
var button = document.getElementById('profButton');
var clicked = 0;
button.onclick = function(){
    //make a request to the counter end point
    
    //capture the response and store it in a variable
    
    //Render the variable in the correct span
    clicked = clicked + 1;
    var spanbut = document.getElementById('count');
    spanbut.innerHTML = clicked.toString();
    
};