console.log('Loaded!');
//image workout
var img = document.getElementbyId('profimage');
var marginRight = 0;
function moveLeft(){
    marginRight = marginRight + 5;
    img.style.marginRight = marginRight + "%";
}
img.onClick = function(){
    var interval = setInterval(moveLeft,50);
};