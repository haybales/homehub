function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = prependZeros(m);
    s = prependZeros(s);
    var postfix = " AM";
    if(h>12){
      h%=12;
      postfix=" PM";
    }else if(h==12){
      postfix=" PM"
    }
    if(h==0){
      h=12;
    }
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s + postfix;
    var t = setTimeout(startTime, 500);
}
function prependZeros(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

window.onLoad=startTime();
