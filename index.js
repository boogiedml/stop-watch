

//Time Converter
function timeToString(time){    
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMins = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMins);

    let diffInSec = (diffInMins - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let fullmm = mm.toString().padStart(2, "0");
    let fullss = ss.toString().padStart(2, "0");
    let fullms = ms.toString().padStart(2, "0");
    return `${fullmm} : ${fullss} : ${fullms}`;
}



/////////////////////////////////////////////////////////////////////////////
let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");

playBtn.addEventListener("click", play);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);


/////////////////////////////////////////////////////////////////////////////
let startTime;
let elapsedTime = 0;
let timeInterval;

function print(txt){
    document.getElementById("display").innerHTML = txt;
}
function play(){
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    },10);
    (new Audio("sounds/play.mp3")).play();
    document.querySelector(".mainTime").style.backgroundColor = "#1C0A00"
    document.querySelector("#display").style.color = "#CC9544"
    document.querySelector(".mainTime").style.borderColor = "#361500"
}

function pause(){
    clearInterval(timeInterval);
}

function reset(){
    clearInterval(timeInterval);
    elapsedTime = 0;
    print("00 : 00 : 00");
    document.querySelector(".mainTime").style.backgroundColor = "#CC9544"
    document.querySelector("#display").style.color = "#1C0A00"
    document.querySelector(".mainTime").style.borderColor = "#1C0A00"
}