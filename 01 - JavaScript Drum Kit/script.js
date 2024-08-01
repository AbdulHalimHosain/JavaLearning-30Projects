function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio){
        return;
    }
    else{
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        }
}
window.addEventListener('keydown', playSound);



const keys = document.querySelectorAll('.key');
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('transitionend', removeTransition);
}
function removeTransition(event) {
    if (event.target.classList.contains('playing')) {
        event.target.classList.remove('playing');
    }
}


