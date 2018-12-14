function openPage(page, target) {
    document.body.classList.add('page-exit'); document.body.classList.remove('page-open');

    if (page) setTimeout(() => window.open(page, target), 500);
}

function getData(cb) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        cb(JSON.parse(this.responseText));
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