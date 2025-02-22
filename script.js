particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "shape": {
            "type": "image",
            "image": {
                "src": "img/petalo.png", // Ruta de la imagen del pétalo
                "width": 100,
                "height": 100
            }
        },
        "size": {
            "value": 10,
            "random": true
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff", // Color de las líneas, si lo deseas diferente
            "opacity": 0, // Opacidad de las líneas, si lo deseas diferente
            "width": 0 // Ancho de las líneas, configurado en 0 para hacerlas transparentes
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            }
        }
    }
});
