//counter code
var button = document.getElementsByClassName('profButton');
var counter = 0;
button.onclick = function() {
    
    //Create a request
    
    
    
    
    
    //Make a request 
    counter = counter + 1;
    var spanbutton = document.getElementById('count');
    spanbutton.innerHTML = counter.toString();
    
    
};