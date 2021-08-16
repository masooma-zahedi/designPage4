let sweetch = document.querySelector(".cir-tog");
let darkhead = document.querySelector(".head");
let darkMainB = document.querySelector(".main-big")
let darkMainS = document.querySelector(".main-small")
let darkIntro = document.querySelector(".intro");
// console.log(sweetch);
sweetch.addEventListener("click",function(){
    if(this.classList.contains("sweet")){
        this.classList.remove("sweet")
        this.style.right = "3px";
        // ======changes=====
        document.body.style.backgroundColor = " white";
        darkhead.classList.remove("dark-head");
        darkMainB.classList.remove("dark-mainB");
        darkMainS.classList.remove("dark-mainS");
        darkIntro.classList.remove("dark-intro")

    } else{
        this.style.right = "27px";
        this.classList.add("sweet");
        // =========== changes=============
        document.body.style.backgroundColor = " hsl(230, 17%, 14%)";
        darkhead.classList.add("dark-head");
        darkMainB.classList.add("dark-mainB");
        darkMainS.classList.add("dark-mainS");
        darkIntro.classList.add("dark-intro");
    }
})