var didian = ['故宫','长城','圆明园','十渡','十三陵','颐和园'],
    mydiv = $('mydiv'),
    m = Math.floor(Math.random()*didian.length),
    timer,
    start = $('start'),
    stop = $('stop'),
    xzBtn = $('xzBtn'),
    shuru = $('shuru');

xzBtn.onclick = function () {
    var xdd = shuru.value,
        len = didian.length;
    for (var i=0; i<len; i++) {
         if (xdd == didian[i]) {
            alert('地点已存在');
            shuru.value = '';
            return;
        }    
    };
    if (xdd) {
        xdd = xdd.split('|');
        didian = didian.concat(xdd);
        shuru.value = '';
    }    
}

start.onclick = function () {
    if(timer) {
        return;
    }
    timer = setInterval (function(){
        var m = Math.floor(Math.random()*didian.length);
        mydiv.innerHTML = didian[m];
    },100);
}

stop.onclick = function () {
    clearInterval(timer);
    timer = undefined;
}


function $(id) {
    if (typeof id == 'string') {
        return document.getElementById(id);
    } else {
        return id;
    }
}