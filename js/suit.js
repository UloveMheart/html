const change= 990;
var bodyWid;
var bodyHei;
var resizeFlag = null;
bodyWid=document.body.offsetWidth; 
bodyHei=document.body.offsetHeight; 
const bods = document.getElementById("bods");
const b_halifax = document.getElementById("b_halifax");
const b_china = document.getElementById("b_china");
const pFrame = document.getElementById("pFrame");
suit();

window.onresize = function(){
    if(resizeFlag != null){
      clearTimeout(resizeFlag);
    }
    resizeFlag = setTimeout(function(){
        bodyWid=document.body.offsetWidth; 
        bodyHei=document.body.offsetHeight; 
        suit();
    },10)
}
function suit(){
    if(bodyWid>990){
        bods.style.top = "200px";
        b_halifax.style.top = "175px";
        b_china.style.top = "230px"
    }
    else if(bodyWid<=990&&bodyWid>666){

        bods.style.top= "260px";
        b_halifax.style.top = "235px";
        b_china.style.top = "290px"
    }
    else{
        bods.style.top = "320px";
        b_halifax.style.top = "295px";
        b_china.style.top = "350px"
    }
}
