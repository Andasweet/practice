!function() {
    var cityData, areaData;

    function renderSel(arr,renderId) {
        var opts = ['<option value = "0">请选择</option>'];
        $.each(arr, function(ind, obj) {
            opts.push('<option value="',obj.value,'">',obj.text,'</option>');
        })
        return $('#'+renderId).html(opts.join(''));
    };
    renderSel(cityData3,'pro');

    $('#pro').on('change',function() {
        var val = this.value;
        cityData = getChildren(val,cityData3);
        renderSel(cityData,'city');
        $('#area').html('<option value = "0">请选择</option>');
    })

    $('#city').on('change',function() {
        var val = this.value;
        areaData = getChildren(val,cityData);
        renderSel(areaData,'area');
    })

    function getChildren(val, arr) {
        var useChildren = [];
        $.each(arr, function(index,obj){
            if(obj.value == val) {
                useChildren = obj.children;
                return false;  // 找到相等的，就停止each的遍历
            }
        })
        return useChildren;
    };

}();