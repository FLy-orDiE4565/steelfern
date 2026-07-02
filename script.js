const eskimo = document.getElementById("eskimo");
function rotateYDIV() {
    for (let i = 0; i < 360; i++) {
        eskimo.style.transform = `rotateY(${i}deg)`;
    }
}