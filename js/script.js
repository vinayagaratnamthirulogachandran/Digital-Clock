function runClock(){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var txt = "AM";
    if(hrs>12){
        hrs = hrs - 12;
        txt = "PM";
    }else if(hrs == 0){
        hrs = 12;
        txt = "AM";
    }
}


runClock();