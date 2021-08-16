var navBar = document.getElementById("navbar");
navBar.addEventListener("click",function(){
    let navClose = document.querySelector(".close-bar");
    navBar.style.display = "none";
    navClose.style.display = "block";

    let navlist = document.getElementById("navlist");
    navlist.classList.add("navblock")
    let navlink = navlist.querySelectorAll("#navlist a");
    console.log(navlink);
    navlink.forEach(function(link){
        link.style.paddingTop = "30px";
        link.style.borderBottom = "1px solid #ccc";
        link.style.color ="#333";
        link.style.fontSize = "25px"
    })
    navClose.addEventListener("click",function(){
        navlist.classList.remove("navblock");
        navBar.style.display = "block";
        navClose.style.display = "none"
    })
});

// Photo-active-states-modal-completed=====================
function lightBox(){
    let lightBox = document.querySelector(".box-modal1");
    lightBox.style.display = "block"
}

function closeLightB(){
        let lightBox = document.querySelector(".modal1");
        lightBox.style.display= "none"
}

//  Back this project
let backPro = document.querySelector("#backPro");
let backP = document.querySelector(".backP");

backPro.addEventListener("click",function(){
    backP.style.display = "block";
})



let proClose = document.querySelector("#pro-close");
proClose.addEventListener("click",function(){
    backP.style.display = "none"
})

// =================
let input = document.querySelectorAll("input");
input.forEach(function(item){
    // input.classList.remove("active");

    item.addEventListener("click",function(e){
        
        // selectBbox.classList.remove("active");

        let selectBbox = e.target.parentElement.parentElement.parentElement;
        let newPart =selectBbox.children[1];
        if(selectBbox.classList.contains("active")){
            
            selectBbox.classList.remove("active");
            newPart.style.display = "none"
        } else {
            newPart.style.display = "block";
        selectBbox.classList.add("active");
        }
    })
})

// ============
let hi = document.querySelector("#hihi");
var txt = "0"
    

