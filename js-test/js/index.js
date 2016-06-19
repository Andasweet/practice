!function() {
  function repeater (fn,i) {

 // 要求重复执行fn函数i次,并且fn每次会传入不同的参数。
    for(var j=0; j<i; j++) {
      fn();
    } 

    console.log(arguments);

  } 
  repeater(Animal,3);

  function Animal(type) {
    this.name = 'Animal';
    this.run = function (x,y) {
      console.log(this.name + ' is running...');
    }
  }

  function dog() {
    this.name = "wangcai"
  }
  var animal = new Animal();
  var dog1 = new dog();

  console.log(typeof(dog1))

  animal.run.call(dog1,"abc","def");



}();



/*var age = 60;

if (age<12) {
   console.log('儿童');
} else if (age>=12&&age<18) {
    console.log('少年');
} else if (age>=18&&age<30) {
    console.log('青年');
} else if (age>=30&&age<50) {
    console.log('中年');
} else {
    console.log('老年');
}
*/

// var ext='img/abc/pic.png';
// // //ext=ext.substring(ext.indexOf('.'));
// ext=ext.substr(ext.indexOf('.'),4);
// console.log(ext);

// var m='sldkfj';

// if (m.lastIndexOf('j')==m.length-1) {
//     alert('该字符串是以j结尾');
// }
// else {
//     alert('该字符串不是以j结尾');
// 

/*var sum=0
for (var a = 0; a <= 10; a++) {
   if (a%2==1) {
         sum+=a
  }; 
};
console.log(sum);

var i=0, sum=0;
while (i<=100) {
    sum+=i;
    i+=2;
}
console.log(sum);

for(var i=0;i<=10;i++) {
    if(i==3){
        break;
    }
    console.log(i);
}


var str ='sldkjfds;lkdj';
if (str.lastIndexOf('j')==str.length-1){
    alert('该字符串是以j结尾');
}
else {
    alert('该字符串不是以j结尾');
}

var a='123b';
console.log(isNaN(a));

var date= new Date();
console.log(date.getFullYear()+'年');


var arr1=['a','b','c','d','e'];
//var arr2=['oo']

//console.log(arr1.push('m'));
//console.log(arr1);

for (var i=0;i<arr1.length;i++) {
      console.log(arr1[i]);
}

document.write('</br>');

for ( var i = 0; i < 8; i++ ) {
  for (var j = 0; j < 10; j++) {
    if(i==0||i==7){
     document.write('#');    
    }else if (i==1||i==4){
     document.write('&');
    }else if (i==2||i==5){
        document.write('@');
    }else {
        document.write('%');
    }
  }
  document.write('</br>');
}

var a = 'lsdkjfldsdj';

document.write(a.charAt(3));

var date = new Date();
var now = new Date();
now.setDate(29);
if (now>date){
    alert('昨天大于今天')
} else {
    alert('昨天小于今天')
}

var arr = ['a','bsadda','c','d'];
var len = arr.length,i;
for (i=0;i<len;i++){
    console.log(arr[i]);
}
arr.pop();
console.log(arr);
arr.sort()
console.log(arr);

var sum = 0;
for(a=0;a<=5;a++){
   sum+=Math.pow(a,2);
}
console.log(sum);

var divs = document.getElementsByTagName('div');
// div.style.color = '#fff';
// div.style.backgroundColor = 'red';

for(var i=0; i<divs.length; i++){
    if(i==0){
        divs[0].innerHTML='<h1>今天是</h1>';
    }else if (i==1){
        divs[1].innerHTML='<h1>星期五</h1>';
    }else {
        alert('没有找到');
    }
}
//console.log(divs);

var dsq = document.getElementById('dsq');
var span = document.createElement('span');
var text = document.createTextNode('我是谁');
span.appendChild(text);
dsq.appendChild(span);
// dsq.removeChild(span);
span.parentNode.removeChild(span);

var arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
var i = Math.floor(Math.random()*arr.length);
console.log(arr[i]);

function texttype (a) {
  var type;
  if (a instanceof Object) {
    if (a instanceof Array) {
      type = 'array';
    } else {
      type = 'object';
    }
  } else {
    type = typeof a;
  }
  return type;
}

var type = texttype([2,4,5,6]);
console.log(type);

window.open('http://www.baidu.com');

function getType(a) {
  var type;
  if (a instanceof Array) {
      if (a instanceof Array) {
        type = 'array';
      } else {
        type = 'object';
      }
  } else {
       type = typeof a;
  }
  return type;
}

var type = getType([1,2,2])
console.log(type); */


