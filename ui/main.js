//counter code
var button = document.getElementById('profButton');

button.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    //Capture the response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
            var counter = request.responseText;
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

//Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //Make a request to the server and send the name
     //Create a request
    var request = new XMLHttpRequest();
    //Capture the response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
            //Captures a list of names and render it as a list
                var names = ['name1','name2','name3','name4', 'name5'];
                var list = '';
                for(var i = 0; i < names.length; i++){
                    list += '<li>' + names[i] + '<li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
            //Not done yet
                    
        }
    };
    //Make a request 
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET','http://pheonixdev.imad.hasura-app.io/counter', true);
    request.send(null);
    
};
