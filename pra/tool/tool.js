!function(window, document, $, undefined){

    $.fn.tab = function(className,evt){

        this.each(function(){
            var $this = $(this),
                $lis = $this.find('ul#theader>li'),
                $divs = $this.find('div#tbody>div'),
                evt = $this.attr('data-event')|| 'click' ;

            $lis.on(evt, function() {
                var $this = $(this),
                    index = $this.index(),
                    timer;

                if(evt=='mouseover'){
                    timer = setTimeout(function(){
                        $this.addClass('on').siblings('.on').removeClass('on');
                        $divs.eq(index).show().siblings(':visible').hide();
                    },300);

                    $lis.on('mouseout',function(){
                        if(timer) {
                            clearTimeout(timer);
                        }
                    })
                } else {                    
                    $this.addClass('on').siblings('.on').removeClass('on');
                    $divs.eq(index).show().siblings(':visible').hide();
                }
            });
        });       

    }

}(window, document, jQuery);