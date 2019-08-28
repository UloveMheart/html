var bodyWid=document.body.offsetWidth; 
var bodyHei=document.body.offsetHeight; 
var canWid=bodyWid*0.6-120;
var canHei=bodyHei-380;
var resizeFlag = null;
const canvas = document.getElementById('canvas');
var imgObj = new Image();

var imgsrc1 = "../images/halifax_first.jpg";
var imgsrc2 = "../images/halifax_second.jpg";
var imgsrc3 = "../images/halifax_third.jpg";
var imgsrc4 = "../images/halifax_forth.jpg";
var imgsrc5 = "../images/halifax_fifth.jpg";
var imgnow=1;

imgObj.src = imgsrc1;

function can(){
    var ctx = canvas.getContext('2d');
    var pW=imgObj.width;
    var pH=imgObj.height;
    if(pW>canWid){
        pH=pH*canWid/pW;
        pW=canWid;
        if(pH>canHei){
            pW=pW*canHei/pH;
            pH=canHei;
        }
        else{
            pW=canWid;
        }  
    }
    else if(pH>canHei){
        pW=pW*canHei/pH;
        pH=canHei;
    }
    var pL=((canWid-pW)*0.5+bodyWid*0.2+60).toFixed(2);
    var pT=((canHei-pH)*0.5+250).toFixed(2);
    document.getElementById("canvas").setAttribute("width",bodyWid);
    document.getElementById("canvas").setAttribute("height",bodyHei);
    ctx.drawImage(imgObj,pL,pT,pW,pH);

}
imgObj.onload = function () {
    can()
};

setInterval("next()",5000);
canvas.addEventListener("mousewheel", MouseWheelHandler, false);
canvas.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
var mouse=0;

function MouseWheelHandler(e) { 
    if(mouse<=10){
        mouse++;
    }
    else{
        mouse =0;
        var e = window.event || e; // old IE support
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        if(delta>0){
            next();
        }
        if(delta<0){
            prev();
        }
    }
    return false;
}

window.onresize = function(){
  if(resizeFlag != null){
    clearTimeout(resizeFlag);
  }
  resizeFlag = setTimeout(function(){
     whil();
  },10)
}

function whil() {
    bodyWid=document.body.offsetWidth; 
    bodyHei=document.body.offsetHeight; 
    canWid=bodyWid*0.6-120;
    canHei=bodyHei-360;
    can();    
}

function next(){
    imgnow++;
    if(imgnow==6){
        imgnow=1;
        imgObj.src=imgsrc1;
    }
    else if(imgnow == 5){
        imgObj.src=imgsrc5;
    }
    else if(imgnow == 4){
        imgObj.src=imgsrc4;
    }
    else if(imgnow == 3){
        imgObj.src=imgsrc3;
    }
    else if(imgnow == 2){
        imgObj.src=imgsrc2;
    }
}

function prev(){
    imgnow--;
    if(imgnow==0){
        imgnow=5;
        imgObj.src=imgsrc5;
    }
    else if(imgnow == 4){
        imgObj.src=imgsrc4;
    }
    else if(imgnow == 3){
        imgObj.src=imgsrc3;
    }
    else if(imgnow == 2){
        imgObj.src=imgsrc2;
    }
    else if(imgnow == 1){
        imgObj.src=imgsrc1;
    }
}

document.getElementById("clickRight").onclick = function () {
    next();
};
document.getElementById("clickLeft").onclick = function () {
    prev();
};
document.getElementById("b_china").onclick = function () {
    imgsrc1 = "../images/china_first.jpg";
    imgsrc2 = "../images/china_second.jpg";
    imgsrc3 = "../images/china_third.jpg";
    imgsrc4 = "../images/china_forth.jpg";
    imgsrc5 = "../images/china_fifth.jpg";
    imgnow=1
    imgObj.src=imgsrc1;
    whil();
};
document.getElementById("b_halifax").onclick = function () {
    imgsrc1 = "../images/halifax_first.jpg";
    imgsrc2 = "../images/halifax_second.jpg";
    imgsrc3 = "../images/halifax_third.jpg";
    imgsrc4 = "../images/halifax_forth.jpg";
    imgsrc5 = "../images/halifax_fifth.jpg";
    imgnow=1
    imgObj.src=imgsrc1;
    whil();
};


