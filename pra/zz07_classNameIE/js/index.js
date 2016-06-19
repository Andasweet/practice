function $(tag){
    if(typeof tag=='string'){
        return document.getElementsByTagName(tag);
    } else {
        return tag;
    }
}

function $$(cls) {
    var i, elems = $('*'), len=elems.length, useArr=[];
    if(document.getElementsByClassName){
        return document.getElementsByClassName(cls);
    } 
    for(i=0; i<len; i++) {
        if(elems[i].className.indexOf(cls) > -1) {
            useArr.push(elems[i]);
        }
        console.log(elems[i]);
    }   
    return useArr;
}


var r = $$('green2');
console.log(r);

len = r&&r.length||0;
for(var i=0; i<len; i++) {
    r[i].style.backgroundColor='green';
}
