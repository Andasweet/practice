// 灵动菜单
!function() {
    $(window).on('scroll', function() {
        var $this = $(this),
            $top = $('.top'),
            $header = $('.header'),
            top = $top.height(),
            scrollTop = $this.scrollTop();
      
        if (scrollTop > top) {
            $header.addClass('fixed');
            $('.bd').addClass('mt');
          } else {
            $header.removeClass('fixed');
            $('.bd').removeClass('mt');
          }
    })
}()

// 返回顶部

!function(window,document,$,undefined) {
    $(window).on('scroll', function() {
        var $tot = $('.tot'),
            height = $(this).height(),
            scroll = $(this).scrollTop();

        if(scroll<height){
            $tot.slideUp()
        } else {
            $tot.slideDown();
        };
    })
    $('.tot').on('click', function() {
        // $(window).scrollTop(0); 无动画
        $('body').animate({scrollTop:0},500);
    })
}(window,document,jQuery)

// 滑动停靠
!function() {
    var $trigger = $('.trigger'),
        $rslider = $('.rslider');

    $trigger.on('click', function() {

        if($rslider.hasClass('r5')) {
            $rslider.animate({right:-130},500); 
            $rslider.removeClass('r5');
        } else {
            $rslider.animate({right:-5},500);
            $rslider.addClass('r5');
        }
    })
}()

// 无缝滚动

!function() {
    var $ul = $('.gd>ul'),
        $lis = $ul.find('li'),
        len = $lis.length,
        width = $lis.width(),
        timer;
    $ul.append($lis.clone());
    $ul.width(len*width+len*5);

    scroll();

    $('.gd').on('mouseenter',function() {
        clearInterval(timer);
    })
    $('.gd').on('mouseleave',function() {
        scroll();
    })

    function scroll() {
        timer = setInterval(function() {
            $ul.animate({marginLeft:-width},1000, function() {
                $ul
                    .append($ul.find('li:first'))
                    .css({'margin-left':0});
            })
        },500) 
    }

}()