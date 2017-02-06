console.log('Loaded!');
//image workout
var img = document.getElementById('profimage');
var marginRight = 0;
function moveLeft(){
    marginRight = marginRight + 2;
    img.style.marginRight = marginRight + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveLeft,50);
};