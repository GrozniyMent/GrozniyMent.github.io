var ds = document.getElementById("dsc"); 
var st = document.getElementById("stm");
var gt = document.getElementById("git");
var tg = document.getElementById("tgm");
var menu = document.getElementById("menu");

//ds.style.display = "none";
//st.style.display = "none";
//gt.style.display = "none";
//tg.style.display = "none";

var isRotated = false;

function ShowAndMove(el, moveTo){
    el.style.opacity = "1"
    el.style.transform = `translateX(${moveTo})`
    el.style.transition = "all 2s"
    el.style.pointerEvents="auto"
}

function HideAndMove(el, moveTo){
    el.style.opacity = "0"
    el.style.transform = `translateX(${moveTo})`
    el.style.transition = "all 2s"
    el.style.pointerEvents="auto"
}


menu.onclick = function(){
    if(!isRotated){
        isRotated = true;
        menu.style.transform = "rotate(90deg)";
        ShowAndMove(st, "-45px");
        ShowAndMove(dsc, "-95px");
        ShowAndMove(gt, "50px");
        ShowAndMove(tg, "100px");
    }else{
        menu.style.transform = "rotate(0deg)";
        isRotated = false;
        HideAndMove(st, "0px")
        HideAndMove(dsc, "0px")
        HideAndMove(gt, "0px")
        HideAndMove(tg, "0px")
    }

    console.log("3"); 
}


