function linedBackground(parent) {
    for (let i = 0; i < 15; i++) {        
        const element = document.createElement('div'); 
        element.classList.add('bg-line-' + (i % 2 == 0? 'vert':'hori'));
        element.style.left = ((Math.random() * 90) + 5) + '%';
        element.style.top = ((Math.random() * 90) + 5) + '%';

        element.style[i % 2 == 1? 'width':'height'] = (parseInt(Math.random() * 2) + 1) + 'px';

        element.style.animationDuration = (parseInt(Math.random() * 1000) + 200) + 'ms';
        element.style.webkitAnimationDuration = element.style.animationDuration;

        parent.appendChild(element);
    }
}