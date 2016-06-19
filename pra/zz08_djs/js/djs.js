function djs() {
    var startBtn = $('startBtn');
    var inText = $('inText');
    var time = $('time');
    var sel = $('sel');
    var timer;
   
    startBtn.onclick = function() {
        var inVal = inText.value;
        var selVal = sel.value;
        var total;     
        if(isNaN(inVal)||inVal==''||inVal<0) {
            alert('输入错误');
            return;
        };
        selVal==0 && alert('请选择');
        total = inVal * selVal;      
        cuts(total);
    }

    function cuts(seconds) {
        var h, m, s;
        seconds++;
        timer = setInterval(function() {
            seconds--; 
            if(seconds<10){
                time.className = 'red';
            };
            seconds==0 && clearInterval(timer);
            h = Math.floor(seconds/3600);
            m = Math.floor(seconds%3600/60);
            s = Math.floor(seconds%60); 
            time.innerHTML = fill0(h) + ':' + fill0(m) + ':' + fill0(s);
        },1000);          
    }
}
djs();



        // startBtn.innerHTML = '暂停';             
        // if(startBtn.innerHTML=='暂停') {
        //     startBtn.onclick = function(){
        //         clearInterval(timer);
        //         startBtn.innerHTML = '开始倒计时';
        //     }
        // };