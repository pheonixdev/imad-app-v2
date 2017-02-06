console.log('Loaded!');
//image workout
var img = document.getElementById('profimage');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50);
};