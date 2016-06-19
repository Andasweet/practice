function $(id){
    if (typeof id == 'string'){
        return document.getElementById(id);
    } else {
        return id;
    }
}
var startBtn = $('start'),
    djs = $('djs'),
    inText = $('inText'),
    xz = $('xz'),
    optionHtml = '小时,分钟,秒'.split(','),
    optionVal = '3600,60,1'.split(','),
    option = [];

for (var i=0; i<optionHtml.length; i++) {
    option.push('<option value="',optionVal[i],'">',optionHtml[i],'</option>');
}
xz.innerHTML = option.join('');

startBtn.onclick= function () {   
    var time = inText.value,
        xzVal = xz.value,
        total;

    if (isNaN(time)||time==''||time<0) {
        return;
    };
    total = time * xzVal;  
    cutsDown(total);     
}

function cutsDown(seconds) {
    var timer,h,m,s;
    timer = setInterval(function(){
        seconds--;
        if(seconds==0) {
            clearInterval(timer);
            alert('时间到');
        }
        h = Math.floor(seconds/3600);
        m = Math.floor(seconds%3600/60);
        s = Math.floor(seconds%60);
        h<10?h='0'+h:h;
        m<10?m='0'+m:m;
        s<10?s='0'+s:s;  
        djs.innerHTML = h+ ':' + m + ':' + s;  
    },1000)   
}




