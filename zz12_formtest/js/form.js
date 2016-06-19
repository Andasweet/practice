function checkform() {
    var xm = $('xm'),
        age = $('age'),
        mobile = $('mobile'),
        email = $('email'),
        mobileRE = /^1\d{10}$/,
        emailRE = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/,
        hobbies = document.getElementsByName('hobby'),
        edu = $('edu');
    if(xm.value=='') {
       alert('姓名不能为空');
       return false;
    };
    if(!isNaN(xm.value)) {
        alert('姓名格式不正确');
        return false;
    };
    if(age.value=='') {
       alert('年龄不能为空');
       return false;
    };
    if(isNaN(age.value)) {
        alert('年龄请输入数字');
        return false;
    };
    if(!mobileRE.test(mobile.value)) {
        alert('手机号格式不正确');
        return false;
    };
    if(!emailRE.test(email.value)) {
        alert('邮箱格式不正确');
        return false;
    };

    if(!checkhobby(hobbies)) {
        alert('请至少选择一个爱好');
        return false;
    };

    if(edu.value == '0') {
        alert('请选择学历');
        return false;
    };

    alert('提交成功');
    return true;

    function checkhobby(hob) {
        var i,len=hob.length;
        for(i=0; i<len; i++) {
            if(hob[i].checked) {
                return true;
            };
        };
        return false;       
    }
}
