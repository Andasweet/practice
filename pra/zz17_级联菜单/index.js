!function(window, document, $, undefined) {
    var pro = [
        {name:'北京市', id:10},
        {name:'河北省', id:11},
        {name:'辽宁省', id:12},
        {name:'黑龙江省', id:13}
    ];

    var city = {
        10:[
            {name:'北京市', id:101}
        ],
        11:[
            {name:'邯郸市',id:111},
            {name:'保定市',id:112},
            {name:'涿州市',id:113},
            {name:'沧州市',id:114}
        ],
        12:[
            {name:'沈阳市',id:121},
            {name:'锦州市',id:122},
            {name:'阜阳市',id:123},
            {name:'葫芦岛市',id:124}
        ],
        13:[
            {name:'哈尔滨市',id:131},
            {name:'牡丹江市',id:132},
            {name:'大庆市',id:133},
            {name:'鸡西市',id:134}
        ]
    };

    var ars = {
        101:[
            {name:'海淀区'},
            {name:'朝阳区'},
            {name:'东城区'},
            {name:'西城区'},
            {name:'房山区'},
            {name:'顺义区'},
            {name:'昌平区'}
        ],
        111:[
            {name:'丛台区'},
            {name:'邯山区'},
            {name:'复兴区'},
        ],
      
        112:[
            {name:'竞秀区'},
            {name:'莲池区'},
            {name:'满城区'},
            {name:'清苑区'},
            {name:'徐水区'}
        ],
        113:[
            {name:'经济开发区'},
            {name:'码头镇'},
            {name:'松林店镇'},
            {name:'东城坊镇'}
        ]
    };

    var $prov = $('#province'),
        $city = $('#city');   

    $prov.html('<option value="-1">请选择</option>'+rendersel(pro));

    $prov.on('change',function() {
        var ind = this.value,
            cityArr = city[ind];

        if(ind==-1) {
            $city.html('<option>请选择</option>');
            return;
        };
        $city.html('<option value="-1">请选择</option>'+rendersel(cityArr));
    });

    $city.on('change',function() {
        var ind2 = this.value,
            areArr = ars[ind2];
        if(ind2==-1) {
            $('#area').html('<option>请选择</option>');
            return;
        };
        $('#area').html('<option value="-1">请选择</option>'+rendersel(areArr));
    })


    function rendersel(arr) {
        var opts = [],
            i,
            len = arr.length;
        for (i=0; i<len; i++) {
            opts.push('<option value="',arr[i].id,'">',arr[i].name,'</option>');
        }
        return opts.join('');
    }


}(window, document, jQuery);