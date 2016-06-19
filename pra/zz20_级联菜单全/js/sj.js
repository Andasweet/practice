!function(window, document, $, undefined) {
    // var $pro = $('#pro'),
    //     $city = $('#city'),
    //     $area = $('#area'),
       var cityData,areaData;

    // $pro.html(renderSel(cityData3));
    
    renderSel(cityData3,'pro');

    function renderSel(arr, renderId) {
        var renArr = ['<option value=0>请选择</option>'];
        $.each(arr,function(ind,obj) {
            renArr.push('<option value="',obj.value,'">', obj.text,'</option>');
        })
        
        // return renArr.join('');
        return $('#'+renderId).html(renArr.join(''));

    }

    $('#pro').on('change',function() {
        var val = this.value;
        cityData = getChildren(val,cityData3);

        renderSel(cityData,'city');
        // $city.html(renderSel(cityData));
        $('#area').html('<option>请选择</option>');
    });

    $('#city').on('change',function() {
        var val = this.value;
        areaData = getChildren(val,cityData);

        renderSel(areaData,'area');
    });

    function getChildren(val,arr) {
        var useArr = [];
        $.each(arr,function(index,obj) {
            if(val == obj.value) {
                useArr = obj.children;
                return false;
            };
        });
        return useArr;
    };
    

    // console.log(cityData3);

}(window, document, jQuery);