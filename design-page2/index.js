$(document).ready(function(){
    $(".ham").on("click",function(){

        // alert("niini")
        $(".pic").css("top","75px")
        $(".angel").css("top","395px");
        $(".header h3").css("display","none")
        $(".nav").addClass("menu-375");
        $(".mask").css("display","block")
        $(".slider").css("height","760px")
        if(sWidth === 320){
            $(".angel").css("top","342px");
            $(".slider").css("height","700px")

        }
    
    })
    $(".close-ham").on("click",function(){
        $(".pic").css("top",0);
        $(".angel").css("top","320px");
        $(".header h3").css("display","block")
        $(".nav").removeClass("menu-375")
        $(".mask").css("display","none");
        $(".slider").css("height","700px")

        if(sWidth === 320){
            $(".angel").css("top","267px");
            $(".slider").css("height","667px")
        }
    

    })
    

    // slider
    $(".go-right").on('click',function(){
        var currentpic = $('.active');
        var nextpic = currentpic.next();
        console.log(nextpic);

        if(nextpic.length){
            currentpic.removeClass("active").css("z-index", -10);
            nextpic.addClass("active").css("z-index", 10);
        }
    })

    $(".go-left").on("click",function(){
        var currentpic = $('.active');
        var prevpic = currentpic.prev();
        console.log(prevpic);

        if(prevpic.length){
            currentpic.removeClass("active").css("z-index", -10);
            prevpic.addClass("active").css("z-index", 10);
        }
    })

    // change Width===============
    let sWidth = screen.width;
    console.log(sWidth);
    
    if(sWidth <= 992){
        $(".w-375").css("display","block")
        $(".w-1200").css("display","none")
    }
    if(sWidth >= 1024){
        $(".w-375").css("display","none")
        $(".w-1200").css("display","block")
    }
})