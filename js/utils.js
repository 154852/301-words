function openPage(page, target) {
    document.body.classList.add('page-exit'); document.body.classList.remove('page-open');

    if (page) setTimeout(function() { window.open(page, target) }, 500);
}

function getData(cb) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) cb(JSON.parse(xhr.responseText));
    };
    xhr.open('GET', 'app/data.json');
    xhr.send();
}

function escapeHTML(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

function isIE() {
    return /MSIE|Trident/.test(window.navigator.userAgent);
}

if (isIE()) {
    window.XMLHttpRequest = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
    };
}