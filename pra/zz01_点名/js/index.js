// var date = new Date();
// var hour = date.getHours();
// var minute = date.getMinutes();
// var second = date.getSeconds();
// var dm = document.getElementById('dm');

// dm.innerHTML = hour+':'+minute+':'+second;

/*setInterval(function(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
   // var time =  hour+':'+minute+':'+second;
   if(second<10){
        second='0'+second;
   }
    var dm = document.getElementById('dm');  
    dm.innerHTML = hour+':'+minute+':'+second;
} ,1000);*/

var stu = ["阚鑫磊", "魏先强", "李晶", "时刘韩", "王珂", "郇昌", "杨天骄", "詹时雨", "张勃", "张金洋", "周振洋"]
var timer;
var start = document.getElementById('start');
var stop = document.getElementById('stop');

//第三种方法
start.onclick = function(){
  if (start.innerHTML =='开始') {
      start.innerHTML ='停止';
      timer = setInterval(function(){
        var i = Math.floor(Math.random()*11);
        dm.innerHTML = stu[i];
      },100);
  } else {
      start.innerHTML = '开始';
      clearInterval(timer);      
    }    
}

// 第一种方法
// start.onclick=function(){
//      if(timer){
//          return;
//      }
//      timer = setInterval(function(){
//      var i = Math.floor(Math.random()*11);
//      dm.innerHTML = stu[i];
//      },100);
// }
// stop.onclick=function(){
//     clearInterval(timer);
//     timer=undefined;
// }

//第二种方法
// start.onclick=function(){
//     var i = Math.floor(Math.random()*11);
//     start.disabled='disabled';
//     timer = setInterval(function(){
//      dm.innerHTML = stu[i];
// },100);
// }
// stop.onclick=function(){
//     clearInterval(timer);
//     start.disabled='';
// }
 
