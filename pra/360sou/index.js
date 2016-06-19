!function(window, document, $, undefined) {

    var data = [
        {name:'小明'},
        {name:'小妈妈'},
        {name:'小时代'},
        {name:'小苹果'},
        {name:'小说'},
        {name:'小米官网'},
        {name:'小小智慧树'},
        {name:'小明怎么了'},
        {name:'小样儿'},
        {name:'小猪佩琪'}
    ];

    var $ipt = $('#ipj input'),
        $ul = $('#ssjy');
    $ipt.on('keyup', function(e) {
        var val = this.value,
            kcode = e.keyCode,
            $lis = $ul.find('li'),
            index;
       
        if (kcode==40 || kcode==38){
            var len = $lis.length;
            index = $ul.find('li.act').index();

            if(index<0) {
                index = 0;
            } else {
                if(kcode==40){
                    index++;
                } else {
                    index = len;
                    index--;
                };
            };

            if(index>=len) {
                index = 0;
            };
            $ul.find('li:eq('+index+')')
                .addClass('act')
                .siblings('.act')
                .removeClass('act');
            return;
        }
       
        if(val=='') {
            $ul.hide();
        } else {
            $ul.html(renderLi(data, val)); 
            // $ul.find('li:first').addClass('act');
            $ul.show();
        }
    })

    function renderLi(tem,key) {
        var lis = [],
            i,
            len = tem.length,
            uLi;
        for(i=0; i<len; i++) {
            uLi = tem[i].name;
            if(uLi.indexOf(key)>-1) {
                lis.push('<li>',uLi,'</li>');
            };
        }
        return lis.join('');
    }
}(window, document, jQuery);