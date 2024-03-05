let clicked = false;

function off() {
    if (clicked === false) {
        clicked = true;
        let overlay = document.getElementById('overlay');
        overlay.style.opacity = '0';
        setTimeout(function () {
            overlay.style.display = 'none'; 
        }, 500);
        var audio = new Audio('./resources/hello-kitty.mp3');
        audio.play();
    }
}