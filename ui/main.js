//counter code
var button = document.getElementById('profButton');
var counter = 0;
button.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store in variable
    if(request.readyState === XMLhttpRequest.DONE){
        //Take some action
        
    }
    //Not done yet
    
    if(request.status === 200) {
        var counter = request.responeText;
        var spanbutton = document.getElementById('count');
        spanbutton.innerHTML = counter.toString();
    }
    //Make a request 
    
    
};