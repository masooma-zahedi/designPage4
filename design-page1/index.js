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


// calculate date
window.addEventListener("load",calculateTime);
function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    hour = hour%12 ;
    hour = hour == 0 ? "12": hour;
    hour = hour < 10 ? "0"+hour : hour;

    var min = date.getMinutes();
    min = min < 10 ? "0"+ min : min;
    var ampm = hour >= 12 ? "pm" : "am";
    var dayName = ["Sun","Mon","Tue","Wed","thu","Fri","Sat"];
    var day = dayName[dayNumber];

    document.getElementById("day").innerHTML = day;
    document.getElementById("hour").innerHTML=hour;
    document.getElementById("min").innerHTML=min;
    document.getElementById("ampm").innerHTML=ampm;
    setTimeout(calculateTime,200)
}
