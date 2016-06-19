function $(id) {
    if (typeof id == 'string') {
        return document.getElementById(id);
    } else {
        return id;
    }
}

var wp = $('wp');
    wpHtml = [
        '<ul>'
    ];

for (var i=1; i<10; i++) {
    wpHtml.push('<li>');
    for (var j=1; j<=i; j++) {
        wpHtml.push('<span>'+i+'*'+j+'='+i*j+'</span>');
    }
    wpHtml.push('</li>');
}

wpHtml.push('</ul>');
wp.innerHTML = wpHtml.join('');