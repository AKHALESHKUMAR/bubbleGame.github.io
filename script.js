function makebubble(){
    
var  cluster="";
for(var i=1; i<100; i++){
    var rt=Math.floor(Math.random()*10);
 cluster +=` <div class="bubble">  ${rt}</div>`;
}

document.querySelector("#penalbottom").innerHTML=cluster;
}

var settime=60;

function settime1(){

     var m=setInterval(() => {
        if(settime>0){
            settime--;
            document.querySelector("#timer").textContent=settime; 
        }
        else{
            clearInterval(m);
            document.querySelector("#penalbottom").innerHTML=`<h1>Game  over </h1>`;
            
        }
      
    }, 1000);
}

var mtv=0;

function setHit(){
mtv=Math.floor(Math.random()*10);
document.querySelector("#Hit").textContent=mtv;
}


var Score=0;

function Score1(){
    Score +=10;
    document.querySelector("#Score").textContent=Score
}

document.querySelector('#penalbottom').
addEventListener("click",function(dates){
    var data=Number(dates.target.textContent);

    if(data===mtv){
        Score1();
        setHit();
        makebubble();
    }
    else{

    }

})


setHit();
settime1();
makebubble();