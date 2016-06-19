!function() {

    var app = angular.module('app1',[]);

    app.controller('controller1', function($scope) {       
        $scope.heads = ['姓名','年龄','性别','邮箱'];
        
        $scope.data = [
            {name:'a', age:18, gender:'女', email:'a.@163.com'},
            {name:'b', age:23, gender:'男', email:'b.@163.com'},
            {name:'c', age:16, gender:'女', email:'c.@163.com'},
            {name:'d', age:25, gender:'男', email:'d.@163.com'},
            {name:'e', age:29, gender:'女', email:'e.@163.com'}
        ]
    });

}();