//counter code
var button = document.getElementById('profButton');
var counter = 0;
button.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    //Capture the response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLhttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
            var counter = request.responeText;
            var spanbutton = document.getElementById('count');
            spanbutton.innerHTML = counter.toString();
            }
        //Not done yet
        
        }
    };
    //Make a request 
    request.open('GET','http://pheonixdev.imad.hasura-app.io/counter', true);
    request.send(null);
};