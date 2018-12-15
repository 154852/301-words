function linedBackground(parent) {
    const lines = [];
    let index = 0;

    const gen = () => {
        const element = document.createElement('div'); 
        element.classList.add('bg-line-' + (index % 2 == 0? 'vert':'hori'));
        element.style.left = ((Math.random() * 90) + 5) + '%';
        element.style.top = ((Math.random() * 90) + 5) + '%';

        element.style[index % 2 == 1? 'width':'height'] = (parseInt(Math.random() * 2) + 1) + 'px';

        element.style.animationDuration = (parseInt(Math.random() * 700) + 500) + 'ms';
        element.style.webkitAnimationDuration = element.style.animationDuration;
        element.style.mozAnimationDuration = element.style.animationDuration;
        element.style.oAnimationDirection = element.style.animationDuration;

        parent.appendChild(element);

        lines.push(element);

        index += 1;
    };

    for (let i = 0; i < 15; i++) gen();

    const loop = () => {
        const element = lines[0];
        const startStyle = element.getAttribute('style');

        element.style.animation = 'none';
        element.setAttribute('style', startStyle + ';animation:none;-webkit-animation:none;-moz-animation:none;-o-animation:none');
        element.offsetHeight; //Trigger re-workflow

        element.setAttribute('style', startStyle + ';animation-direction:reverse;-webkit-animation-direction:none;-moz-animation-direction:none;-o-animation-direction:none');
        lines.splice(0, 1);

        gen(); 

        setTimeout(() => {
            element.parentElement.removeChild(element);
        }, parseInt(element.style.animationDuration.split(/[^0-9]/)[0]));
        setTimeout(loop, 1000);
    };

    setTimeout(loop, 1000);
}