function accordion() {
    var $h2 = $('h2');

    $h2.on('click',function(){
        var $this = $(this),
            $ul = $this.parent().find('ul');
        $this
            .addClass('red')
            .parent().siblings().find('h2').removeClass('red');
        $this.find('i').addClass('ired')
            .end()
            .parent().siblings().find('i').removeClass('ired');
        $ul.slideToggle(500);
        $ul.parent().siblings().find('ul').slideUp();
    })
}
accordion();