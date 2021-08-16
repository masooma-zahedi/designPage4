var slider = document.querySelector("#myRange");

slider.addEventListener("mousemove",function(){
    var x = slider.value;
    // var color = "linear-gradient(90deg, hsl(174, 86%, 45%)" + x + "%, hsl(224, 65%, 95%)" + x + "%)";
    if(x < 50){
        var color = "linear-gradient(90deg, hsl(174, 86%, 80%)" + x + "%, hsl(224, 65%, 95%)" + x + "%)";

    } else{
        var color = "linear-gradient(90deg, hsl(174, 86%, 45%)" + x + "%, hsl(224, 65%, 95%)" + x + "%)";

    }
    slider.style.background = color;

})
// ========== color slider===========

// ============
let goRight = document.querySelector(".clickk div");
// goRight.style.backgroundColor = "red";
goRight.addEventListener("click",function(){
    goRight.classList.toggle("click-goright")
})
