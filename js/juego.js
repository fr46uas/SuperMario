var escenario = document.getElementById('escenario')
var saltaMario = document.querySelector('#runner img');

var avanceEscenario = 0;

document.addEventListener('keydown', saltar)
document.addEventListener('keyup', correr)

var intervalo1 = setInterval(moverEscenario, 100);

var tiempoIntervalo = Math.random() * 5000;
var seta = setInterval(salirSeta, tiempoIntervalo)

function moverEscenario() {
    avanceEscenario -= 10;
    escenario.style.backgroundPosition = avanceEscenario + 'px 0px'

}

function saltar(e) {

    switch (e.keyCode) {
        case 32:
            saltaMario.src = 'images/salto.gif';
            saltaMario.style.display = 'inline-block';
            saltaMario.style.paddingBottom = "100px"
            break;
    }
}

function correr(e) {
    switch (e.keyCode) {
        case 32:
            saltaMario.src = 'images/mario.gif';
            saltaMario.style.paddingBottom = "0px"

            break;
    }
}

function salirSeta() {
    var seta = document.createElement('div');
    var avanceSeta = 0;
    seta.className = 'malo';
    escenario.appendChild(seta);

    var intervaloBicho = setInterval(function () {
        if (avanceSeta < 850) {

            avanceSeta += 15;
            seta.style.marginRight = avanceSeta + 'px';

        } else {

            seta.parentNode.removeChild(seta);
            clearInterval(intervaloBicho);
        }

    }, 100)

}