/*
    写一个函数，判断并返回传入参数的数据类型
    e.g.
    get 8,    return "number"
    get [1],  return "array"
    get {},   return "object"
    ...
 */

// var mybtn = $('mybtn'),
//     sel = $('sel'),
//     arr = '北京 上海 广州 香港 杭州 深圳'.split(' '),
//     newArr = [],
//     i,len = arr.length;
// mybtn.onclick = function() {
//   for (i=0; i<len; i++) {
//     newArr.push('<option>',arr[i],'</option>');
//   }
//   sel.innerHTML = newArr.join('');
// }   


// btn.onclick = function () {
//     for (var i=0; i<city.length; i++) {
//     selectHtml.push('<option>'+city[i]+'</option>');
//     xz.innerHTML = selectHtml.join('');
//     }

// var i=1,
//     timer;
// timer = setInterval(function(){
//   // i<11? console.log(i);i++:clearInterval(timer);
//   if(i<11) {
//     console.log(i);
//     i++;
//   } else {
//     clearInterval(timer);
//   } 
// },1000);

// var obj = {name:'lenovo',price:4000,type:'good',color:'black'};
// alert(obj['color']);
// obj.name = 'apple';
// alert(obj.name);
// for(var ind in obj){
//   console.log(ind);
// }

// var xs = document.getElementsByClassName('xs');
// var yc = document.getElementsByClassName('yc');

// xs[0].onclick = function() {
//   if(xs[0].innerHTML=='显示') {
//       xs[0].innerHTML = '隐藏';
//       yc[0].style.display = 'block';
//   } else {
//       xs[0].innerHTML = '显示';
//       yc[0].style.display = 'none';    
//   };
// }

// var i,sum = 1;
// for(i=10; i>0; i--) {
//     sum*=i;
// }
// console.log(sum);


// $('.xs').on('click',function(){
//   var $yc = $('.yc');
//   $yc.toggleClass('bc');
//   if($yc.hasClass('bc')){
//     this.innerHTML = '隐藏';
//   } else {
//     this.innerHTML = '显示';
//   } 
// })
// var $sel = $('#sel')

// $('#mybtn').on('click',function(){
//   console.log($sel.val());
// })

// var $nav = $('#navh li');

// $nav.on('click',function(){
//   var $this = $(this);
//   $this.addClass('on').siblings().removeClass('on');
// })

// function ab() {
//   var ipt=prompt('请输入a的值'),
//       opt;
//   if(ipt||!isNaN(ipt)) {
//     if(ipt>0.01 && ipt<1.37){
//         opt = 2*ipt+1;
//         alert('得到的结果是：' + opt);
//     } else {
//         opt = 2*ipt+2;
//         alert('得到的结果是：' + opt);
//     }
//   } else {
//     alert('请输入有效数字');
//   }
  
// }
// ab();

/*!function(window,document){
  var input = document.createElement('input'),
      ipts = $$('input'),
      i,
      len = ipts.length,
      plh,
      phText,
      span = $$('span');
  if('placeholder' in input) {
    for (var j=0; j<span.length; j++){
      span[j].style.display = 'none';
    }
    return;
  }
  for(i=0; i<len; i++) {
      phText = ipts[i].getAttribute('placeholder');
      plh = ipts[i].parentNode.getElementsByTagName('span')[0],
      plh.innerHTML = phText;

      plh.onclick = function() {
        this.parentNode.getElementsByTagName('input')[0].focus();
      }
      ipts[i].onkeyup = function() {
        var status = 'block';
        if(this.value.length>0) {
          status = 'none';
        }
        this.parentNode.getElementsByTagName('span')[0].style.display = status;
      }
  }
}(window,document);

*/


