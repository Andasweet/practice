/*function renderTab(className) {  
    var $target = $(className);

    $target.each(function(i,obj) {
        var $obj = $(obj),
            $lis = $obj.find('li'),         
            $divs = $obj.find('div div'),
            evt;

        if($obj.hasClass('mouseover')) {
            evt = 'mouseover';
        } else {
            evt = 'click';
        };

        $lis.on(evt,function() {
            var $this = $(this),
                index = $this.index();

            if(evt=='mouseover') {
                timer = setTimeout(function(){
                    $this.addClass('on').siblings('.on').removeClass('on');
                    $divs.eq(index).show().siblings().hide();
                },300)

                $lis.on('mouseout',function(){
                    if(timer) {
                        clearTimeout(timer);
                    }
                })
            } else {
                $this.addClass('on').siblings('.on').removeClass('on');
                $divs.eq(index).show().siblings().hide();
            }
        })
    })    
}
renderTab('.tab');*/

function tabchange() {
    var header = document.getElementById('tHeader'),
        lis = header.getElementsByTagName('li'),
        i, len = lis.length,
        j,
        tbody = document.getElementById('tbody'),
        divs = tbody.children;
    for(i=0; i<len; i++) {
        lis[i].setAttribute('index',i);
        lis[i].onclick = function() {
            var index = this.getAttribute('index');
            for(j=0; j<len; j++) {
                lis[j].className = '';
                divs[j].style.display='none';
            };
            this.className ='on';
            divs[index].style.display='block';           
        }
    }
}
tabchange();