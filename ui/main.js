//Submit username/password

var submit = document.getElementById('submit_btn');
submit.onclick = function() {

     //Create a request
    var request = new XMLHttpRequest();
    //Capture the response and store in variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
                console.log('User logged in');
                alert('Logged In Successfully');
            }
            else if(request.status === 403) {
                alert('Username/Password is incorrect');
            }
            else if(request.status === 500) {
                alert('Something went wrong on the server');
            }
                    
        }
    };
    //Make a request 
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://pheonixdev.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username:username, password:password}));
};
