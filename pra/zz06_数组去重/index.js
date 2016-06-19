var arr = ['s',3,5,'abc',9,3,'s',20];

function unique2() {
  var obj = {},
      len = arr.length,
      newArray = [],
      i;

  for(i=0;i<len;i++) {
    obj[arr[i]]=0;
  };
  for(var index in obj) {
    newArray.push(index);
  }
  
  console.log(newArray);
}
var r = unique2(arr);
console.log(r);





// function unique1(array){
//   var len = array.length,
//       arr2 = [],
//       i;
//   for(i=0;i<len;i++){
//     if(inArray(arr[i],arr2)==-1){
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// var newArray = unique(arr);
// console.log(newArray);

// function inArray(index,array){
//   var i=0,
//       len=array.length;
//   for(;i<len;i++){
//     if(index==array[i]){
//       return index;
//     }
//   }
//   return -1;
// }



// function uniq3(array) {
//   var i, len=array.length, j;

//   for(i=0; i<len; i++){

//     for(j=i+1; j<len; j++) {

//       if(array[i]==array[j]) {
//         array.splice(j,1);
//       }
//     }  
//   }
//   console.log(array);
// }
// uniq3(arr);