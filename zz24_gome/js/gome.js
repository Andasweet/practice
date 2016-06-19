$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay : 2000,
        pagination: '.swiper-pagination',  
    })
    $('#btn1').click(function(){
        mySwiper.stopAutoplay();
        })
    $('#btn2').click(function(){
        mySwiper.startAutoplay();
    })
})

