var ham = document.querySelector(".ham");
ham.addEventListener("click",function(){
    let header = document.querySelector(".header");
    header.classList.toggle("black-header");
    let hamimg = document.querySelector(".ham img");
    // console.log(hamimg.src);
    if(header.classList.contains("black-header")){
        // console.log("nini")
        hamimg.src = "images/icon-close.svg"
    }else{
        hamimg.src = "images/icon-hamburger.svg"
    }
});
// ========
let screen = window.screen.width;

let moPic = document.querySelectorAll(".mo-pic");
console.log(moPic);
let dePic = document.querySelectorAll(".de-pic");

if(screen > 1200){
    moPic.forEach(function(img){
        img.classList.add("none-pic")
    })
    dePic.forEach(function(e){

        e.classList.add("block-pic")
    })
}else{
    moPic.forEach(function(img){
        img.classList.add("block-pic")
    })
    dePic.forEach(function(e){

        e.classList.add("none-pic")
    })
}