function openPage(page, target) {
    document.body.classList.add('page-exit');

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