var clock = document.getElementById('clock');
var now = new Date();
var h,m,s;
setInterval(function(){
    s = now.getSeconds();
    s++;
    s = now.setSeconds(s);
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds(); 
    clock.innerHTML = fill0(h)+':'+fill0(m)+':'+fill0(s);

}, 1000);


