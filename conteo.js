function iniciarCuentaAtras() {
    const fechaCumple = new Date('2025-03-07T00:00:00'); // Fecha del cumpleaños
    function actualizarReloj() {
        const ahora = new Date().getTime();
        const distancia = fechaCumple - ahora;

        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById('relojCuentaAtras').innerHTML =
            dias + 'días ' + horas + 'h ' + minutos + 'm ' + segundos + 's';

        if (distancia < 0) {
            clearInterval(intervalo);
            document.getElementById('relojCuentaAtras').innerHTML = '¡Hoy es el gran día!';
        }
    }
    actualizarReloj();
    const intervalo = setInterval(actualizarReloj, 1000);
}
iniciarCuentaAtras();
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}