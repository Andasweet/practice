!function() {

    var contactList = {

        currKey: undefined,
        init: function() {
            this.event();
            this.renderList();
        },
        event: function() {
            $('#saveBtn').on('click',this.onSaveBtnClick);
            $('#list').on('click','#delBtn',this.onDelBtnClick);
            $('#list').on('click','#excBtn',this.onExcBtnClick);
        },
        onExcBtnClick: function() {
            var key = $(this).attr('ukey'),
                obj = JSON.parse(localStorage.getItem(key));
            var name = $('#name').val(obj.name),
                gender = $('input[name=gender][value='+obj.gender+']').trigger('click'),
                mobile = $('#mobile').val(obj.mobile),                
                address = $('#address').val(obj.address);
            contactList.currKey = key;
        },
        onDelBtnClick: function() {
            var key = $(this).attr('ukey');
            if(confirm('确定要删除该联系人吗')) {
                localStorage.removeItem(key);
            }
            contactList.renderList();
        },
        onSaveBtnClick: function() {
            var name = $('#name').val(),
                gender = $('input[name=gender]:checked').val(),
                mobile = $('#mobile').val(),
                address = $('#address').val();
            var key = new Date().getTime();
            var obj = {
                name:name,
                gender:gender,
                mobile:mobile,
                address:address
            };
            var value = JSON.stringify(obj);
            console.log(gender)
            // check
            if(name =='') {
                alert('姓名不能为空');
                return;
            }
            if(mobile =='') {
                alert('电话不能为空');
                return;
            }
            if(address =='') {
                alert('地址不能为空');
                return;
            }
            if(contactList.currKey) {
                localStorage.setItem(contactList.currKey, value);
                contactList.currKey=0;
            } else {
                localStorage.setItem(key, value);               
            }
            $('#reset').trigger('click');
            contactList.renderList();
        },
        renderList: function () {
            var list = [];
            var i, len = localStorage.length;
            var key,obj;
            for(i=0; i<len; i++) {
                key = localStorage.key(i);
                obj = JSON.parse(localStorage.getItem(key));
            if(!obj.gender){
                obj.gender='男';
            };
              
            // console.log(obj);
                list.push(
                    '<tr>',
                        '<td>',obj.name,'</td>',
                        '<td>',obj.gender,'</td>',
                        '<td>',obj.mobile,'</td>',
                        '<td>',obj.address,'</td>',
                        '<td>',
                            '<button id="delBtn" ukey=',key,'>删除</button>',
                            '<button id="excBtn" ukey=',key,'>修改</button>',
                        '</td>',
                    '</tr>');
            }
            $('#list').html(list.join(''));          
        }
    };
    contactList.init();

}();