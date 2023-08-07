var sliderMain = document.getElementById("slider-main");
var item = document.getElementsByClassName("item");

function next(){
    sliderMain.append(item[0]);
}

function prev(){
   sliderMain.prepend(item[item.length - 1]) ;
}

setInterval(function(){
    next()
}, 3000)