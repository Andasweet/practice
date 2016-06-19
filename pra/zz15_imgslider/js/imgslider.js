!function() {
    var $slider = $('.slider'),
        $ul = $slider.find('ul'),
        $lis = $ul.find('li'),
        len = $lis.length,
        width = $('li').width(),
        ulW = len*width,
        $header = $slider.find('.s-header'),
        timer;
        $header.html(headerLen());
    var $hSpans = $header.find('span');

    function headerLen() {
        var hc = [];
        for(var i=0; i<len; i++) {
            if(i==0){
                hc.push('<span class="on"></span>');
            } else {
                hc.push('<span></span>');
            }
        }
        return hc.join('');
    }

    $ul.width(ulW);
    $('.slider>span').on('click', function() {
        var $this = $(this),
            onindex = $header.find('span.on').index();

        if ($('ul:animated').length>0) {
            return;
        }
        if($this.hasClass('next')) {
            onindex++;
            if(onindex > $hSpans.length-1){
                onindex = 0;
            }
        } else {
            onindex--;
            if(onindex<0){
                onindex = $hSpans.length-1;
            }       
        }
        $header.find('span').eq(onindex).trigger('click');
    });

    $slider.on('mouseover', function() {
        clearInterval(timer);
    });

    $slider.on('mouseout',function(){
        runner();
    });

    function runner() {
        timer = setInterval( function() {
            $slider.find('span.next').trigger('click');
        },2000);
    }
    runner();

    $hSpans.on('click', function() {
        var $this = $(this),
            ind = $this.index();
        $this.addClass('on').siblings('.on').removeClass('on');
        $ul.animate({marginLeft: -width*ind},200);        
    });
}()