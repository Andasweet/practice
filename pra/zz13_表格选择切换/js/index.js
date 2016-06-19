function check() {
  var dxz = id('dxz'),
      yxz = document.getElementsByName('yxz'),
      i, len = yxz.length,
      j,k;

  dxz.onclick = function () {
    var status = '', bcc = 'red';
    if(this.checked) {
      status = 'checked';
    } else {
      status = '';
      bcc = '#fff';
    }
    for(i=0; i<len; i++) {
      yxz[i].checked = status;
      yxz[i].parentNode.parentNode.style.backgroundColor=bcc;
    }
  }

  for(j=0; j<len; j++) {
    yxz[j].onclick = function() {
      if(this.checked){
        this.parentNode.parentNode.style.backgroundColor='red';
      } else {
        this.parentNode.parentNode.style.backgroundColor='#fff';
      }
      if(yxzAll(yxz[j])) {
        dxz.checked = 'checked';
      } else {
        dxz.checked = '';
      }
    }   
  }

  function yxzAll() {
    for(k=0; k<len; k++) {
      if(!yxz[k].checked) {
        return false;
      };
    };
    return true;
  }
}

check();