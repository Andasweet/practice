!function(window, document, $, undefined) {

    var ifr = document.getElementById('ifr1');
    var btn = document.getElementById('mybtn');
    // var $btn = $('#mybtn');

    btn.onclick = function() {
        ifr.contentWindow.getElementById('inH1').style.color = 'red';
        // console.log(ifr.contentWindow);
    }
    


}(window, document, jQuery);