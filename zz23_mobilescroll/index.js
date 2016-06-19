!function() {

    $('#scroller li').on('swipeLeft', function(){
        var $this = $(this);

        $this.animate({'margin-left':'-60px'},300)
             .addClass('left')
             .siblings('li').animate({'margin-left': 0},300)
             .find('.del').animate({right: -60},300);
     
        $this.find('.del').animate({right: 0},300);  
    })
    .on('swipeRight', function () {
        var $this = $(this);
        if($this.hasClass('left')) {
            $this.animate({'margin-left': 0},300)
                 .find('.del').animate({right: -60},300);
        }
    })

    $('#scroller li .del').on('tap', function() {
        $(this).parent('li').remove();
    })

}();