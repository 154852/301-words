function track(element) {
    window.addEventListener('mousemove', function(event) {
        const position = {x: event.pageX, y: event.pageY};
        position.x = (position.x - (window.innerWidth * 0.5)) / (window.innerWidth * 0.5);
        position.y = (position.y - (window.innerHeight * 0.5)) / (window.innerHeight * 0.5);

        position.x *= Math.abs(position.x);
        position.y *= Math.abs(position.y);

        position.x *= 0.6;
        position.y *= 0.6;

        position.x += 1;
        position.y += 1;

        element.setAttribute('style', 'margin-top: ' + position.y + 'em; margin-left: ' + position.x + 'em; margin-bottom: auto; margin-right: auto');
    });
}