!function(window, document, $, undefined){
    var $navR = $('#navR'),
        $i = $navR.find('#menuOne .icons');
    $i.on('mouseover',function(e) {
        var $this = $(this),
            $target = $this.parent().find('span'),
            width = $target.width();
        $this.parent().find('span').animate({'left':-width},300);
            // (e.stopPropagation)?e.stopPropagation():e.cancelBubble = true;
        $this.on('mouseout',function(){
            $this.parent().find('span').animate({'left':'0px'},300);
        })
    })

}(window, document, jQuery);