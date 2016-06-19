var arr = [
    {name:'a', age:18, gender:'女', email:'a.@163.com'},
    {name:'b', age:23, gender:'男', email:'b.@163.com'},
    {name:'c', age:16, gender:'女', email:'c.@163.com'},
    {name:'d', age:25, gender:'男', email:'d.@163.com'},
    {name:'e', age:29, gender:'女', email:'e.@163.com'}
];

function bd() {
    var i, len=arr.length,newArr=[], tbl = $('tbl');
    for(i=0; i<len; i++) {
        newArr.push(
        '<tr>',
            '<td>',arr[i].name,'</td>',
            '<td>',arr[i].age,'</td>',
            '<td>',arr[i].gender,'</td>',
            '<td>',arr[i].email,'</td>',
        '</tr>')
    }
    tbl.innerHTML+=newArr.join('');
}

bd();

