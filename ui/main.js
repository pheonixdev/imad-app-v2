//counter code
var button = document.getElementById('profButton');
var counter = 0;
button.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    
    
    
    
    //Make a request 
    counter = counter + 1;
    var spanbutton = document.getElementById('count');
    spanbutton.innerHTML = counter.toString();
    
    
};