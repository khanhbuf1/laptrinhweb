var img=[];
var curimg=0;
function Load_image(){
    for(i=2;i<6;i++){
        img[i]=new Image();
        img[i].src="zing"+i+".jpg";
    }
}
function next(){
    if(curimg<img.length-1){
        curimg++;
        document.getElementById("zing").src=img[curimg].src;
    }
    if(curimg==img.length-1){
        curimg=0;
    }
}
function back(){
    if(curimg>0){
        curimg--;
        document.getElementById("zing").src=img[curimg].src;
    }
    if(curimg==0){
        curimg=img.length-1;
    }
}